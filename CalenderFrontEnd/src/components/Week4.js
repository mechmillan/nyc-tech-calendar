import React, { Component } from "react";
import DateCard from "./DateCard";

class Week4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="week4">
        <DateCard
          date={"22"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"23"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"24"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"25"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"26"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"27"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"28"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
      </div>
    );
  }
}

export default Week4;
