import Header from "./components/Header/Header";
import "./index.css";
export default function TestPage() {
    return (<div className="homeBody">
        <Header />
        <div className="container-fluid">
            <video src={require("./assets/Videos/course-video.mp4")} className="object-fit-cover videoStyle" autoPlay loop muted />
            <div className="centerContents">
                <h1>ORDER A CAR TO TAKE YOU ANYWHERE</h1>
                <p className="fw-semibold">The fastest and most comfortable company is PSCD. Order a car now and it will arrive anywhere.</p>
            </div>
        </div>
    </div>
    );
}
