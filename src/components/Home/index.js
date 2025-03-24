import { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Cookies from "js-cookie";

const status = { intial: "INITIAL", succes: "SUCCESS", failure: "FAILURE" };

class Home extends Component {
  state = { userData: [], name: "Kiran", active: status.intial };

  componentDidMount() {
    this.getDataFetch();
  }

  getDataFetch = async () => {
    const jwt = Cookies.get("JWTTOKEN");
    const options = {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    };
    const data = await fetch(
      `https://apis.ccbp.in/restaurants-list/2222`,
      options
    );
    const converted = await data.json();
    if (data.ok) {
      this.setState({ active: status.succes });
    } else {
      this.setState({ active: status.failure });
    }
  };

  onIntialState = () => <h1>Data IS In Progress</h1>;
  onSuccessState = () => <h1>Api call is succesful</h1>;
  onFailureState = () => <h1>Api call is failed</h1>;

  getData = () => {
    const { active } = this.state;
    switch (active) {
      case status.succes:
        return this.onSuccessState();
      case status.failure:
        return this.onFailureState();
      default:
        return this.onIntialState();
    }
  };

  render() {
    return <div>{this.getData()}</div>;
  }
}

export default Home;
