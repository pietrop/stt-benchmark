import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const diffsListAsHtmlContentOnly = require('stt-align-node').diffsListAsHtmlContentOnly;
const diffsCount = require('stt-align-node').diffsCount;

export default function Comparison(props) { // Declare a new state variable, which we'll call "count"
    const [comparisonData, setComparisonData] = useState(0);
    const [htmlDiffContent, setHtmlDiffContent] = useState('');
    const [diffCount, setDiffCount] = useState(null);
    const [comparisonName, setComparisonName] = useState(`Click to set comparison name ${props.n}`);

    

    const handleAddComparisonData = (e) => {
        const reader = new FileReader();
        reader.onload = ()=>{
          const text = reader.result;
          // const node = document.getElementById('output');
          // node.innerText = text;
          const tmpComparisonData = JSON.parse(text);
          console.log('tmpComparisonData',tmpComparisonData)
          setComparisonData(tmpComparisonData);
          console.log(reader.result.substring(0, 200));
          console.log('tmpComparisonData',tmpComparisonData);
          const tmpHtmlDiffContent = diffsListAsHtmlContentOnly(tmpComparisonData, props.baseText)
          setHtmlDiffContent(tmpHtmlDiffContent);
          const resultCount = diffsCount( tmpComparisonData, props.baseText);
          setDiffCount(resultCount)
        };
        reader.readAsText(e.target.files[0]);

     
    }

    const handleRemove = ()=>{
        console.log('handleRemove',props.n)
        props.handleRemoveComparison(props.n)
    }

    const handleSetComparisonName = ()=>{
        const resp = prompt('comparison name')
        if(resp){
            setComparisonName(resp)
        }
    }
    return (
        <div>
            <h2 onClick={handleSetComparisonName}>{comparisonName}</h2>
            <Button onClick={handleRemove}>Remove</Button>
            {/* <p>You clicked {count} times</p> */}
            <Form.File>
                <Form.File.Label>STT Transcription<code>.json</code>
                </Form.File.Label>
                <Form.File.Input onChange={handleAddComparisonData}/>
            </Form.File>
            <section>
                {diffCount && <>
                <ul>
                    <li>
                        <span className="total">Total (base text):</span> {diffCount.baseTextTotalWordCount}
                    </li>
                    <li>
                        <span className="equal">equal:</span> {diffCount.equal}
                    </li>
                    <li>
                        <span className="insert">insert:</span> {diffCount.insert}
                    </li>
                    <li>
                        <span class="replaceSTT ">replace:</span> {diffCount.replace}
                    </li>
                    <li>
                        <span className="delete">delete:</span> {diffCount.delete}
                    </li>
                    <li>
                        <strong title={'Word Error Rate, a measure for benchmarking stt transcript against accurate base text, lower WER indicates higher accuracy'}>WER:</strong>{(diffCount.replace + diffCount.delete + diffCount.insert)/diffCount.baseTextTotalWordCount}
                    </li>
                </ul>
                </>}
            </section>
            <div dangerouslySetInnerHTML={{__html: htmlDiffContent}} />
            {/* {htmlDiffContent} */}
        </div>
    );
}
