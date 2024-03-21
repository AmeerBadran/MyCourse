import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./header.css"
export default function Header() {
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
        <header className={`align-items-center justify-content-center mb-4 projectHeader ${scrolled ? 'scrolled1' : ''}`}>
            <div className={`nestHeaderDiv d-flex align-items-center justify-content-center justify-content-md-between transitionDiv ${scrolled ? 'scrolled' : ''}`}>
                <div className="col-md-3 mb-2 mb-md-0 logoDiv">
                    <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none logoLink">
                        <img src={require('../../assets/Image/logo.jpg')} className="rounded-circle projectIcon" alt="..." />
                        <p className="logoText">PSCD</p>
                    </Link>
                </div>

                <ul className={`nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ulLinksClass ${scrolled ? 'scrolledUlLinksClass' : ''}`}>
                    <li><Link to="/" className="nav-link px-2 link-secondary">HOME</Link></li>
                    <li><Link to="/features" className="nav-link px-2">SERVICE</Link></li>
                    <li><Link to="/pricing" className="nav-link px-2">FEATURED CARS</Link></li>
                    <li><Link to="/faqs" className="nav-link px-2">NEW CARS</Link></li>
                    <li><Link to="/about" className="nav-link px-2">BRANDS</Link></li>
                    <li><Link to="/about" className="nav-link px-2">CONTACT</Link></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-light me-2">Login</button>
                    <button type="button" className="btn btn-light">Sign-up</button>
                </div>
            </div>
        </header>
    );
}