import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./transportService.css";
import "../../all.min.css";
import { Link } from "react-router-dom";
export default function TransportService() {
    return (
        <div className="homeBody">
            <Header headerLink="singleService" />
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
                    <div className="card border-light mb-3 cardServiceStyle">
                        <div className="card-body">
                            <h5 className="card-title"><b>Express transportation</b></h5>
                            <p className="card-text">Express transportation helps you transfer luggage from urgent ones, and it is taken on the same day and sent on the same day or the next day in the morning.</p>
                        </div>
                        <a href="https://www.youtube.com/channel/UCLlrIwHyByv5UzWbDHS3r1A" target="_blank" rel="noopener noreferrer">
                            <p className="card-text" style={{ color: "black", marginBottom: "-100px" }}><small><b>For more details</b></small> <i className="fa-solid fa-arrow-right"></i></p>
                            <div className="serviceSIcon">
                                <img src={require('../../assets/Image/speed.jpg')} className="d-block imgStyleService" style={{ height: "95px", width: "95px" }} alt="..." />
                            </div>
                        </a>
                    </div>
                    <div className="card border-light mb-3 cardServiceStyle">
                        <div className="card-body">
                            <h5 className="card-title"><b>Transport multiple boxes</b></h5>
                            <p className="card-text">Transporting multiple boxes from your place to any other place inside or outside the country.</p>
                        </div>
                        <a href="https://www.youtube.com/channel/UCLlrIwHyByv5UzWbDHS3r1A" target="_blank" rel="noopener noreferrer">
                            <p className="card-text" style={{ color: "black", marginBottom: "-100px" }}><small><b>For more details</b></small> <i className="fa-solid fa-arrow-right"></i></p>
                            <div className="serviceSIcon">
                                <img src={require('../../assets/Image/boxes.jpg')} className="d-block imgStyleService" style={{ height: "95px", width: "95px" }} alt="..." />
                            </div>
                        </a>
                    </div>
                    <div className="card border-light mb-3 cardServiceStyle">
                        <div className="card-body">
                            <h5 className="card-title"><b>Transport single box</b></h5>
                            <p className="card-text">single box will be picked up from your home and transported to the sender within a few days.</p>
                        </div>
                        <a href="https://www.youtube.com/channel/UCLlrIwHyByv5UzWbDHS3r1A" target="_blank" rel="noopener noreferrer">
                            <p className="card-text" style={{ color: "black", marginBottom: "-100px" }}><small><b>For more details</b></small> <i className="fa-solid fa-arrow-right"></i></p>
                            <div className="serviceSIcon">
                                <img src={require('../../assets/Image/box1.jpg')} className="d-block imgStyleService" style={{ height: "95px", width: "95px" }} alt="..." />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container containerServiceInfo">
                <div className="card serviceInfoCard">
                    <div className="row g-0">
                        <div className="col-md-4 linkStyleService">
                            <img src={require(`../../assets/Image/multiBoxes1.jpg`)} className="img-fluid rounded-start " alt="..." />
                            <hr></hr>
                            <Link to="" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" rel="noopener noreferrer" className="serviceSIconLink">
                                <h2 className="bigButton"><b>APPLY NOW</b></h2>
                            </Link>
                        </div>
                        <div className="modal fade modal-xl" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Transport multiple boxes</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form className="row g-3">
                                            <div className="col-md-4">
                                                <label htmlFor="validationDefault01" className="form-label">First name</label>
                                                <input type="text" className="form-control" id="validationDefault01" defaultValue="Mark" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="validationDefault02" className="form-label">Last name</label>
                                                <input type="text" className="form-control" id="validationDefault02" defaultValue="Otto" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
                                                <div className="input-group">
                                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                                    <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="validationDefault03" className="form-label">City</label>
                                                <input type="text" className="form-control" id="validationDefault03" required />
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="validationDefault04" className="form-label">State</label>
                                                <select className="form-select" id="validationDefault04" required>
                                                    <option disabled value="">Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="validationDefault05" className="form-label">Zip</label>
                                                <input type="text" className="form-control" id="validationDefault05" required />
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                                    <label className="form-check-label" htmlFor="invalidCheck2">
                                                        Agree to terms and conditions
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary" type="submit">Submit form</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
                                        <button type="button" className="btn btn-primary">SEND</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><b>Transport multiple boxes</b></h5>
                                <hr></hr>
                                <p className="card-text">Transporting multiple boxes, whether domestically or internationally, involves several considerations including the size and weight of the boxes, the destination, the mode of transportation, and any legal or customs requirements. Here's more detailed information:
                                    <br></br><br></br>
                                    Size and Weight of Boxes: The size and weight of the boxes will determine the most suitable mode of transportation and may also affect the cost of shipping. It's important to accurately measure and weigh each box to ensure proper handling and cost estimation.
                                    <br></br><br></br>
                                    Mode of Transportation: There are several modes of transportation available for shipping boxes.
                                    <br></br><br></br>
                                    Packaging: Proper packaging is crucial to ensure the safety of the items during transit. Use sturdy boxes, packing materials such as bubble wrap or packing peanuts, and secure them with strong tape to prevent damage.
                                    <br></br><br></br>
                                    Customs and Legal Requirements: When transporting boxes internationally, you'll need to comply with customs regulations and any legal requirements of the destination country. This may include providing documentation such as invoices, certificates of origin, or permits for certain items.
                                    <br></br><br></br>
                                    Tracking and Monitoring: Choose a shipping provider that offers tracking services so you can monitor the progress of your shipment and receive notifications about its status.
                                    <br></br><br></br>
                                    Cost Considerations: The cost of transporting multiple boxes will depend on various factors including the size and weight of the boxes, the mode of transportation, the destination, and any additional services required such as insurance or expedited shipping.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card serviceInfoCard">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><b>Transport single box</b></h5>
                                <hr></hr>
                                <p className="card-text">Transporting a single box from your home to its destination within a few days involves several steps and considerations:
                                    <br></br><br></br>
                                    Delivery Timeline: Discuss the delivery timeline with the shipping company to ensure the box reaches its destination within the required timeframe. Consider factors such as shipping speed, transit time, and any potential delays due to weather or other unforeseen circumstances.
                                    <br></br><br></br>
                                    Tracking and Monitoring: Many shipping services offer package tracking capabilities, allowing you to monitor the progress of your shipment in real-time. Make use of tracking numbers provided by the shipping company to keep track of your package's whereabouts.
                                    <br></br><br></br>
                                    Documentation: Depending on the destination and the contents of the box, you may need to fill out customs forms or provide additional documentation for international shipments. Make sure you have all necessary paperwork prepared and attached to the package.
                                    <br></br><br></br>
                                    Recipient Information: Provide accurate and complete recipient information, including name, address, and contact details, to ensure successful delivery. Double-check the address to avoid any delivery errors or delays.
                                    <br></br><br></br>
                                    By following these steps and considerations, you can ensure that your box is safely transported from your home to its destination within a few days, whether it's a local or international delivery.</p>
                            </div>
                        </div>
                        <div className="col-md-4 linkStyleService">
                            <img src={require(`../../assets/Image/SingleBox.jpg`)} className="img-fluid rounded-end" alt="..." />
                            <hr></hr>
                            <Link to="" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" target="_blank" rel="noopener noreferrer" className="serviceSIconLink">
                                <h2 className="bigButton"><b>APPLY NOW</b></h2>
                            </Link>
                        </div>
                        <div className="modal fade modal-xl" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Transport single box</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form className="row g-3">
                                            <div className="col-md-4">
                                                <label htmlFor="validationDefault01" className="form-label">First name</label>
                                                <input type="text" className="form-control" id="validationDefault01" defaultValue="Mark" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="validationDefault02" className="form-label">Last name</label>
                                                <input type="text" className="form-control" id="validationDefault02" defaultValue="Otto" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
                                                <div className="input-group">
                                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                                    <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="validationDefault03" className="form-label">City</label>
                                                <input type="text" className="form-control" id="validationDefault03" required />
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="validationDefault04" className="form-label">State</label>
                                                <select className="form-select" id="validationDefault04" required>
                                                    <option disabled value="">Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="validationDefault05" className="form-label">Zip</label>
                                                <input type="text" className="form-control" id="validationDefault05" required />
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                                    <label className="form-check-label" htmlFor="invalidCheck2">
                                                        Agree to terms and conditions
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary" type="submit">Submit form</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
                                        <button type="button" className="btn btn-primary">SEND</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card serviceInfoCard">
                    <div className="row g-0 ">
                        <div className="col-md-4 linkStyleService">
                            <img src={require(`../../assets/Image/speedBox.jpg`)} className="img-fluid rounded-start" alt="..." />
                            <hr></hr>
                            <Link to="" data-bs-toggle="modal" data-bs-target="#staticBackdrop3" target="_blank" rel="noopener noreferrer" className="serviceSIconLink">
                                <h2 className="bigButton"><b>APPLY NOW</b></h2>
                            </Link>
                        </div>
                        <div className="modal fade modal-xl" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Express transportation</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form className="row g-3">
                                            <div className="col-md-4">
                                                <label htmlFor="validationDefault01" className="form-label">First name</label>
                                                <input type="text" className="form-control" id="validationDefault01" defaultValue="Mark" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="validationDefault02" className="form-label">Last name</label>
                                                <input type="text" className="form-control" id="validationDefault02" defaultValue="Otto" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
                                                <div className="input-group">
                                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                                    <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="validationDefault03" className="form-label">City</label>
                                                <input type="text" className="form-control" id="validationDefault03" required />
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="validationDefault04" className="form-label">State</label>
                                                <select className="form-select" id="validationDefault04" required>
                                                    <option disabled value="">Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="validationDefault05" className="form-label">Zip</label>
                                                <input type="text" className="form-control" id="validationDefault05" required />
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                                    <label className="form-check-label" htmlFor="invalidCheck2">
                                                        Agree to terms and conditions
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary" type="submit">Submit form</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
                                        <button type="button" className="btn btn-primary">SEND</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><b>Express transportation</b></h5>
                                <hr></hr>
                                <p className="card-text">Express transportation services are designed to provide fast and efficient delivery of urgent items, including luggage, parcels, documents, and other goods. Here's some additional information about express transportation:
                                    <br></br><br></br>
                                    Same-Day or Next-Day Delivery: With express transportation, items are typically picked up and sent on the same day, ensuring rapid delivery. In some cases, if the pickup occurs later in the day, delivery may occur the next morning. This swift turnaround time ensures that urgent items are promptly delivered to their intended recipients.
                                    <br></br><br></br>
                                    24/7 Availability: Many express transportation services operate around the clock, offering pickup and delivery options at any time of day or night. This ensures flexibility and convenience for customers who require immediate shipping services.
                                    <br></br><br></br>
                                    Tracking and Monitoring: Express transportation providers typically offer robust tracking and monitoring capabilities, allowing customers to track the status of their shipments in real-time. This visibility provides peace of mind and allows customers to stay informed about the progress of their deliveries.
                                    <br></br><br></br>
                                    Customer Support: Express transportation services often provide dedicated customer support to assist with booking, tracking, and any inquiries or issues that may arise during the shipping process. This ensures a smooth and seamless experience for customers from start to finish.
                                    <br></br><br></br>
                                    Cost: While express transportation services offer speed and convenience, they may be more expensive than standard shipping options due to the expedited nature of the service. However, the added cost is often justified by the urgency and time-sensitive nature of the shipments.
                                    <br></br><br></br>
                                    Overall, express transportation services play a crucial role in facilitating fast and reliable delivery of urgent items, offering convenience, speed, and peace of mind to customers who require rapid shipping solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card middleDiv">
                <img src={require(`../../assets/Image/bg2.jpg`)} className="img-fluid middleImg" alt="..." />
                <div className="card-img-overlay middleText">
                    <p className="card-text text-warning"><small><small><small>PSCD</small></small></small></p>
                    <h1 className="card-title">Everything is easy with PSCD</h1>
                    <p className="card-text">Transfer your items from one place to another and ensure that they are preserved and that they will reach any place you can think of quickly.</p>
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
