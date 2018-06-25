import React, { Component } from "react";
import DateCard from "./DateCard";

class Week1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="week1">
        <DateCard
          date={"01"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"02"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"03"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"04"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"05"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"06"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"07"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
      </div>
    );
  }
}

export default Week1;
