import React from "react";
import googleLogo from "../../../images/google-logo-9824-32x32.ico";
import twitterLogo from "../../../images/logo-twitter-png-5860-32x32.ico";
import logo from "../../../images/logo.png";
import browser from "../../../images/design.png";
import { Link, useLocation, useHistory } from "react-router-dom";
import bg from "../../../images/AOL-BG.png";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";
const Register = () => {

   const { googleLogin, setUser, setIsLoading, twitterLogin } = useAuth();
   const location = useLocation();
   const uri = location?.state?.from || "/home";
   const history = useHistory();
//google redirect
   const redirectGoogle = () => {
     googleLogin()
       .then((result) => {
         history.push(uri);
         const user = result.user;
         setUser(user);
         toast.success("Login Success!!");
       })
       .catch((error) => {
         toast.error(error.message)
       })
       .finally(() => {
         setIsLoading(false);
       });
  };
  //twitter

   const redirectTwitter = () => {
     twitterLogin()
       .then((result) => {
         history.push(uri);
         const user = result.user;
         setUser(user);
         toast.success("Login Success!!");
       })
       .catch((error) => {
         toast.error(error.message);
       })
       .finally(() => {
         setIsLoading(false);
       });
   };
    return (
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-img">
        <div className="container my-5 py-5">
          <img src={logo} alt="logo" className="py-5" />
          <div className="shadow form-div mx-auto pb-5 pt-3 rounded-pill">
            <div className="mb-4">
              <h3 className="fw-bold text-uppercase">Register</h3>
              <img src={browser} alt="" />
            </div>
            <div>
              <button
                onClick={redirectGoogle}
                className="mx-3 shadow rounded-circle btn"
              >
                <img src={googleLogo} alt="google" />
              </button>
              <button
                onClick={redirectTwitter}
                className="mx-3 shadow rounded-circle btn"
              >
                <img src={twitterLogo} alt="twitter" />
              </button>
            </div>
            <div className="mt-4">
              <h6>Already have an account?</h6>
              <Link to="/login">
                <button className="btn btn-outline-warning fw-bold text-dark">
                  Login
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;
