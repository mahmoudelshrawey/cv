import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
//import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Skill() {
    window.addEventListener("scroll",()=>{
        let hh =window.scrollY
        if(hh>=1400){
            console.log("hh");
            document.getElementById("qwe").style.cssText="opacity: 1;transform: translate(0px, 0px)"
            document.getElementById("mahut").style.cssText="opacity: 1;transform: translate(0px, 0px)"
            document.getElementById("qaz").style.cssText="opacity: 1;transform: translate(0px, 0px)"
        }
    })
    return (
    <section id="skills">
        <Container>
            <h3 className='qz' id='qwe'>Skills & Experience</h3>
            <Row className='row'>
            <Col className='cl-6  qaz' id='qaz'>
                <h3>i help to create <span>Fromt-end websit.</span></h3>
                <p>
                We use several technologies to create websit front-end. i code and create web elements for amazing people around the world. i like working with new people. New people new Experiences. i use the following technologies to build web devloper: <span>HTML5</span>, <span>CSS3</span>, <span>SASS</span>, <span>Bootstrap</span>, <span>JavaScript</span>, <span>React</span>, <span>TypeScript</span>, <span>Git</span>.
                </p>
                <p>
                I am not a designer and I donn't have a good idea in UI/UX design. but i can help you with the ideas.
                </p>
            </Col>
            <Col className='cl-6 mahut' id='mahut'>
                <div className='qwe'><h3>HTML5</h3><div><span>90%</span></div></div>
                <div className='qwe1'><h3>CSS3</h3><div><span>80%</span></div></div>
                <div className='qwe2'><h3>SASS</h3><div><span>85%</span></div></div>
                <div className='qwe3'><h3>REACT JS</h3><div><span>75%</span></div></div>
            </Col>
        </Row>
        </Container>
    </section>
  )
}
