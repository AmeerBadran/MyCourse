import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import "./aboutus.css";
import "./contactUs.css"
import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <div>
            <Header />
            <div className="servicesVideo">
                <img src={require(`../../assets/Image/office.jpg`)} alt="" className="object-fit-cover videoOpenDoor" />
                <div className="centerText">
                    <div className="meanText centerTextRegular ">
                    </div>
                </div>
            </div>
            <section id="home">
                <div className="home-left">
                    <img src={require(`../../assets/Image/user.jpg`)} alt="" />
                </div>
                <div className="home-right">
                    <h2 className="home-heading"> A brief overview of our site </h2>

                    <p className="home-para">The PSCD cars ordering website streamlines transportation by allowing users to easily book rides online.
                        It offers a user-friendly interface for entering pickup and drop-off locations,
                        selecting vehicle preferences, and scheduling rides in advance.
                        With integrated payment options and real-time tracking,
                        users can enjoy a seamless experience from booking to arrival.
                        The platform also facilitates driver communication and feedback for enhanced service quality.
                        Additionally, it may offer features like fare estimates, ride-sharing options,
                        and loyalty programs to enhance user satisfaction and retention.</p>
                    <Link href="#" className="btn"><b>GO Home</b></Link>
                </div>
            </section>
            <section id="workFlow">
                <h2 className="heading">Live Statistics</h2>
                <p className="para">Section provides a snapshot of the platform's vitality,<br />
                    displaying metrics like the current number<br /> of ride requests and active users.</p>
                <div className="num-container">
                    <div className="num-item"><span>27,882 <br /><br />Completed Orders</span></div>
                    <div className="num-item"><span>90% <br /><br />Action Plans</span></div>
                    <div className="num-item"><span>70,592 <br /><br />Users</span></div>
                </div>
            </section>
            <section id="goal">
                <div className="goal-left">
                    <h2>Our Goal</h2>
                    <p>We illuminate our mission to redefine the taxi experience.
                        With a commitment to seamless connectivity and customer satisfaction,
                        we strive to bridge the gap between passengers and drivers.
                        By prioritizing safety, reliability, and efficiency,
                        we aim to revolutionize urban transportation.
                        Our goal is to empower communities by offering accessible, affordable,
                        and eco-friendly travel solutions.</p>
                    <ul>
                        <li style={{ color: "black" }}> Enhance connectivity for urban commuters.</li>
                        <li style={{ color: "black" }}> Prioritize passenger and driver satisfaction.</li>
                        <li style={{ color: "black" }}> Ensure safety standards are paramount.</li>
                    </ul>
                </div>
                <div className="goal-right">
                    <img src={require(`../../assets/Image/our goal.jpg`)} alt="" />
                </div>
            </section>
            <div className="card middleDiv">
                <img src={require(`../../assets/Image/bg2.jpg`)} className="img-fluid middleImg" alt="..." />
                <div className="card-img-overlay middleText" style={{ transform: "translate(0, 40%)", marginTop: "-80px", height: "70%" }}>
                    <div className="row input-container">
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <input type="text" className="inputsStyle" required />
                                <label>Name</label>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <input type="text" className="inputsStyle" required />
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <textarea className="textareaStyle" required></textarea>
                                <label>Message</label>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="btn-lrg submit-btn">Send Message</div>
                        </div>
                    </div>
                </div>
                <a href="https://www.youtube.com/channel/UCLlrIwHyByv5UzWbDHS3r1A" target="_blank" rel="noopener noreferrer">
                    <div className="goVideo">
                        <i className="fa-solid fa-play videoIcon"></i>
                    </div>
                </a>
            </div>
            <div id="carouselExampleControls" className="carousel carousel-dark slide showUserSlides" data-bs-ride="carousel">
                <div className="clientsHeader">
                    <h2><b>Our Member</b></h2>
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
        </div >);
}