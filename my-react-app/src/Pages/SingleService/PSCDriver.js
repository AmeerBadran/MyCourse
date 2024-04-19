import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./transportService.css";
import "./pscDriver.css";
import "../../all.min.css";
import { Link } from "react-router-dom";
import CustomMap from "../../components/Map/Map1";
export default function PSCDriver() {
    return (
        <div className="homeBody">
            <Header headerLink="PSCDDRIVER" />
            <div className="servicesVideo">
                <video src={require("../../assets/Videos/TransportingTheGoods.mp4")} className="object-fit-cover videoOpenDoor" autoPlay loop muted />
                <div className="centerText">
                    <div className="meanText centerTextRegular ">
                        <h1>PSCD FOR TRANSPORT</h1><br></br>
                    </div>
                </div>
            </div>
            <div className="container searvicesContents">
                <div className="row row-cols-1 row-cols-md-2 g-4 containerDetails">
                    <div className="card border-light mb-3 cardServiceStyle2">
                        <div className="card-body">
                            <h5 className="card-title"><b>Request a regular car</b></h5>
                            <p className="card-text">The PSCDriver request service enables users to conveniently booked rides from their desired locations to specified destinations through a our website.</p>
                        </div>
                        <a href="https://www.youtube.com/channel/UCLlrIwHyByv5UzWbDHS3r1A" target="_blank" rel="noopener noreferrer">
                            <p className="card-text" style={{ color: "black", marginBottom: "-100px" }}><small><b>For more details</b></small> <i className="fa-solid fa-arrow-right"></i></p>
                            <div className="serviceSIcon2">
                                <img src={require('../../assets/Image/regCar.jpg')} className="d-block imgStyleService" style={{ height: "95px", width: "95px" }} alt="..." />
                            </div>
                        </a>
                    </div>
                    <div className="card border-light mb-3 cardServiceStyle2">
                        <div className="card-body">
                            <h5 className="card-title"><b>Rent a special car</b></h5>
                            <p className="card-text">The "Rent a special car" service offers tailored automobile customization, from design consultation to construction, delivering a unique vehicle that matches your specific desires and requirements.</p>
                        </div>
                        <a href="https://www.youtube.com/channel/UCLlrIwHyByv5UzWbDHS3r1A" target="_blank" rel="noopener noreferrer">
                            <p className="card-text" style={{ color: "black", marginBottom: "-100px" }}><small><b>For more details</b></small> <i className="fa-solid fa-arrow-right"></i></p>
                            <div className="serviceSIcon2">
                                <img src={require('../../assets/Image/speCar.png')} className="d-block imgStyleService" style={{ height: "95px", width: "95px" }} alt="..." />
                            </div>
                        </a>
                    </div>
                </div>
            </div>




            <div className="container containerServiceInfo">

                <div className="card " >
                    <div className="row g-0">
                        <div className="col-md-7">
                            <CustomMap />
                        </div>
                        <div className="col-md-5" >
                            <div className="card-body secHalfMap">
                                <h5 style={{ color: "black" }}><b>Request A Regular Car</b></h5>
                                <center><p>The map shows the location of all cars near your location, and the car's condition is determined by the color of the tag when ordering the car.</p></center>
                                <hr className="homeLine"></hr>
                                <h5 style={{ color: "black" }}><b>Get Your Request</b></h5>
                                <button type="button" className="btn btn-light homeButton">ORDER NOW</button>
                                <center style={{ color: "blue" }} className="d-flex align-items-end"><small><small><p >Allow the app to access your location</p></small></small></center>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card serviceInfoCard">
                    <div className="row g-0 " >
                        <div className="col-md-4 linkStyleService position-relative">
                            <img src={require(`../../assets/Image/multiBoxes1.jpg`)} className="img-fluid rounded-start position-absolute top-0" alt="..." />
                            <hr></hr>
                            <Link to="#" className="serviceSIconLink position-absolute">
                                <h2 className="bigButton"><b>APPLY NOW</b></h2>
                            </Link>
                        </div>

                        <div className="col-md-8 serviceInfoCard">
                            <div className="card-body position-relative serviceInfoCard">
                                <h5 className="card-title"><b>Rent a special car</b></h5>
                                <hr></hr>
                                <p className="card-text">Renting a special car infuses your journey with luxury, offering an unparalleled experience of elegance and sophistication. From sleek sports cars to timeless classics, indulge in your automotive fantasies with a diverse range of makes and models available.
                                <br></br><br></br>Whether cruising scenic routes or making grand entrances, special car rentals ensure you command attention wherever you go.
                                <br></br><br></br>Feel the exhilaration of driving a powerful machine, relishing the roar of the engine and seamless handling. Impress clients or elevate celebrations with prestigious rentals tailored for business meetings, weddings, or birthdays.
                                <br></br><br></br> Immerse yourself in opulent interiors, cutting-edge technology, and unmatched comfort during your rental period. Embrace the allure of luxury and refinement, creating cherished memories with special car rental experiences.
                                </p>
                                <div id="carouselExampleControls" className="carousel carousel-dark slide showCarSlides" data-bs-ride="carousel">
                                    <div className="carousel-inner carCard">
                                        <div className="carousel-item active">
                                            <div className="card-wrapper container-sm d-flex  justify-content-around">
                                                <div className="card border-light mb-3 containerCardUsers">
                                                    <div className="card-body cardUserStyle">
                                                        <img className="userImg" src={require(`../../assets/Image/user1.jpg`)} alt="..." />
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <h5 className="card-title"><b>Ameer Badran</b></h5>
                                                        <p className="card-text" style={{ color: "orange" }}>Web Developer</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="carousel-item ">
                                            <div className="card-wrapper container-sm d-flex   justify-content-around w-100">
                                                <div className="card border-light mb-3 containerCardUsers">
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
                                                <div className="card border-light mb-3 containerCardUsers">
                                                    <div className="card-body cardCarStyle">
                                                        <img className="carImg" src={require(`../../assets/Image/user2.jpg`)} alt="..." />
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div className="card middleDiv">
                <img src={require(`../../assets/Image/bg2.jpg`)} className="img-fluid middleImg" alt="..." />
                <div className="card-img-overlay middleText">
                    <p className="card-text text-warning"><small><small><small>PSCD</small></small></small></p>
                    <h1 className="card-title">Comfort and Speed</h1>
                    <p className="card-text">Request a car from anywhere that will take you to the place you want. The comfort and enjoyment of the trip with our cars is considered the highest.</p>
                    <p className="card-text"><small><small><small><small>Click on the play button to explain how to work within the site.</small></small></small></small></p>
                </div>
                <a href="https://www.youtube.com/channel/UCLlrIwHyByv5UzWbDHS3r1A" target="_blank" rel="noopener noreferrer">
                    <div className="goVideo">
                        <i className="fa-solid fa-play videoIcon"></i>
                    </div>
                </a>
            </div>
            <div id="carouselExampleControls1" className="carousel carousel-dark slide showUserSlides" data-bs-ride="carousel">
                <div className="clientsHeader">
                    <h2><b>WHAT OUR CLIENTS SAYS</b></h2>
                    <p className="card-text" style={{ color: "orange" }}>about our transportation service</p>
                </div>
                <div className="carousel-inner userCard">
                    <div className="carousel-item active">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
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
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
