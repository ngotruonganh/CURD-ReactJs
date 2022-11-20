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

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    userAccount: [{ email: "", password: "" }],
    forgotPass: false,
    changeOptions: false,
  };

  openModelForgotPassword = () => {
    this.setState({
      forgotPass: !this.state.forgotPass,
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
  };

  addUser = (user) => {
    this.setState({
      userAccount: [...this.state.userAccount, user],
    });
    toast.success("Đăng nhập thành công");
    this.setState({
      email: "",
      password: "",
    });
  };

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
                {/* show error */}
                <small></small>
              </div>
              <div className="input-field">
                <label>Mật khẩu</label>
                <input
                  type="password"
                  placeholder="*******"
                  value={password}
                  onChange={(event) => this.handleOnChangePassword(event)}
                />
                {/* <FontAwesomeIcon icon={faEye} /> */}
                {/* show error */}
                <small></small>
              </div>
              <div className="forgot-password">
                <a onClick={() => this.openModelForgotPassword()}>
                  Quên mật khẩu?
                </a>
              </div>
              {this.state.forgotPass === false ? (
                <></>
              ) : (
                <>
                  {this.state.changeOptions === false ? (
                    <div className="modal">
                      <div className="overlay"></div>
                      <form>
                        <h1> Quên mật khẩu </h1>
                        <div className="input-field">
                          <p>Email</p>
                          <input type="text" placeholder="Nhập email của bạn" />
                          {/* show error */}
                          <small></small>
                        </div>
                        <button
                          className="get-pass-by-email"
                          type="submit"
                          onClick={(e) => this.notPrevent(e)}
                        >
                          Lấy lại mật khẩu
                        </button>
                        <div className="options">
                          <button onClick={(e) => this.onChangeOptions(e)}>
                            Phone
                          </button>
                          <button onClick={() => this.openModel()}>Đóng</button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="modal">
                      <form>
                        <h1> Quên mật khẩu </h1>
                        <div className="input-field">
                          <p>Số điện thoại</p>
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
                          onClick={(e) => this.notPrevent(e)}
                        >
                          Lấy lại mật khẩu
                        </button>
                        <div className="options">
                          <button onClick={(e) => this.onChangeOptions(e)}>
                            Email
                          </button>
                          <button onClick={() => this.openModel()}>Đóng</button>
                        </div>
                      </form>
                    </div>
                  )}
                </>
              )}
              <Link
                to="#"
                type="submit"
                className="btn-log-in"
                onClick={(e) => this.handleLogin(e)}
              >
                Đăng nhập
              </Link>
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
