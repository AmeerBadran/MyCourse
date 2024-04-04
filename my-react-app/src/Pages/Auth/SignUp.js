import React from "react";
import Header from "../../components/Header/Header"
import "./signup.css";

export default function SignUp() {
    return (
        <div className="signUpContainer ">
            <Header headerColor="black" />
            <div className="d-flex innerContainer container">
                <div className="imageContainer">
                    <img src={require(`../../assets/Image/bg1.jpg`)} className="img-fluid imgStyle2" alt="..." />
                </div>
                <div className="InputsContainer">
                    <h1>Sing Up</h1>
                    <hr className="hrClass"></hr>
                    <form className="row g-3 needs-validation " noValidate>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">User Name</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend"><i className="fa-solid fa-user"></i></span>
                                <input type="text" className="form-control inputStyle" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustomUsername" className="form-label">Email</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend"><i className="fa-solid fa-envelope"></i></span>
                                <input type="text" className="form-control inputStyle" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Password</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend"><i className="fa-solid fa-key"></i></span>
                                <input type="password" className="form-control inputStyle" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom01" className="form-label">Phone Number</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend"><i className="fa-solid fa-mobile-screen-button"></i></span>
                                <input type="text" className="form-control inputStyle" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustomUsername" className="form-label">Country</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend"><i className="fa-solid fa-map-location"></i></span>
                                <input type="text" className="form-control inputStyle" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustomUsername" className="form-label">City</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend"><i className="fa-solid fa-city"></i></span>
                                <input type="text" className="form-control inputStyle" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustomUsername" className="form-label">More Information</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend"><i className="fa-solid fa-house-user"></i></span>
                                <input type="text" className="form-control inputStyle" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <label htmlFor="validationCustom04" className="form-label">Day</label>
                            <select className="form-select inputStyle" value={""} required>
                                <option disabled value="">Choose...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                            </select>

                            <div className="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="validationCustom04" className="form-label">Month</label>
                            <select className="form-select inputStyle" id="validationCustom04" value={""} required>
                                <option disabled value="">Choose...</option>
                                <option value="Jan">Jan</option>
                                <option value="Feb">Feb</option>
                                <option value="Mar">Mar</option>
                                <option value="Apr">Apr</option>
                                <option value="May">May</option>
                                <option value="Jun">Jun</option>
                                <option value="Jul">Jul</option>
                                <option value="Aug">Aug</option>
                                <option value="Sep">Sep</option>
                                <option value="Oct">Oct</option>
                                <option value="Nov">Nov</option>
                                <option value="Dec">Dec</option>
                            </select>

                            <div className="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="validationCustom04" className="form-label">Year</label>
                            <select className="form-select inputStyle" value={""} required>
                                <option disabled value="">Choose...</option>
                                <option value="1980">1980</option>
                                <option value="1981">1981</option>
                                <option value="1982">1982</option>
                                <option value="1983">1983</option>
                                <option value="1984">1984</option>
                                <option value="1985">1985</option>
                                <option value="1986">1986</option>
                                <option value="1987">1987</option>
                                <option value="1988">1988</option>
                                <option value="1989">1989</option>
                                <option value="1990">1990</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                                <option value="1995">1995</option>
                                <option value="1996">1996</option>
                                <option value="1997">1997</option>
                                <option value="1998">1998</option>
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                            </select>

                            <div className="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className="col-md-1 mt-5 d-flex justify-content-center align-items-center">
                            <input type="radio" id="male" name="fav_language" value="CSS" />
                            <label htmlFor="male">Male</label>
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                        <div className="col-md-1 mt-5 d-flex justify-content-center align-items-center">
                            <input type="radio" id="female" name="fav_language" value="HTML" />
                            <label htmlFor="female">Female</label>
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input inputStyle" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label" htmlFor="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-dark" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
