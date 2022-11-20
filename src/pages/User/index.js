import React from "react";
import axios from "axios";

class User extends React.Component {
  state = {
    listUser: [],
  };

  async componentDidMount() {
    //     axios.get("https://reqres.in/api/users?page=2").then((res) => {
    //       console.log(res.data);

    let res = await axios.get("https://reqres.in/api/users?page=2");
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
              <div key={item.id}>
                {index + 1} - {item.last_name}
              </div>
            );
          })}
      </>
    );
  }
}

export default User;
