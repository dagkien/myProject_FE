// @flow
import {
  GoogleOutlined,
  LockOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container-login">
      <div className="wrap-login p-l-55 p-r-55 p-t-65 p-b-54">
        <form className="login-form validate-form">
          <span className="login-form-title p-b-49">Login</span>

          <div className="wrap-input " data-validate="Username is reauired">
            <span className="label-input">Username</span>
            <div className="forcus-input">
              <UserOutlined />
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Type your username"
              />
            </div>
          </div>

          <div className="wrap-input " data-validate="Password is required">
            <span className="label-input">Password</span>
            <div className="forcus-input">
              <LockOutlined />
              <input
                className="input"
                type="password"
                name="pass"
                placeholder="Type your password"
              />
            </div>
          </div>

          <div className="text-right p-t-8 p-b-31">
            <Link to={"/login"}>Forgot password?</Link>
          </div>

          <div className="container-login-form-btn">
            <div className="wrap-login-form-btn">
              <div className="login-form-bgbtn"></div>
              <button className="login-form-btn">Login</button>
            </div>
          </div>

          <div className="txt1 text-center p-t-54 p-b-20"></div>

          <div className="flex-c-m">
            <Link to={"/login"} className="login-social-item bg1">
              <i className="fab fas-facebook"></i>
            </Link>

            <Link to={"/login"} className="login-social-item bg2">
              <TwitterOutlined />
            </Link>

            <Link to={"/login"} className="login-social-item bg3">
              <GoogleOutlined />
            </Link>
          </div>

          <div className="flex-col-c p-t-155">
            <span className="txt1 p-b-17">Or Sign Up Using</span>

            <Link to={"/login"} className="txt2">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
