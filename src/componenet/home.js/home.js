import React from 'react'
import "./home.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function home({use,us}) {
  let [jj,jjSet]=use(["UI Developer.", "front-end Developer.","freelancer."])
  let i= 0
  let ii=0

  us(()=>{
    let ttt =[...jj[0].split('')]
    //let uuu=()=>{
     // ii=0
     // if (jj.length ===i) {
        i=0
     // }
     // i++
    //  ttt= [...jj[i].split('')]
   // }
  
    let rrrr=[]
    let yy=1
    let rrr=()=>{
  
      if (ttt.length ===ii) {
        yy =-1
      }
      if(rrrr.length===0){
          yy=1
          
            if (jj.length ===i+1) {
              i=0
            }else{
              ++i
            }
  
            ttt= [...jj[i].split('')]
          
  
      }
  
      if (yy===1) {
        rrrr= [...rrrr,ttt[ii]]
        ii+=1
      } else {
        ii-=1
        rrrr.length=ii
      }
      document.querySelector('#uuu').innerHTML=rrrr.join('')
    }
    setInterval(rrr, 200);
  },[])
  

  return (
    <section className='div'>
    <Container>
          <Row className='row'>
            <Col className='' oo={jjSet}>
                <h5>Welcome to my profile</h5>
                <h1>Hi, I'm<br/>Mahmoud Elshrawiy</h1>
                <div className='uuu'><span>a</span><h3 id='uuu'> </h3>|</div>
                <p>Want to work with the BEST in Frontend Developer & js Development? <br/>i am a front end Developer |html|js|css|scss|css3|html5</p>
                <a href="#kmgk" >contect us</a>
            </Col>
        </Row>
    </Container>

    </section>
  )
}
