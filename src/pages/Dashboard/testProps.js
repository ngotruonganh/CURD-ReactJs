import React from "react";
import { Link } from "react-router-dom";
import "./testProps.scss";
import { Carousel } from "react-bootstrap";
import backGround from "../../assets/images/backGround.png";
import backGround2 from "../../assets/images/backGround2.png";
import backGround3 from "../../assets/images/backGround3.png";

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
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={backGround}
                alt="First slide"
                style={{ width: "500px", height: "500px" }}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={backGround2}
                alt="Second slide"
                style={{ width: "500px", height: "500px" }}
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={backGround3}
                alt="Third slide"
                style={{ width: "500px", height: "500px" }}
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default testProp;
