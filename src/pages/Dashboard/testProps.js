import React from "react";
import { Link } from "react-router-dom";
import "./testProps.scss";

class testProp extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="recent">
          <div className="recent-heading">
            <h1>Giao dịch gần đây</h1>
            <Link to="/transactions">Xem tất cả</Link>
          </div>
          <div className="tables">
            <table>
              <thead>
                <tr>
                  <th>Tên hạng mục</th>
                  <th>Loại</th>
                  <th>Số tiền</th>
                  <th>Thời gian</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.title}</td>
                  <td>{this.props.type}</td>
                  <td>{this.props.amount}đ</td>
                  <td>{this.props.time}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default testProp;
