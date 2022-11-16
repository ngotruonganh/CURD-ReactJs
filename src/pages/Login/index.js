import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import Logo from "../../assets/images/Logo.png";
import backGround from "../../assets/images/backGround.png";

class Login extends React.Component {
  state = {
    changePass: false,
    changeOptions: false,
    opacityPage: false,
  };
  openModelFogotPassWord = () => {
    this.setState({
      changePass: !this.state.changePass,
    });
  };

  opacityScreen = () => {
    this.setState({
      opacityPage: !this.state.opacityPage,
    });
  };

  onChangeOptions = (e) => {
    e.preventDefault();
    this.setState({
      changeOptions: !this.state.changeOptions,
      opacityPage: !this.state.opacityPage,
    });
  };
  notPrevent = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <section className="LoginPape hide">
        <article className="left-content">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="sign-in">
            <form className="sign-in-form">
              <h1>MonoLeak</h1>
              <p>Chào mừng bạn đến với chúng tôi</p>
              <div className="input-field">
                <p>Email</p>
                <input type="text" placeholder="Nhập email của bạn" />
                {/* show error */}
                <small></small>
              </div>
              <div className="input-field">
                <p>Mật khẩu</p>
                <input type="password" placeholder="*******" />
                {/* show error */}
                <small></small>
              </div>
              <a onClick={() => this.openModelFogotPassWord()} className="forget-pass">
                Quên mật khẩu
              </a>
              {this.state.changePass === false ? (
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
                          className="getpass"
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
                          className="getpass"
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
              <Link to="/dashboard" type="submit" className="btn-log-in">
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
          <div className="Image">
            <img src={backGround} alt="logo-img" />
          </div>
        </article>
      </section>
    );
  }
}

export default Login;
