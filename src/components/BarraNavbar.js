import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './img/logo.png';

function BarraNavbar() {
    return (
        <Navbar bg="ligth" expand="lg" >
            <Container style={{ background: 'linear-gradient(to right, #9cecfb, #65c7f7, #0052d4)', boxShadow: '-10px 13px 28px -11px rgba(0,102,255,0.58' }} fluid className="border  rounded-4 py-1">
                <Navbar.Brand href="/" >
                    <img className="border rounded-3 " style={{ width: 140 }} src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav.Link className="text-white" href="#action1">Acerca de Nosotros</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default BarraNavbar;