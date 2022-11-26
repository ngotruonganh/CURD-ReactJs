import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.scss";

// image
import Logo from "../../assets/images/Logo.png";
import backGround from "../../assets/images/backGround.png";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    userAccount: [{ email: "", password: "" }],
    forgotPass: false,
    changeOptions: false,
    isShowPassword: false,
  };

  openModelForgotPassword = () => {
    this.setState({
      forgotPass: !this.state.forgotPass,
    });
  };

  showHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  onChangeOptions = (e) => {
    e.preventDefault();
    this.setState({
      changeOptions: !this.state.changeOptions,
    });
  };

  handleOnChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }
    let user = {
      id: Math.floor(Math.random() * 1001),
      email: this.state.email,
      password: this.state.password,
    };
    this.addUser(user);
    this.setState({
      email: "",
      password: "",
    });
    toast.success("Đăng nhập thành công");
  };

  addUser = (user) => {
    this.setState({
      userAccount: [...this.state.userAccount, user],
    });
  };

  getPhone(e) {
    e.preventDefault();
    toast.success("đã gửi mã đến số điện thoại của bạn");
  }

  getEmail(e) {
    e.preventDefault();
    toast.success("đã gửi mã đến email của bạn");
  }

  render() {
    let { email, password } = this.state;
    return (
      <section className="login-page">
        <article className="left-content">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="sign-in">
            <form className="sign-in-form">
              <h1>MonoLeak</h1>
              <p>Chào mừng bạn đến với chúng tôi</p>
              <div className="input-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  value={email}
                  onChange={(event) => this.handleOnChangeEmail(event)}
                />
                {/* show error wrong email*/}
                <small></small>
              </div>
              <div className="input-field">
                <label>Mật khẩu</label>
                <div className="custom-input">
                  <input
                    type={this.state.isShowPassword ? "text" : "password"}
                    placeholder="*******"
                    value={password}
                    onChange={(event) => this.handleOnChangePassword(event)}
                    autoComplete="on"
                  />
                  <span onClick={() => this.showHidePassword()}>
                    {this.state.isShowPassword ? (
                      <FontAwesomeIcon icon={faEye} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </span>
                </div>
                {/* show error wrong password */}
                <small></small>
              </div>
              <div className="forgot-password">
                <p onClick={() => this.openModelForgotPassword()}>
                  Quên mật khẩu?
                </p>
              </div>
              {this.state.forgotPass === false ? (
                <></>
              ) : (
                <>
                  {this.state.changeOptions === false ? (
                    <div className="modal">
                      <div className="overlay"></div>
                      <form action="#" method="#">
                        <h1> Quên mật khẩu </h1>
                        <div className="input-field">
                          <label>Email</label>
                          <input type="text" placeholder="Nhập email của bạn" />
                          {/* show error */}
                          <small></small>
                        </div>
                        <button
                          className="get-pass-by-email"
                          type="submit"
                          onClick={(e) => this.getEmail(e)}
                        >
                          Lấy lại mật khẩu
                        </button>
                        <div className="options">
                          <button onClick={(e) => this.onChangeOptions(e)}>
                            Phone
                          </button>
                          <button
                            onClick={() => this.openModelForgotPassword()}
                          >
                            Đóng
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="modal">
                      <form action="#" method="#">
                        <h1> Quên mật khẩu </h1>
                        <div className="input-field">
                          <label>Số điện thoại</label>
                          <input
                            type="text"
                            placeholder="Nhập số điện thoại của bạn"
                          />
                          {/* show error */}
                          <small></small>
                        </div>
                        <button
                          type="submit"
                          className="get-pass-by-phone"
                          onClick={(e) => this.getPhone(e)}
                        >
                          Lấy lại mật khẩu
                        </button>
                        <div className="options">
                          <button onClick={(e) => this.onChangeOptions(e)}>
                            Email
                          </button>
                          <button
                            onClick={() => this.openModelForgotPassword()}
                          >
                            Đóng
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </>
              )}
              <div>
                <Link
                  to="/dashboard"
                  type="submit"
                  className="btn-log-in"
                  onClick={(e) => this.handleLogin(e)}
                >
                  Đăng nhập
                </Link>
              </div>
              <span className="sign-up-link">
                Bạn chưa có tài khoản?
                <Link to="/signup">&nbsp;Đăng kí miễn phí</Link>
              </span>
            </form>
          </div>
        </article>

        <article className="right-content">
          <div className="image">
            <img src={backGround} alt="logo-img" />
          </div>
        </article>
      </section>
    );
  }
}

export default Login;
