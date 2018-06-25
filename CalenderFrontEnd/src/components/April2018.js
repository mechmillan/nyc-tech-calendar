import React, { Component, Fragment } from "react";
import axios from "axios";

import WeekDates from "./WeekDates";
import Week1 from "./Week1";
import Week2 from "./Week2";
import Week3 from "./Week3";
import Week4 from "./Week4";

class April2018 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };

    this.getAllEvents = this.getAllEvents.bind(this);
  }

  componentDidMount() {
    this.getAllEvents();
  }

  getAllEvents() {
    axios
      .get("http://localhost:3000/api/events")
      .then(response => {
        this.setState({ events: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Fragment>
        <WeekDates />
        <Week1 events={this.state.events} getAllEvents={this.getAllEvents} />
        <Week2 events={this.state.events} getAllEvents={this.getAllEvents} />
        <Week3 events={this.state.events} getAllEvents={this.getAllEvents} />
        <Week4 events={this.state.events} getAllEvents={this.getAllEvents} />
      </Fragment>
    );
  }
}

export default April2018;
