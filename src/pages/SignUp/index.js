import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.scss";
import Logo from "../../assets/images/Logo.png";
import backGround from "../../assets/images/backGround.png";

class SignUp extends React.Component {
  render() {
    return (
      <section className="SignupPage">
        <article className="left-content">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="sign-up">
            <form action="#" className="sign-up-form">
              <h1>Tạo tài khoản mới</h1>
              <p>Bạn cần điền đầy đủ thông tin để tiếp tục</p>
              <div className="input-field">
                <p>Họ và tên</p>
                <input type="text" placeholder="Nhập họ và tên" />
              </div>
              <div className="input-field">
                <p>Email</p>
                <input type="email" placeholder="Nhập Email" />
              </div>
              <div className="input-field">
                <p>Mật khẩu</p>
                <input type="password" placeholder="*******" />
              </div>
              <Link to="/" type="submit" className="btn-sign-up">
                Đăng kí
              </Link>
              <span className="sign-in-link">
                Bạn đã có tài khoản?
                <Link to="/">&nbsp;Đăng nhập</Link>
              </span>
            </form>
          </div>
        </article>

        <article className="right-content">
          <div className="Image">
            <img src={backGround} alt="image" />
          </div>
        </article>
      </section>
    );
  }
}

export default SignUp;
