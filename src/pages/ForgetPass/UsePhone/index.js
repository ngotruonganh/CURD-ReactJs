import React from "react";
import { Link } from "react-router-dom";
import "./UsePhone.scss";

class UsePhone extends React.Component {
  render() {
    return (
      <section className="GetPassword">
        <form>
          <h1> Quên mật khẩu </h1>
          <div className="input-field">
            <p>Số điện thoại</p>
            <input type="text" placeholder="Nhập số điện thoại của bạn" />
            <small></small>
          </div>
          <button className="getpass">Lấy lại mật khẩu</button>
          <div class="options">
            <Link to="/useemail">Email</Link>
            <Link to="/">Đóng</Link>
          </div>
        </form>
      </section>
    );
  }
}

export default UsePhone;
