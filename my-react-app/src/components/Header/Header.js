import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header(props) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`navbar navbar-expand-lg projectHeader ${scrolled || props.headerColor === "black" ? 'scrolled1' : ''}`}>
            <div className={`container transitionDiv ${scrolled || props.headerColor === "black" ? 'scrolled' : ''}`}>
                <div className="col-md-3 mb-2 mb-md-0 logoDiv">
                    <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none logoLink">
                        <img src={require('../../assets/Image/logo.jpg')} className="rounded-circle projectIcon" alt="..." />
                        <p className="logoText">PSCD</p>
                    </Link>
                </div>
                <button className="navbar-toggler navButton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse collapseDiv ${scrolled || props.headerColor === "black" ? 'scrolled2' : ''}`} id="navbarScroll">
                    <ul className={`navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ulLinksClass ${scrolled || props.headerColor === "black" ? 'scrolledUlLinksClass' : ''}`} >
                        <li className="nav-item"><Link to="/" className={`nav-link px-2 ${props.headerLink === 'home' ? 'link-secondary' : ''}`}>HOME</Link></li>
                        <li className="nav-item"><Link to="/services" className={`nav-link px-2 ${props.headerLink === 'services' ? 'link-secondary' : ''}`}>SERVICES</Link></li>
                        <li className="nav-item dropdown">
                            <Link className={`nav-link px-2 dropdown-toggle ${props.headerLink === 'singleService' ? 'link-secondary' : ''}`} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                DROPDOWN
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className={`dropdown-item ${props.headerLink === 'TRANSPORT' ? 'link-secondary' : ''}`} to="/transport">TRANSPORT</Link></li>
                                <li><Link className={`dropdown-item ${props.headerLink === 'PSCDDRIVER' ? 'link-secondary' : ''}`}  to="/pscDriver">PSCD DRIVER</Link></li>
                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link to="/aboutUs" className={`nav-link px-2 ${props.headerLink === '' ? 'link-secondary' : ''}`}>ABOUT US</Link></li>
                        <li className="nav-item"><Link to="/about" className={`nav-link px-2 ${props.headerLink === '' ? 'link-secondary' : ''}`}>BRANDS</Link></li>
                        <li className="nav-item"><Link to="/contactUs" className={`nav-link px-2 ${props.headerLink === '' ? 'link-secondary' : ''}`}>CONTACT</Link></li>
                    </ul>
                    <form className="d-flex" role="search">
                        <Link to="/logIn" className="btn btn-outline-light me-2">Login</Link>
                        <Link to="/signUp" className="btn btn-light">Sign-up</Link>
                    </form>
                </div>
            </div>
        </nav>
    );
}
