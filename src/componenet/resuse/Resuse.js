import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
//import { faCode,faGlobe,faBezierCurve, faArrowRight} from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Resuse() {
    window.addEventListener("scroll",()=>{
        let hh =window.scrollY
        if(hh>=2000){
            document.getElementById("q2q2q2").style.cssText="opacity: 1;transform: translate(0px, 0px)"
        }
        if (hh>=1800) {
            document.getElementById("asaa").style.cssText="opacity: 1;transform: translate(0px, 0px)"
            document.getElementById("q1q1q1").style.cssText="opacity: 1;transform: translate(0px, 0px)"
            document.getElementById("q3q3q3").style.cssText="opacity: 1;transform: translate(0px, 0px)"
        }
    })
    return (
<section id='Resuse'>        
    <Container>
        <h4 className='qz' id='asaa' >Resume</h4>
        <Row className='row iiii'>
            <Col className='cl-6 q1111'>
                <div className='q1q1q1' id='q1q1q1'>
                    <h3>Summary</h3>
                    <div>
                        <h5>Contact Information:</h5>
                        <ul>
                            <li>Name: Mitchel Jhonson</li>
                            <li>Phone: +20 128 968 1135</li>
                            <li>Email: asmdbce1238@gmail.com</li>
                            <li>Location: alx,egypt</li>
                        </ul>
                    </div>
                </div>
                <div className='q2q2q2' id='q2q2q2'>
                    <h3>Education</h3>
                    <div>
                        <h5>Bachelor of software engineer</h5>
                        <span>2021 - 2025</span>
                        <p>Bachelor of Science in software engineer, istanbul topkapli University, istanbul, turkey.</p>
                    </div>
                </div>
            </Col >
            <Col className='cl-6 q1111' >
                <div className='q3q3q3' id='q3q3q3'>
                    <h3>Technical Skills:</h3>
                    <div>
                        <ul>
                            <li>Proficient in JavaScript, HTML, CSS</li>
                            <li>entry experience in ReactJS</li>
                            <li>Familiarity with modern front-end frameworks such as ReactJS</li>
                            <li>i know bootstrap and scss</li>
                        </ul>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</section>
  )
}
