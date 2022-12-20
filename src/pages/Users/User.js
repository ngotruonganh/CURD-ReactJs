import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class User extends React.Component {
  state = {
    listUser: [],
  };

  async componentDidMount() {
    let res = await axios.get("http://localhost:8080/api/v1/user");
    console.log(res);
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  render() {
    let { listUser } = this.state;
    return (
      <>
        {listUser &&
          listUser.length > 0 &&
          listUser.map((item, index) => {
            return (
              <div key={index}>
                {item.email}
                {item.password}
                {item.id} - {item.first_name} - {item.last_name} -{" "}
                <img src={item.avatar} alt="avatar"></img>
                <Link to="/user/{item.id}">detail</Link>
              </div>
            );
          })}
      </>
    );
  }
}

export default User;
