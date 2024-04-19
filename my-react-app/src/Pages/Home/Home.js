import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./home.css";
import "../../all.min.css";
import { useState, useEffect } from "react";
export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    const [scrolled2, setScrolled2] = useState(false);
    const [scrolled3, setScrolled3] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
            const isScrolled2 = window.scrollY > 800;
            if (isScrolled2 !== scrolled2) {
                setScrolled2(isScrolled2);
            }
            const isScrolled3 = window.scrollY > 1400;
            if (isScrolled3 !== scrolled3) {
                setScrolled3(isScrolled3);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled, scrolled2, scrolled3]);
    const users = [{
        title: "Card title",
        stars: 3.5,
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        image: "4"
    },
    {
        title: "Card title",
        stars: 5.0,
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        image: "5"
    },
    {
        title: "Card title",
        stars: 4.5,
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        image: "6"
    },
    {
        title: "Card title",
        stars: 1.5,
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        image: "7"
    },
    {
        title: "Card title",
        stars: 2.5,
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        image: "2"
    },
    {
        title: "Card title",
        stars: 5.0,
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        image: "1"
    }];
    function printStars(starsNum) {
        const intValue = Math.floor(starsNum);
        const decValue = starsNum - intValue;
        const noStars = 5 - starsNum;
        const stars = [];
        if (intValue === 0) {
            for (let i = 0; i < noStars; i++) {
                stars.push(<i className="fa-regular fa-star" key={intValue + i + 1}></i>);
            }
            return stars;
        }
        for (let i = 0; i < intValue; i++) {
            stars.push(<i className="fa-solid fa-star" key={i}></i>);
        }
        if (decValue > 0) {
            stars.push(<i className="fa-regular fa-star-half-stroke" key={intValue}></i>);
        }
        for (let i = 0; i < noStars - 1; i++) {
            stars.push(<i className="fa-regular fa-star" key={intValue + i + 1}></i>);
        }
        return stars;
    }
    const showStars = users.map((user, index) => (
        <div className="col" key={index}>
            <div className="card">
                <img src={require(`../../assets/Image/${user.image}.jpg`)} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{user.title}</h5>
                        <div className="starsDiv" title={`hello`}>
                            {printStars(user.stars)}
                        </div>
                    </div>
                    <p className="card-text">{user.text}</p>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="homeBody">
            <Header headerLink="home" />
            <div className="divVideoStyle">
                <video src={require("../../assets/Videos/course-video.mp4")} className="object-fit-cover videoStyle" autoPlay loop muted />
                <div className="centerText">
                    <h1>FOR PROMPT AND LUXURIOUS SERVICE, CHOOSE PSCD.</h1><br></br>
                    <p className="fw-semibold" style={{ fontSize: "110%" }}>RESERVE YOUR CAR NOW FOR SWIFT DELIVERY TO ANY DESTINATION.</p>
                    <button type="button" className="btn btn-light homeButton">ORDER NOW</button>
                </div>
            </div>
            <div className="container-fluid homeContents">
                <div className={`container homeCard ${scrolled ? 'scrolledCard' : ''}`}>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {showStars}
                    </div>
                </div>

                <div className={`container overflow-hidden text-center servicesContainer ${scrolled2 ? 'scrolledCard2' : ''}`}>
                    <h1 style={{ color: "#2a1264" }}>OUR SERVICES</h1>
                    <div className={`text-success headerLine`}>
                        <hr></hr>
                    </div>
                    <div className="row rowsStyle gap-5">
                        <div className="col colStyle">
                            <div className="cardStyle">
                                <i className="fa-solid fa-car carIconSize"></i>
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 className="headerServ">Largest Dealership of Car</h5>
                                <h6>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</h6>
                                <hr className="cardLine"></hr>
                            </div>
                        </div>
                        <div className="col colStyle">
                            <div className="cardStyle">
                                <i className="fa-solid fa-truck carIconSize"></i>
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 className="headerServ">Largest Dealership of Car</h5>
                                <h6>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</h6>
                                <hr className="cardLine"></hr>
                            </div>
                        </div>
                        <div className="col colStyle">
                            <div className="cardStyle">
                                <i className="fa-solid fa-car-side carIconSize"></i>
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 className="headerServ">Largest Dealership of Car</h5>
                                <h6>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</h6>
                                <hr className="cardLine"></hr>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`container slideContainer ${scrolled3 ? 'scrolledCard3' : ''}`}>
                    <h1 style={{ color: "#100627" }}>SPECIAL SERVICES</h1>
                    <div className={`text-success headerLine`} >
                        <hr></hr>
                    </div>
                    <div id="carouselExampleDark" className={`carousel carousel-dark slide slideStyle `}>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active singleSlide" data-bs-interval="10000">
                                <img src={require('../../assets/Image/car1.jpg')} className="d-block w-100 imgStyle" alt="..." />
                                <div className="carousel-caption d-none d-md-block textSlideDiv">
                                    <h5 className="headerText">First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                    <button type="button" className="btn btn-dark">Dark</button>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={require('../../assets/Image/car32.jpg')} className="d-block w-100 imgStyle" alt="..." />
                                <div className="carousel-caption d-none d-md-block textSlideDiv">
                                    <h5 className="headerText">Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                    <button type="button" className="btn btn-dark">Dark</button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={require('../../assets/Image/car23.jpg')} className="d-block w-100 imgStyle" alt="..." />
                                <div className="carousel-caption d-none d-md-block textSlideDiv">
                                    <h5 className="headerText">Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                    <button type="button" className="btn btn-dark">Dark</button>
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
            <Footer />
        </div>
    );
}
