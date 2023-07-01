
import Nav from 'react-bootstrap/Nav';
import logo from "./353367195_1730082474089473_368672423150930414_n.jpg"
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
//import ReactDOM from 'react-dom'
//import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouseUser , faUser, faServer,faLightbulb,faFile,faBook,faComments,faTags,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub,faLinkedin,faFacebook,faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';



function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >

              <Offcanvas.Body>
              <header>
            
    <Nav defaultActiveKey="/home" className="flex-column oo">
    <Offcanvas.Header closeButton>
    </Offcanvas.Header>
      <div className="qqqq">
      <Col xs={1} md={1}className="rr" >
          <Image src={logo} roundedCircle className="rrr"/>
        </Col>
        <h4>mahmut elshrawi</h4>

        <div>
          <a href="#kmgkmg" ><FontAwesomeIcon icon={faGithub} />  </a>
          <a href="#kgm" ><FontAwesomeIcon icon={faLinkedin} />  </a>
          <a href="#kmgk" ><FontAwesomeIcon icon={faFacebook} />  </a>
          <a href="#kmgk" ><FontAwesomeIcon icon={faFacebookMessenger} />  </a>
        </div>
          </div>
      <ul className="tttt">
        <li><Nav.Link href="/home" className="yy"><FontAwesomeIcon icon={faHouseUser} /> Home</Nav.Link></li>
        <li><Nav.Link eventKey="link-1" className="yy"><FontAwesomeIcon icon={faUser} /> About</Nav.Link></li>
        <li><Nav.Link eventKey="link-2" className="yy"><FontAwesomeIcon icon={faServer} /> Services</Nav.Link></li>
        <li><Nav.Link eventKey="disabled"  className="yy"><FontAwesomeIcon icon={faLightbulb} /> Skills</Nav.Link></li>
        <li><Nav.Link eventKey="link-3" className="yy"><FontAwesomeIcon icon={faFile} /> Resume</Nav.Link></li>
        <li><Nav.Link eventKey="link-4" className="yy"><FontAwesomeIcon icon={faBook} /> Portfolio</Nav.Link></li>
        <li><Nav.Link eventKey="link-5" className="yy"><FontAwesomeIcon icon={faComments} /> Testimonials</Nav.Link></li>
        <li><Nav.Link eventKey="link-5" className="yy"> <FontAwesomeIcon icon={faTags} /> Pricing</Nav.Link></li>
        <li><Nav.Link eventKey="link-5" className="yy"> <FontAwesomeIcon icon={faEnvelope}/> Contact</Nav.Link></li>
      </ul>
      </Nav>
      </header>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;

