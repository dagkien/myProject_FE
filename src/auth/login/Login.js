// @flow
import React from "react";
import {
  FacebookFilled,
  FacebookOutlined,
  GoogleOutlined,
  LockOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
const Login = () => {
  return (
    <div className="container-login100">
      <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
        <form className="login100-form validate-form">
          <span className="login100-form-title p-b-49">Login</span>

          <div className="wrap-input100 " data-validate="Username is reauired">
            <span className="label-input100">Username</span>
            <div className="forcus-input">
              <UserOutlined />
              <input
                className="input100"
                type="text"
                name="username"
                placeholder="Type your username"
              />
            </div>
          </div>

          <div className="wrap-input100 " data-validate="Password is required">
            <span className="label-input100">Password</span>
            <div className="forcus-input">
              <LockOutlined />
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Type your password"
              />
            </div>
          </div>

          <div className="text-right p-t-8 p-b-31">
            <a>Forgot password?</a>
          </div>

          <div className="container-login100-form-btn">
            <div className="wrap-login100-form-btn">
              <div className="login100-form-bgbtn"></div>
              <button className="login100-form-btn">Login</button>
            </div>
          </div>

          <div className="txt1 text-center p-t-54 p-b-20"></div>

          <div className="flex-c-m">
            <a className="login100-social-item bg1">
              <i className="fab fas-facebook"></i>
            </a>

            <a className="login100-social-item bg2">
              <TwitterOutlined />
            </a>

            <a className="login100-social-item bg3">
              <GoogleOutlined />
            </a>
          </div>

          <div className="flex-col-c p-t-155">
            <span className="txt1 p-b-17">Or Sign Up Using</span>

            <a className="txt2">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
