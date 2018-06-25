import React, { Component } from "react";
import DateCard from "./DateCard";

class Week2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="week2">
        <DateCard
          date={"08"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"09"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"10"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"11"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"12"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"13"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
        <DateCard
          date={"14"}
          events={this.props.events}
          getAllEvents={this.props.getAllEvents}
        />
      </div>
    );
  }
}

export default Week2;
