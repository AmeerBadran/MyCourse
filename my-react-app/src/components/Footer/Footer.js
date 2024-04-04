import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
    return (<div className="container-fluid py-4 py-md-5 px-4 px-md-3 text-body-secondary homeFooter">
        <div className="row">
            <div className="col-lg-3 mb-3">
                <div className="col-md-3 mb-2 mb-md-0 logoDiv">
                    <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none logoLink">
                        <img src={require('../../assets/Image/logo.jpg')} className="rounded-circle projectIcon" alt="..." />
                        <p className="logoText">PSCD</p>
                    </Link>
                </div>
                <ul className="list-unstyled small">
                    <li className="mb-2">Designed and built with all the love in the world by the <a href="/docs/5.3/about/team/">Bootstrap team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</li>
                    <li className="mb-2">Code licensed <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" rel="license noopener">CC BY 3.0</a>.</li>
                    <li className="mb-2">Currently v5.3.3.</li>
                </ul>
            </div>
            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                <h5>Links</h5>
                <ul className="list-unstyled">
                    <li className="mb-2"><a href="/">Home</a></li>
                    <li className="mb-2"><a href="/docs/5.3/">Docs</a></li>
                    <li className="mb-2"><a href="/docs/5.3/examples/">Examples</a></li>
                    <li className="mb-2"><a href="https://icons.getbootstrap.com/">Icons</a></li>
                    <li className="mb-2"><a href="https://themes.getbootstrap.com/">Themes</a></li>
                    <li className="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
                    <li className="mb-2"><a href="https://cottonbureau.com/people/bootstrap" rel="noopener">Swag Store</a></li>
                </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
                <h5>Guides</h5>
                <ul className="list-unstyled">
                    <li className="mb-2"><a href="/docs/5.3/getting-started/">Getting started</a></li>
                    <li className="mb-2"><a href="/docs/5.3/examples/starter-template/">Starter template</a></li>
                    <li className="mb-2"><a href="/docs/5.3/getting-started/webpack/">Webpack</a></li>
                    <li className="mb-2"><a href="/docs/5.3/getting-started/parcel/">Parcel</a></li>
                    <li className="mb-2"><a href="/docs/5.3/getting-started/vite/">Vite</a></li>
                </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
                <h5>Projects</h5>
                <ul className="list-unstyled">
                    <li className="mb-2"><a href="https://github.com/twbs/bootstrap" rel="noopener">Bootstrap 5</a></li>
                    <li className="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev" rel="noopener">Bootstrap 4</a></li>
                    <li className="mb-2"><a href="https://github.com/twbs/icons" rel="noopener">Icons</a></li>
                    <li className="mb-2"><a href="https://github.com/twbs/rfs" rel="noopener">RFS</a></li>
                    <li className="mb-2"><a href="https://github.com/twbs/examples/" rel="noopener">Examples repo</a></li>
                </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
                <h5>Community</h5>
                <ul className="list-unstyled">
                    <li className="mb-2"><a href="https://github.com/twbs/bootstrap/issues" rel="noopener">Issues</a></li>
                    <li className="mb-2"><a href="https://github.com/twbs/bootstrap/discussions" rel="noopener">Discussions</a></li>
                    <li className="mb-2"><a href="https://github.com/sponsors/twbs" rel="noopener">Corporate sponsors</a></li>
                    <li className="mb-2"><a href="https://opencollective.com/bootstrap" rel="noopener">Open Collective</a></li>
                    <li className="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5" rel="noopener">Stack Overflow</a></li>
                </ul>
            </div>
        </div>
    </div>);
}