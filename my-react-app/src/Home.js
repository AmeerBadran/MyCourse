import Header from "./components/Header/Header";
import "./css/index.css";
import "./all.min.css";
import { useState, useEffect } from "react";
export default function TestPage() {
    const [scrolled, setScrolled] = useState(false);
    const [scrolled2, setScrolled2] = useState(false);
    const [scrolled3, setScrolled3] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 90;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
            const isScrolled2 = window.scrollY > 900;
            if (isScrolled2 !== scrolled2) {
                setScrolled2(isScrolled2);
            }
            const isScrolled3 = window.scrollY > 1300;
            if (isScrolled3 !== scrolled3) {
                setScrolled3(isScrolled3);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled, scrolled2, scrolled3]);
    return (<div className="homeBody">
        <Header />
        <div className="container-fluid homeText">
            <div className="divVideoStyle">
                <video src={require("./assets/Videos/course-video.mp4")} className="object-fit-cover videoStyle" autoPlay loop muted />
            </div>
            <div className="centerContents">
                <h1>ORDER A CAR TO TAKE YOU ANYWHERE</h1><br></br>
                <p className="fw-semibold">The fastest and most comfortable company is PSCD. Order a car now</p><p> and it will arrive anywhere.</p>
                <button type="button" className="btn btn-light homeButton">ORDER NOW</button>
            </div>
            <div className={`container homeCard ${scrolled ? 'scrolledCard' : ''}`}>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={require('./assets/Image/6.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require('./assets/Image/5.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require('./assets/Image/4.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require('./assets/Image/3.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require('./assets/Image/2.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require('./assets/Image/1.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`container overflow-hidden text-center servicesContainer ${scrolled2 ? 'scrolledCard2' : ''}`}>
                <div className={`text-success homeLine`}>
                    <hr></hr>
                </div>
                <div className="row rowsStyle gap-5">
                    <div className="col">
                        <div className="cardStyle">
                            <i className="fa-solid fa-car carIconSize"></i>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h5>Largest Dealership of Car</h5>
                            <h6>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</h6>
                            <hr className="cardLine"></hr>
                        </div>
                    </div>
                    <div className="col">
                        <div className="cardStyle">
                            <i className="fa-solid fa-truck carIconSize"></i>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h5>Largest Dealership of Car</h5>
                            <h6>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</h6>
                            <hr className="cardLine"></hr>
                        </div>
                    </div>
                    <div className="col">
                        <div className="cardStyle">
                            <i className="fa-solid fa-car-side carIconSize"></i>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h5>Largest Dealership of Car</h5>
                            <h6>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</h6>
                            <hr className="cardLine"></hr>
                        </div>
                    </div>
                </div>
                <div className={`text-success homeLine`} style={{ top: "16px" }}>
                    <hr></hr>
                </div>
            </div>

            <div className={`container slideStyle ${scrolled3 ? 'scrolledCard3' : ''}`}>

                <div id="carouselExampleDark" className={`carousel carousel-dark slide`}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={require('./assets/Image/1.jpg')} className="d-block w-100 imgStyle" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={require('./assets/Image/3.jpg')} className="d-block w-100 imgStyle" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={require('./assets/Image/2.jpg')} className="d-block w-100 imgStyle" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>

    </div>
    );
}
