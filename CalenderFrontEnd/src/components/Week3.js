import React, { Component } from "react";
import DateCard from "./DateCard";

class Week3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="week3">
        <DateCard
          date={"15"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"16"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"17"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"18"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"19"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"20"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"21"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
      </div>
    );
  }
}

export default Week3;
