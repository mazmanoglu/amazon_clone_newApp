import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../assets/amazon_logo.png";
import corner from "../assets/cornerlogin.png";
//import {auth} from "./Firebase";

function Login() {
  /* const [email, setEmail] = useState(""); */
  /* const [password, setPassword] = useState(""); */

  /* const signIn = (e) => { */
  /*   e.preventDefault(); */
  /*   // this is for firebase login */
  /* }; */

  /* const register = (r) => { */
  /*   r.preventDefault(); */

  /*   auth */
  /*     .createUserWithEmailAndPassword(email, password) */
  /*     .then((auth) => { */
  /*       console.log(auth); */
  /*     }) */
  /*     .catch((error) => alert(error.message)); */

  /*   // this is for firebase register */
  /* }; */

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={logo} alt="logo" />
      </Link>
      <div className="login_container">
        <p className="login_text_signin">Sign in</p>
        <p className="login_text_email">Please write your email</p>
        <input
          type="email"
          className="login_textbox"
          placeholder="Email address"
          required
          //value={email}
          //onChange={(e) => setEmail(e.target.value)}
        />
        <p className="login_text_email">Please write your password</p>
        <input
          type="email"
          className="login_textbox"
          placeholder="Password"
          required
         // value={password}
         // onChange={(e) => setPassword(e.target.value)}
        />

        <Link to="/" className="xyz">
          <button
            className="login_continue_button"
            type="submit"
            //onClick={signIn}
          >
            Continue
          </button>
        </Link>

        <p className="login_text_privacy">
          By continuing, you agree to Fake Clone Amazon's{" "}
          <Link to="/" className="xxx">
            Conditions of Use
          </Link>{" "}
          and{" "}
          <Link to="/" className="xxx">
            Privacy Notice
          </Link>
          .
        </p>
        <div className="login_text_privacy">
          <img className="login_corner" src={corner} alt="corner" />{" "}
          <Link to="/" className="xxx">
            Need help?
            <br />
          </Link>
        </div>
      </div>
      <div className="create_side">
        <p className="newAccountText">New to Amazon?</p>
        <Link to="/" className="xxx">
          <button className="create_account" /* onClick={register} */>
            Create your Amazon account
          </button>
        </Link>
        <p className="bottom_sentence">
          <Link to="/" className="xxx">
            Condition of Use
          </Link>{" "}
          &nbsp;&nbsp;&nbsp;{" "}
          <Link to="/" className="xxx">
            Privacy Notice
          </Link>{" "}
          &nbsp;&nbsp;&nbsp;{" "}
          <Link to="/" className="xxx">
            Help
          </Link>
          <p>© 2021-2023, AmazonClone, Inc. or its affiliates</p>
        </p>
      </div>
    </div>
  );
}

export default Login;
