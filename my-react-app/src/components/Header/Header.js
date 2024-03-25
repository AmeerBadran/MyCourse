import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header(props) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 90;
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
        <nav className={`navbar navbar-expand-lg projectHeader ${scrolled ? 'scrolled1' : ''}`}>
            <div className={`container transitionDiv ${scrolled ? 'scrolled' : ''}`}>
                <div className="col-md-3 mb-2 mb-md-0 logoDiv">
                    <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none logoLink">
                        <img src={require('../../assets/Image/logo.jpg')} className="rounded-circle projectIcon" alt="..." />
                        <p className="logoText">PSCD</p>
                    </Link>
                </div>
                <button class="navbar-toggler navButton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse collapseDiv ${scrolled ? 'scrolled2' : ''}`} id="navbarScroll">
                    <ul className={`navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ulLinksClass ${scrolled ? 'scrolledUlLinksClass' : ''}`} >
                        <li className="nav-item"><Link to="/" className={`nav-link px-2 ${props.headerLink === 'home' ? 'link-secondary' : ''}`}>HOME</Link></li>
                        <li className="nav-item"><Link to="/services" className={`nav-link px-2 ${props.headerLink === 'services' ? 'link-secondary' : ''}`}>SERVICES</Link></li>
                        <li className="nav-item"><Link to="/pricing" className={`nav-link px-2 ${props.headerLink === '' ? 'link-secondary' : ''}`}>FEATURED</Link></li>
                        <li className="nav-item"><Link to="/faqs" className={`nav-link px-2 ${props.headerLink === '' ? 'link-secondary' : ''}`}>NEW</Link></li>
                        <li className="nav-item"><Link to="/about" className={`nav-link px-2 ${props.headerLink === '' ? 'link-secondary' : ''}`}>BRANDS</Link></li>
                        <li className="nav-item"><Link to="/about" className={`nav-link px-2 ${props.headerLink === '' ? 'link-secondary' : ''}`}>CONTACT</Link></li>
                    </ul>
                    <form className="d-flex" role="search">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-light">Sign-up</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
