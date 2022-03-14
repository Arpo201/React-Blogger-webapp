import { Link} from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const ShowNavbar = (props) => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Link to="/" className="navbar-brand">Blogger</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/Post" className="nav-link">Post</Link>
                            <Link to="/Author" className="nav-link">Author</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default ShowNavbar