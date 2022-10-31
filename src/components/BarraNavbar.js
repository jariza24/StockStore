import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './img/logo.png';

function BarraNavbar() {
    return (
        <Navbar bg="ligth" expand="lg" >
            <Container style={{ background: 'linear-gradient(to right, #9cecfb, #65c7f7, #0052d4)', boxShadow: '-10px 13px 28px -11px rgba(0,102,255,0.58' }} fluid className="border  rounded-4 py-1">
                <Navbar.Brand href="#" >
                    <img className="border rounded-3 " style={{ width: 140 }} src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav.Link className="text-white" href="#action1">Acerca de Nosotros</Nav.Link>
                    {/*
                         <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                        
                        */}

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default BarraNavbar;