import React from "react";
import "./Settings.scss";
import Navbar from "../../components/Navbar";

class Settings extends React.Component {
  state = {};
  render() {
    const options = ["Nam", "Nữ"];
    return (
      <div className="row">
        <Navbar />
        <section className="setting-wrapper">
          <h1 className="title">Cài đặt</h1>
          <div className="content">
            <div className="acc-info">
              <h3>Thông tin tài khoản</h3>
              <p>Cập nhập thông tin của bạn</p>
            </div>
            <div className="change">
              <h3>Thông tin cá nhân</h3>
              <a href="#">Chỉnh Sửa</a>
            </div>
            <form className="input-field">
              <div className="first-item">
                <div className="name">
                  <p>Họ và tên</p>
                  <input type="text" placeholder="Mafulzul Islam" readOnly />
                </div>
                <div className="sex">
                  <p>Giới tính</p>
                  <select>
                    {options.map((option, index) => {
                      return <option key={index}>{option}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="second-item">
                <div className="birthday">
                  <p>Ngày sinh nhật</p>
                  <input type="date" placehoder="27/8/2998" readOnly />
                </div>
                <div className="phone">
                  <p>Số điện thoại</p>
                  <input type="text" placeholder="+123456789" readOnly />
                </div>
              </div>

              <div className="third-item">
                <p>Email</p>
                <input type="email" placeholder="abc@gmail.com" readOnly />
              </div>

              <div className="fourth-item">
                <div className="new-pass">
                  <p>Mật khẩu mới</p>
                  <input type="password" placeholder="..." readOnly />
                </div>
                <div className="new-pass-confirm">
                  <p>Nhập lại mật khẩu mới</p>
                  <input type="password" placeholder="..." readOnly />
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Settings;
