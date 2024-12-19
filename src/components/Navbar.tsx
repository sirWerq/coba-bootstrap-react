import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
    return (
        <>
            <Navbar
                expand='lg'
                className='sticky-top'
                style={{
                    borderBottom: '1px solid white',
                    backgroundColor: '#379683',
                }}
            >
                <Container>
                    <Navbar.Brand href='#' className='h1 text-white'>
                        Terlope
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls='basic-navbar-nav'
                        className='bg-white'
                    />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link
                                href='#introduction'
                                className='text-white'
                            >
                                Introduction
                            </Nav.Link>
                            <Nav.Link href='#why' className='text-white'>
                                Why ?
                            </Nav.Link>
                            <Nav.Link href='#candidate' className='text-white'>
                                Candidate
                            </Nav.Link>
                            <Nav.Link
                                href='#ranking'
                                className='text-white'
                            >{`Ranking (karbit)`}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;
