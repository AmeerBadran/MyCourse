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
                        <h1>REGULAR  SERVICES</h1><br></br>
                        <button type="button" className="btn btn-light servicesButton">GO TO REGULAR</button>
                    </div>
                    <div className="meanText centerTextVIP ">
                        <h1>VIP SERVICES</h1><br></br>
                        <button type="button" className="btn btn-light servicesButton">GO TO VIP</button>
                    </div>
                </div>
            </div>
            <div className="container-fluid homeContents">
                
            </div>
            <Footer />
        </div>
    );
}
