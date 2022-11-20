import React from "react";
import { toast } from "react-toastify";
import "./Transactions.scss";
import Navbar from "../../components/Navbar";
import AddIcon from "../../assets/images/AddIcon.png";

class Transactions extends React.Component {
  state = {
    time: this.getCurrentDate(),
    title: "",
    type: "Sức khỏe",
    amount: "",
    listTransactions: [
      {
        id: "1",
        title: "Gửi cho Nhi  ",
        type: "Chuyển tiền",
        amount: 100000,
        time: "1/6/2021 8:00AM",
      },
      {
        id: "2",
        title: "Gửi cho Nhi  ",
        type: "Chuyển tiền",
        amount: 2000,
        time: "1/6/2021 8:00AM",
      },
      {
        id: "3",
        title: "Gửi cho Nhi  ",
        type: "Chuyển tiền",
        amount: 30000,
        time: "1/6/2021 8:00AM",
      },
      {
        id: "4",
        title: "Gửi cho Nhi  ",
        type: "Chuyển tiền",
        amount: 550000,
        time: "1/6/2021 8:00AM",
      },
    ],
    isOpen: false,
  };

  //   tắt mở modal thêm giao dịch
  openModelAddTransaction = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  //  reset state
  resetState = () => {
    this.setState({
      title: "",
      time: this.getCurrentDate(),
      amount: "",
      type: "Chuyển tiền",
    });
  };

  //  hủy button
  closeHandle = () => {
    this.openModelAddTransaction();
    this.resetState();
  };

  // thay đổi dữ liệu khi chọn ngày
  handleOnChangeTime = (event) => {
    this.setState({
      time: event.target.value,
    });
  };

  //  thay đổi dữ liệu khi gõ title
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  //  thay đổi dữ liệu khi gõ amount
  handleOnChangeAmount = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };

  //   thay đổi khi chọn type
  handleOnChangeType = (event) => {
    this.setState({
      type: event.target.value,
    });
  };

  //  Xác nhận tạo thêm giao dịch
  handleClick = (e) => {
    e.preventDefault();
    if (
      !this.state.title ||
      !this.state.time ||
      !this.state.amount ||
      !this.state.type
    ) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }
    let trans = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      time: this.state.time,
      amount: this.state.amount,
      type: this.state.type,
    };
    this.addTrans(trans);
    this.resetState();
    this.openModelAddTransaction();
  };

  //  lấy thời gian hiện tại
  getCurrentDate(separator = "") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    let ampm = hour >= 12 ? "PM" : "AM";
    return `${date}${separator}${
      month < 10 ? `0${month}` : `/${month}`
    }${separator}/${year} ${hour}:${
      minute < 10 ? `0${minute}` : `${minute}`
    }${ampm}`;
  }

  //  thêm giao dịch
  addTrans = (trans) => {
    this.setState({
      listTransactions: [...this.state.listTransactions, trans],
    });
    toast.success("Thêm thành công");
  };

  //  xóa giao dịch
  onDelete = (trans) => {
    let currentTrans = this.state.listTransactions;
    currentTrans = currentTrans.filter((item) => item.id !== trans.id);
    this.setState({
      listTransactions: currentTrans,
    });
    toast.success("Xóa thành công");
  };

  //  chỉnh sửa giao dịch
  onEdit = () => {
    toast.success("Chỉnh sửa thành công");
  };

  render() {
    //     let sum = 0;
    let { time, title, amount, listTransactions } = this.state;
    return (
      <div className="row">
        <Navbar />
        <section className="transactions-wrapper">
          <h1>Giao dịch</h1>
          <article className="search-box">
            <input type="text" placeholder="Tìm kiếm giao dịch của bạn" />
            <button onClick={() => this.openModelAddTransaction()}>
              <img src={AddIcon} alt="addIcon" />
              Tạo giao dịch
            </button>
            {this.state.isOpen === true && (
              <>
                <div className="addTransaction">
                  <div className="overlay"></div>
                  <form>
                    <h1> Giao dịch mới </h1>
                    <div className="input-field">
                      <p>Thời gian</p>
                      <input
                        type="text"
                        value={time}
                        onChange={(event) => this.handleOnChangeTime(event)}
                      />
                      <small></small>
                    </div>
                    <div className="input-field">
                      <p>Nội dung</p>
                      <input
                        type="text"
                        placeholder="Nhập nội dung"
                        value={title}
                        onChange={(event) => this.handleOnChangeTitle(event)}
                      />
                      <small></small>
                    </div>
                    <div className="input-field">
                      <p>Loại</p>
                      <select
                        onChange={(event) => this.handleOnChangeType(event)}
                      >
                        <option value="Sức khỏe">Sức khỏe</option>
                        <option value="Chuyển tiền">Chuyển tiền</option>
                        <option value="Ăn uống">Ăn uống</option>
                        <option value="Mua sắm">Mua sắm</option>
                        <option value="Kiến thức">Kiến thức</option>
                        <option value="Khác">Khác</option>
                      </select>
                    </div>
                    <div className="input-field">
                      <p>Số tiền</p>
                      <input
                        type="text"
                        placeholder="Nhập số tiền"
                        value={amount}
                        onChange={(event) => this.handleOnChangeAmount(event)}
                      />
                      <small></small>
                    </div>

                    <div className="options">
                      <button
                        className="cancelled"
                        onClick={() => this.closeHandle()}
                      >
                        Hủy
                      </button>
                      <button
                        className="confirmAddTrans"
                        onClick={(e) => this.handleClick(e)}
                      >
                        Thêm
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </article>
          <article className="all-recent-trans">
            <div className="tables">
              <table>
                <thead>
                  <tr>
                    <th>Tên hạng mục</th>
                    <th>Loại</th>
                    <th>Số tiền</th>
                    <th>Thời gian</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {listTransactions &&
                    listTransactions.length > 0 &&
                    listTransactions.map((item, index) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.title}</td>
                          <td>{item.type}</td>
                          <td>{item.amount}đ</td>
                          <td>{item.time}</td>
                          <td>
                            <button onClick={() => this.onEdit()}>
                              Chỉnh sửa
                            </button>
                            <button onClick={() => this.onDelete(item)}>
                              Xóa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default Transactions;
