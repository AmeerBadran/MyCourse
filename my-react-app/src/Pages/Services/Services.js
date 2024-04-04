import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./services.css";
import "../../all.min.css";
export default function Services() {
    return (
        <div className="homeBody">
            <Header headerLink="services" />
            <div className="servicesVideo">
                <video src={require("../../assets/Videos/open_car_door.mp4")} className="object-fit-cover videoOpenDoor" autoPlay loop muted />
                <div className="centerText">
                    <div className="meanText centerTextRegular ">
                        <h1>ORDER CAR NOW</h1><br></br>
                        <button type="button" className="btn btn-light servicesButton">ORDER</button>
                    </div>
                </div>
            </div>
            <div className="container searvicesContents">
                <div className="row row-cols-1 row-cols-md-2 g-4 containerFirst">
                    <div className="card border-light mb-3" style={{ maxWidth: '18rem', height: "370px" }}>
                        <div className="card-header"><img className="servicesIcon" src={require(`../../assets/Image/getCar.jpg`)} alt="..." /></div>
                        <div className="card-body">
                            <h5 className="card-title">Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button type="button" className="btn btn-outline-dark infoButtons">READ MORE</button>
                    </div>
                    <div className="card border-light mb-3" style={{ maxWidth: '18rem', height: "370px" }}>
                        <div className="card-header"><img className="servicesIcon" src={require(`../../assets/Image/contract.jpg`)} alt="..." /></div>
                        <div className="card-body">
                            <h5 className="card-title">Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button type="button" className="btn btn-outline-dark infoButtons">READ MORE</button>
                    </div>
                    <div className="card border-light mb-3" style={{ maxWidth: '18rem', height: "370px" }}>
                        <div className="card-header"><img className="servicesIcon" src={require(`../../assets/Image/cargoService.jpg`)} alt="..." /></div>
                        <div className="card-body">
                            <h5 className="card-title">Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button type="button" className="btn btn-outline-dark infoButtons">READ MORE</button>
                    </div>
                    <div className="card border-light mb-3" style={{ maxWidth: '18rem', height: "370px" }}>
                        <div className="card-header"><img className="servicesIcon" src={require(`../../assets/Image/Complaints.jpg`)} alt="..." /></div>
                        <div className="card-body">
                            <h5 className="card-title">Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button type="button" className="btn btn-outline-dark infoButtons">READ MORE</button>
                    </div>
                    <div className="card border-light mb-3" style={{ maxWidth: '18rem', height: "370px" }}>
                        <div className="card-header"><img className="servicesIcon" src={require(`../../assets/Image/Complaintss.png`)} alt="..." /></div>
                        <div className="card-body">
                            <h5 className="card-title">Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button type="button" className="btn btn-outline-dark infoButtons">READ MORE</button>
                    </div>
                    <div className="card border-light mb-3" style={{ maxWidth: '18rem', height: "370px" }}>
                        <div className="card-header"><img className="servicesIcon" src={require(`../../assets/Image/Complaintss.png`)} alt="..." /></div>
                        <div className="card-body">
                            <h5 className="card-title">Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button type="button" className="btn btn-outline-dark infoButtons">READ MORE</button>
                    </div>
                    <div className="card border-light mb-3" style={{ maxWidth: '18rem', height: "370px" }}>
                        <div className="card-header"><img className="servicesIcon" src={require(`../../assets/Image/Complaintss.png`)} alt="..." /></div>
                        <div className="card-body">
                            <h5 className="card-title">Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button type="button" className="btn btn-outline-dark infoButtons">READ MORE</button>
                    </div>
                    <div className="card border-light mb-3" style={{ maxWidth: '18rem', height: "370px" }}>

                        <div className="card-header"><img className="servicesIcon" src={require(`../../assets/Image/Complaintss.png`)} alt="..." /></div>
                        <div className="card-body">
                            <h5 className="card-title">Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button type="button" className="btn btn-outline-dark infoButtons">READ MORE</button>
                    </div>
                </div>

            </div>
            <div className="card middleDiv">
                <img src={require(`../../assets/Image/bg2.jpg`)} className="img-fluid middleImg" alt="..." />
                <div className="card-img-overlay middleText">
                    <p className="card-text text-warning"><small><small><small>PSCD</small></small></small></p>
                    <h1 className="card-title">Striving for your comfort</h1>
                    <p className="card-text">We always strive to provide you with the best service. We hope that we have changed your concept of transportation and made the remotest areas appear as if they were at your doorstep.</p>
                    <p className="card-text"><small><small><small><small>Click on the play button to explain how to work within the site.</small></small></small></small></p>
                </div>
                <a href="https://www.youtube.com/channel/UCLlrIwHyByv5UzWbDHS3r1A" target="_blank" rel="noopener noreferrer">
                    <div className="goVideo">
                        <i className="fa-solid fa-play videoIcon"></i>
                    </div>
                </a>
            </div>
            <div id="carouselExampleControls" className="carousel carousel-dark slide showUserSlides" data-bs-ride="carousel">
                <div className="clientsHeader">
                    <p className="card-text" style={{ color: "orange" }}>MESSAGES</p>
                    <h2><b>WHAT OUR CLIENTS SAYS</b></h2>
                </div>
                <div className="carousel-inner userCard">
                    <div className="carousel-item active">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            <div className="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div className="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user2.jpg`)} alt="..." />
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 className="card-title"><b>Ameer Badran</b></h5>
                                    <p className="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                            <div className="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div className="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user1.jpg`)} alt="..." />
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 className="card-title"><b>Ameer Badran</b></h5>
                                    <p className="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                            <div className="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div className="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user2.jpg`)} alt="..." />
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 className="card-title"><b>Ameer Badran</b></h5>
                                    <p className="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper container-sm d-flex   justify-content-around">
                            <div className="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div className="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user1.jpg`)} alt="..." />
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 className="card-title"><b>Ameer Badran</b></h5>
                                    <p className="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                            <div className="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div className="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user2.jpg`)} alt="..." />
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 className="card-title"><b>Ameer Badran</b></h5>
                                    <p className="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                            <div className="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div className="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user1.jpg`)} alt="..." />
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 className="card-title"><b>Ameer Badran</b></h5>
                                    <p className="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper container-sm d-flex justify-content-around ">
                            <div className="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div className="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user2.jpg`)} alt="..." />
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 className="card-title"><b>Ameer Badran</b></h5>
                                    <p className="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                            <div className="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div className="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user1.jpg`)} alt="..." />
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 className="card-title"><b>Ameer Badran</b></h5>
                                    <p className="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                            <div className="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div className="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user1.jpg`)} alt="..." />
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 className="card-title"><b>Ameer Badran</b></h5>
                                    <p className="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
