import React from "react";
import { Link } from "react-router-dom";
import "./UseEmail.scss";

class UseEmail extends React.Component {
  render() {
    return (
      <section className="GetPassword">
        <form>
          <h1> Quên mật khẩu </h1>
          <div className="input-field">
            <p>Email</p>
            <input type="text" placeholder="Nhập email của bạn" />
            <small></small>
          </div>
          <button className="getpass">Lấy lại mật khẩu</button>
          <div class="options">
            <Link to="/usephone">Phone</Link>
            <Link to="/">Đóng</Link>
          </div>
        </form>
      </section>
    );
  }
}
export default UseEmail;
