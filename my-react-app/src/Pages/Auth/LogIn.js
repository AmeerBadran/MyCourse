import React from "react";
import Header from "../../components/Header/Header"
import "./signup.css";
import { Link } from "react-router-dom";

export default function LogIn() {
    return (
        <div className="signUpContainer ">
            <Header headerColor="black" />
            <div className="d-flex innerContainer container">
                <div className="imageContainer2">
                    <img src={require(`../../assets/Image/bg1.jpg`)} className="img-fluid imgStyle2" alt="..." />
                </div>
                <div className="InputsContainer2">
                    <h1>Log In</h1>
                    <hr className="hrClass"></hr>
                    <form className="d-flex justify-content-center row g-3 needs-validation" noValidate>
                        <div className="form-floating mb-3 inputStyle2">
                            <input type="email" className="form-control inputStyle" id="floatingInput" placeholder="name@example.com" />
                            <label className="labelStyle" htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating inputStyle2">
                            <input type="password" className="form-control inputStyle" id="floatingPassword" placeholder="Password" />
                            <label className="labelStyle" htmlFor="floatingPassword">Password</label>
                        </div>
                        <p className="parag"><Link class="link-offset-3 m-2" style={{ color: "black" }} to="#">Forgot Password</Link></p>
                        <button className="btn btn-dark" style={{ width: "200px" }} type="submit">Submit form</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
