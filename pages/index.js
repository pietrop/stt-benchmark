import Head from 'next/head';
import React, {useState, useEffect, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Comparison from '../components/comparison.js';

export default function Home() {
    const [countList, setCountList] = useState([0]);
    const [baseText, setBaseText] = useState('');
    const [baseMedia, setBaseMedia] = useState('');
    const videoElRef = useRef(null);
    useEffect(() => {

        videoElRef && videoElRef.current && videoElRef.current.addEventListener("timeupdate", function(){
            console.log('time updated', this.currentTime)
            let currentTime = this.currentTime;
            let wordsEl = document.querySelectorAll('.word');
            wordsEl.forEach((word)=>{
                if(word.dataset.start >= currentTime){
                    word.classList.add("unplayedWord");
                }
                else{
                    word.classList.remove("unplayedWord");
                }
            })
        });

    },[   ])

    const increaseCount = () => {
        console.log('increaseCount')
        countList.push(countList.length);
        const tmpCount = JSON.parse(JSON.stringify(countList));
        setCountList(tmpCount);
    }

    const decreaseCount = () => {
        countList.pop();
        const tmpCount = JSON.parse(JSON.stringify(countList));
        setCountList(tmpCount);
    }

    const handleBaseTextFileInput =(e)=>{
      console.log(e.target.files[0].name,e.target.files[0]);
      const reader = new FileReader();
        reader.onload = ()=>{
          const text = reader.result;
          // const node = document.getElementById('output');
          // node.innerText = text;
          setBaseText(text);
          console.log(reader.result.substring(0, 200));
        };
        reader.readAsText(e.target.files[0]);
    }

    const handleSetBaseMedia=(e)=>{
      const url = window.URL.createObjectURL(e.target.files[0]);
      setBaseMedia(url)
    }

    const handleRemoveComparison = (n)=>{
      console.log('handleRemoveComparison parent',n)
      const tmpCount = JSON.parse(JSON.stringify(countList));
      // const index = tmpCount.indexOf(n);
      // if (index > -1) {
      //   tmpCount.splice(index, 1);
      // }
      delete tmpCount[n];
      setCountList(tmpCount);
    }
    const handleWordClick = (e)=>{
        if(e.target.classList.contains('word')){
           const startTime = e.target.dataset.start;
           if(videoElRef&&videoElRef.current){
              try {
                videoElRef.current.currentTime = startTime;//parseFloat(parseFloat(startTime).toFixed(2));
                videoElRef.current.play();
              }catch(e){
                  console.error('couldn\'t play ',e)
              }
           }
        }
    }
    return (
        <div>
            <Head>
                <title>STT Benchmark</title>
            </Head>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>STT Benchmarking - <a href="https://github.com/pietrop/stt-benchmark" target="_blank" rel="noopener">github</a></h1>
                        {/* <p>You clicked { countList.length }  times</p> */}
                      
                        {/* <Form>
                          <Form.File 
                            id="custom-file"
                            label="Select base text  file"
                            custom
                          />
                        </Form> */}
                        <Form.File>
                          <Form.File.Label>Base text file input<code>.txt</code></Form.File.Label>
                          <Form.File.Input onChange={handleBaseTextFileInput}/>
                        </Form.File>

                        <Form.File>
                          <Form.File.Label>Video or audio file <code>mp4</code>,<code>ogg</code>,<code>webm</code>,<code>wav</code>,<code>mp3</code></Form.File.Label>
                          <Form.File.Input onChange={handleSetBaseMedia}/>
                        </Form.File>
                      
                    </Col>
                    <Col>
                    { baseText && countList.length >1 ?    <div> 
                      <h3>Leggend</h3>
                        Equal: Some equal text
                        <br/>
                        Inserted (by STT): <span class='insert'>an</span> <span class='insert'>inserted</span> <span class='insert'>word</span>
                        <br/>
                        Deleted (not recognised by STT):<span class='delete'>a</span>  <span class='delete'>deleted</span> <span class='delete'>word</span>
                        <br/>
                        Replaced:<span class='replaceBaseTextLine line'>
                        <span class='replaceBaseText '>Some</span>
                        <span class='replaceBaseText '>base</span>
                        <span class='replaceBaseText '>text</span>
                        <span class='replaceBaseText '>line</span>
                        </span>
                        <span class='replaceSttLine line'>
                        <span class="replaceStt ">replaced</span>
                        <span class="replaceStt ">by</span>
                        <span class="replaceStt ">stt</span>
                        <span class="replaceStt ">hypothesis</span>
                        </span>
                    </div> : null}
                    </Col>
                    <Col>
                     {/* {baseMedia&&   */}
                      <video  ref={videoElRef}  className='videoPreview' src={baseMedia} style={ {  width: '100%',  height: '200px' }  }  controls></video>
                      {/* } */}
                    </Col>
                </Row>

            </Container>
            <Container fluid>
                <Row>
                    <Col>
                   { baseText &&  <Button block
                            onClick={increaseCount}>
                            Add a new comparison 
                        </Button>}
                    </Col>
                    {/* <Col>
                        <Button block onClick={decreaseCount}>
                            Remove One
                        </Button>
                    </Col> */} </Row>
                    <Row>
                  
                    </Row>
                <Row onClick={handleWordClick}> 
                {/* {baseText && <Col><h2>Base Text</h2><p>{baseText}</p></Col>} */}
                    {baseText &&
                    countList.map((n, index) => {
                      if(n){
                        return <Col key={index+n}><Comparison handleRemoveComparison={handleRemoveComparison} n={n} baseText={baseText}/></Col>
                      }
                })
                } </Row>
            </Container>
        </div>
    )
}


export async function getStaticProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}
