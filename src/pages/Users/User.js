import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class User extends React.Component {
  state = {
    listUser: [],
  };

  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2");
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
