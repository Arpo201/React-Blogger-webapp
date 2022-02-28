import { Link } from "react-router-dom";

const ShowNavbar = (props) => {
    return (
        <>
             <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <Link to="/React-WordpressAPI-Project/Home" className="navbar-brand">Valpo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/React-WordpressAPI-Project/Home" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/React-WordpressAPI-Project/Post" className="nav-link">Post</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/React-WordpressAPI-Project/Author" className="nav-link">Author</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default ShowNavbar