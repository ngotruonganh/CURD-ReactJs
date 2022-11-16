import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.scss";
import Navbar from "../../components/Navbar";
import Value from "../../assets/images/Value.png";
import ValueHover from "../../assets/images/ValueHover.png";
import Value2 from "../../assets/images/Value2.png";
import Value2Hover from "../../assets/images/Value2Hover.png";
import Heart from "../../assets/images/Heart.png";
import Money from "../../assets/images/Money.png";

class Dashboard extends React.Component {
  state = {
    listTransactions: [
      {
        id: "1",
        name: "Gửi cho Nhi",
        type: "Chuyển tiền",
        amountOfMonney: 100000,
        time: "1/6/2021 8:00AM",
      },
      {
        id: "2",
        name: "Nạp game",
        type: "Chuyển tiền",
        amountOfMonney: 1000000,
        time: "1/6/2021 9:00AM",
      },
      {
        id: "3",
        name: "Cho gái",
        type: "Chuyển tiền",
        amountOfMonney: 100000,
        time: "1/6/2021 10:00AM",
      },
    ],
  };
  render() {
    let { listTransactions } = this.state;

    return (
      <div className="row">
        <Navbar />
        <section className="dashboard-wrapper">
          <article className="left-wrap">
            <div className="general">
              <h1>Tổng quan</h1>
              <div className="Surplus">
                <div className="surplus-img">
                  <img className="offHover" src={Value} alt="" />
                  <img className="onHover" src={ValueHover} alt="" />
                </div>
                <div className="detail">
                  <p>Số dư</p>
                  <p className="surplus-value">$5240.21</p>
                </div>
              </div>
              <div className="Expense">
                <div className="expense-img">
                  <img className="offHover" src={Value} alt="" />
                  <img className="onHover" src={ValueHover} alt="" />
                </div>
                <div className="detail">
                  <p>Tổng chi tiêu</p>
                  <p className="expense-value">$250.80</p>
                </div>
              </div>
              <div className="Income">
                <div className="income-img">
                  <img className="offHover" src={Value2} alt="" />
                  <img className="onHover" src={Value2Hover} alt="" />
                </div>
                <div className="detail">
                  <p>Tổng thu nhập</p>
                  <p className="income-value">$550.25</p>
                </div>
              </div>
            </div>

            <div className="charts">
              <h1>Dòng tiền lưu động</h1>
              <div className="chart"></div>
            </div>

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
                    {listTransactions &&
                      listTransactions.length > 0 &&
                      listTransactions.map((item) => {
                        return (
                          <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{item.amountOfMonney}đ</td>
                            <td>{item.time}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <div className="right-wrap">
            <div className="calculator">
              <div className="cal-icon">
                <img src={Heart} alt="heart" />
              </div>
              <p>Sức khỏe</p>
              <span>
                <img src={Money} alt="" />
              </span>
              <span>1.000.000</span>
            </div>
            <div className="calculator">
              <div className="cal-icon">
                <img src={Heart} alt="heart" />
              </div>
              <p>Sức khỏe</p>
              <span>
                <img src={Money} alt="" />
              </span>
              <span>1.000.000</span>
            </div>
            <div className="calculator">
              <div className="cal-icon">
                <img src={Heart} alt="heart" />
              </div>
              <p>Sức khỏe</p>
              <span>
                <img src={Money} alt="" />
              </span>
              <span>1.000.000</span>
            </div>
            <div className="calculator">
              <div className="cal-icon">
                <img src={Heart} alt="heart" />
              </div>
              <p>Sức khỏe</p>
              <span>
                <img src={Money} alt="" />
              </span>
              <span>1.000.000</span>
            </div>
            <div className="calculator">
              <div className="cal-icon">
                <img src={Heart} alt="heart" />
              </div>
              <p>Sức khỏe</p>
              <span>
                <img src={Money} alt="" />
              </span>
              <span>1.000.000</span>
            </div>
            <div className="calculator">
              <div className="cal-icon">
                <img src={Heart} alt="heart" />
              </div>
              <p>Sức khỏe</p>
              <span>
                <img src={Money} alt="" />
              </span>
              <span>1.000.000</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
