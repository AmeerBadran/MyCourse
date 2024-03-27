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
                <div class="row row-cols-1 row-cols-md-2 g-4 containerFirst">
                    <div class="card border-light mb-3" style={{ maxWidth: '18rem', height: "370px" }}>
                        <div class="card-header"><img className="servicesIcon" src={require(`../../assets/Image/getCar.jpg`)} alt="..." /></div>
                        <div class="card-body">
                            <h5 class="card-title">Light card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button type="button" class="btn btn-outline-dark infoButtons">READ MORE</button>
                    </div>
                    <div class="card border-light mb-3" style={{ maxWidth: '18rem', height: "370px" }}>
                        <div class="card-header"><img className="servicesIcon" src={require(`../../assets/Image/contract.jpg`)} alt="..." /></div>
                        <div class="card-body">
                            <h5 class="card-title">Light card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button type="button" class="btn btn-outline-dark infoButtons">READ MORE</button>
                    </div>
                    <div class="card border-light mb-3" style={{ maxWidth: '18rem', height: "370px" }}>
                        <div class="card-header"><img className="servicesIcon" src={require(`../../assets/Image/cargoService.jpg`)} alt="..." /></div>
                        <div class="card-body">
                            <h5 class="card-title">Light card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button type="button" class="btn btn-outline-dark infoButtons">READ MORE</button>
                    </div>
                    <div class="card border-light mb-3" style={{ maxWidth: '18rem', height: "370px" }}>
                        <div class="card-header"><img className="servicesIcon" src={require(`../../assets/Image/Complaints.jpg`)} alt="..." /></div>
                        <div class="card-body">
                            <h5 class="card-title">Light card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button type="button" class="btn btn-outline-dark infoButtons">READ MORE</button>
                    </div>
                    <div class="card border-light mb-3" style={{ maxWidth: '18rem', height: "370px" }}>
                        <div class="card-header"><img className="servicesIcon" src={require(`../../assets/Image/Complaintss.png`)} alt="..." /></div>
                        <div class="card-body">
                            <h5 class="card-title">Light card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button type="button" class="btn btn-outline-dark infoButtons">READ MORE</button>
                    </div>
                    <div class="card border-light mb-3" style={{ maxWidth: '18rem', height: "370px" }}>
                        <div class="card-header"><img className="servicesIcon" src={require(`../../assets/Image/Complaintss.png`)} alt="..." /></div>
                        <div class="card-body">
                            <h5 class="card-title">Light card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button type="button" class="btn btn-outline-dark infoButtons">READ MORE</button>
                    </div>
                    <div class="card border-light mb-3" style={{ maxWidth: '18rem', height: "370px" }}>
                        <div class="card-header"><img className="servicesIcon" src={require(`../../assets/Image/Complaintss.png`)} alt="..." /></div>
                        <div class="card-body">
                            <h5 class="card-title">Light card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button type="button" class="btn btn-outline-dark infoButtons">READ MORE</button>
                    </div>
                    <div class="card border-light mb-3" style={{ maxWidth: '18rem', height: "370px" }}>

                        <div class="card-header"><img className="servicesIcon" src={require(`../../assets/Image/Complaintss.png`)} alt="..." /></div>
                        <div class="card-body">
                            <h5 class="card-title">Light card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button type="button" class="btn btn-outline-dark infoButtons">READ MORE</button>
                    </div>
                </div>

            </div>
            <div class="card middleDiv">
                <img src={require(`../../assets/Image/bg2.jpg`)} class="img-fluid middleImg" alt="..." />
                <div class="card-img-overlay middleText">
                    <p class="card-text text-warning"><small><small><small>PSCD</small></small></small></p>
                    <h1 class="card-title">Striving for your comfort</h1>
                    <p class="card-text">We always strive to provide you with the best service. We hope that we have changed your concept of transportation and made the remotest areas appear as if they were at your doorstep.</p>
                    <p class="card-text"><small><small><small><small>Click on the play button to explain how to work within the site.</small></small></small></small></p>
                </div>
                <a href="https://www.youtube.com/channel/UCLlrIwHyByv5UzWbDHS3r1A" target="_blank" rel="noopener noreferrer">
                    <div class="goVideo">
                        <i class="fa-solid fa-play videoIcon"></i>
                    </div>
                </a>
            </div>
            <div id="carouselExampleControls" class="carousel carousel-dark slide showUserSlides" data-bs-ride="carousel">
                <div className="clientsHeader">
                    <p class="card-text" style={{ color: "orange" }}>MESSAGES</p>
                    <h2><b>WHAT OUR CLIENTS SAYS</b></h2>
                </div>
                <div class="carousel-inner userCard">
                    <div class="carousel-item active">
                        <div class="card-wrapper container-sm d-flex  justify-content-around">
                            <div class="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div class="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user2.jpg`)} alt="..." />
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 class="card-title"><b>Ameer Badran</b></h5>
                                    <p class="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                            <div class="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div class="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user1.jpg`)} alt="..." />
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 class="card-title"><b>Ameer Badran</b></h5>
                                    <p class="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                            <div class="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div class="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user2.jpg`)} alt="..." />
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 class="card-title"><b>Ameer Badran</b></h5>
                                    <p class="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card-wrapper container-sm d-flex   justify-content-around">
                            <div class="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div class="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user1.jpg`)} alt="..." />
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 class="card-title"><b>Ameer Badran</b></h5>
                                    <p class="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                            <div class="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div class="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user2.jpg`)} alt="..." />
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 class="card-title"><b>Ameer Badran</b></h5>
                                    <p class="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                            <div class="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div class="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user1.jpg`)} alt="..." />
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 class="card-title"><b>Ameer Badran</b></h5>
                                    <p class="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card-wrapper container-sm d-flex justify-content-around ">
                            <div class="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div class="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user2.jpg`)} alt="..." />
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 class="card-title"><b>Ameer Badran</b></h5>
                                    <p class="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                            <div class="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div class="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user1.jpg`)} alt="..." />
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 class="card-title"><b>Ameer Badran</b></h5>
                                    <p class="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                            <div class="card border-light mb-3 containerCardUsers" style={{ maxWidth: '18rem' }}>
                                <div class="card-body cardUserStyle">
                                    <img className="userImg" src={require(`../../assets/Image/user1.jpg`)} alt="..." />
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 class="card-title"><b>Ameer Badran</b></h5>
                                    <p class="card-text" style={{ color: "orange" }}>Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
