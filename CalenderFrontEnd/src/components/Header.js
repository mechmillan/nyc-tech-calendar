import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: "",
      currentYear: ""
    };
  }

  componentDidMount() {
    this.setState({
      currentMonth: "April",
      currentYear: "2018"
    });
  }

  render() {
    return (
      <div className="header">
        <p>(placeholder buttons)</p>
        <button>Current Day</button>
        <button>Prev</button>
        <button>Next</button>
        <p>
          <strong>
            {this.state.currentMonth} {this.state.currentYear}
          </strong>
        </p>
      </div>
    );
  }
}

export default Header;
