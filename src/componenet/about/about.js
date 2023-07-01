import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { faReact ,faHtml5,faCss3,faSass,faBootstrap,faJs} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function about({hii,hiiset,us}) {
    us(()=>{
        let iiii=()=>{
            hiiset(window.innerWidth)
        }
        window.addEventListener("resize",iiii)
    }
    ,[])
    window.addEventListener("scroll",()=>{
        let sr = window.scrollY
        if(sr >=190){
            document.querySelector('.qz').style.cssText ='opacity: 1;transform: translate(0px, 0px);'
        }
        if(sr >=300){
            document.querySelector('.qzz').style.cssText ='opacity: 1;transform: translate(0px, 0px);'
            document.querySelector('.eee').style.cssText ='opacity: 1;transform: translate(0px, 0px);'
        }
    })


  return (
    <div className='about'>
        <Container>
            <h3 className='qz'>About Me</h3>
            <Row className='row ii'>
            <Col className='cl-6 iii qzz'>
                <h4>I'm <span> Mahmoud Elshrawiy</span> a Web Developer.</h4>
                <Row className='row yy'>
                    <Col className='tt pp'sm={6}>
                        <h6><span>Name:</span> Mahmoud Elshrawiy </h6>
                    </Col>
                    <Col className='cl-6 pp' sm={6}>
                        <h6><span>Age:</span> 19 years</h6>
                    </Col>
                    <Col className='tt pp' sm={6}>
                        <h6><span>Email:</span> asmdbce1238@gmail.com</h6>
                    </Col>
                    <Col className='cl-6 pp' sm={6}>
                        <h6><span>From:</span> Egypt</h6>
                    </Col>
                </Row>
                <p>
                I'm a front-end Web Developer. I do enjoy developing modern and clean looking <br/>
                web pages using technologies like :React.js, JavaScript and html5 and scss and css3.
                </p>
                <a href="#r"> 
                    Download CV
                </a>
            </Col>
            <Col className='cl-6 eee'>
                <div className='qqqq'>
                    <div className='icon-1'><FontAwesomeIcon icon={faReact} /></div>
                    <div className='icon-2'><FontAwesomeIcon icon={faBootstrap} /></div>
                    <div className='icon-3'><FontAwesomeIcon icon={faCss3} /></div>
                    <div className='icon-4'><FontAwesomeIcon icon={faHtml5} /></div>
                    <div className='icon-5'><FontAwesomeIcon icon={faJs} /></div>
                    <div className='icon-6'><FontAwesomeIcon icon={faSass} /></div>
                </div>
            </Col>
        </Row>
        </Container>
    </div>
  )
}
