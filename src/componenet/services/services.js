import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { faCode,faGlobe,faBezierCurve, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function services({hii,us,hiiset }) {
    window.addEventListener("resize",()=>{
        console.log(window.innerWidth);
    })
    window.addEventListener("scroll",()=>{
        hiiset(window.scrollY)
        if (hii>600) {
            document.getElementById("e3").style.cssText="opacity: 1;transform: translate(0px, 0px)"
        }
        if (hii>800) {
            document.getElementById("q1").style.cssText="opacity: 1;transform: translate(0px, 0px)"
        }
        if (hii>820) {
            document.getElementById("q2").style.cssText="opacity: 1;transform: translate(0px, 0px)"
        }
        if (hii>850) {
            document.getElementById("q3").style.cssText="opacity: 1;transform: translate(0px, 0px)"
        }
    })

    return (
    <section className='services'>
        <Container>
            <h4 className='qz' id='e3'>my Services</h4>
            <Row className='row ii'>
            <Col className=' www123' id='q1'>
                <div className='qaz'>
                    <span>
                        <FontAwesomeIcon icon={faCode} /> 
                    </span>
                </div>
                <h6>
                    FRONT-END DEVELOPMENT
                </h6>  
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolores quis. Dolorem earum dignissimos natus nulla voluptatum vel architecto porro.
                </p>  
                <a href='#/' >
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </Col >
            <Col className=' www123' id="q2">
                <div className='qaz'>
                    <span>
                    <FontAwesomeIcon icon={faGlobe} />
                    </span>
                </div>
                <h6>
                    UI DEVELOPMENT
                </h6>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolores quis. Dolorem earum dignissimos natus nulla voluptatum vel architecto porro.
                </p>
                <a href='#/' >
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </Col>
            <Col  className=' www123' id='q3'>
                <div className='qaz'>
                    <span>
                    <FontAwesomeIcon icon={faBezierCurve} />
                    </span>
                </div>
                <h6>
                    React DEVELOPMENT
                </h6>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolores quis. Dolorem earum dignissimos natus nulla voluptatum vel architecto porro.
                </p>
                <a href='#/' >
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </Col>
            </Row>
        </Container>
    </section>
  )
}
