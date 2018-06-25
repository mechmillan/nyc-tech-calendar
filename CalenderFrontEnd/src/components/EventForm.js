import React, { Component } from "react";
import axios from "axios";

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      start: "",
      end: "",
      status: "open", // hard-code for now
      date: "1" // hard-code for now
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.postEvent = this.postEvent.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let { togglePopup, getAllEvents } = this.props;
    togglePopup();
    this.postEvent().then(() => getAllEvents());
  }

  postEvent() {
    return axios
      .post("http://localhost:3000/api/events", {
        title: this.state.title,
        description: this.state.description,
        start: `2018-04-${this.props.date}T${this.state.start}:00.000Z`,
        end: `2018-04-${this.props.date}T${this.state.end}:00.000Z`,
        status: "open",
        date: `${this.props.date}`
      })
      .then(response => console.log("Response code: ", response.status))
      .catch(err => console.log(err));
  }

  handleChange(evt) {
    const target = evt.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  render() {
    return (
      <div className="event-form">
        <div className="event-form_inner">
          <form onSubmit={this.handleSubmit}>
            <label>
              {" "}
              Title:
              <input
                required
                type="text"
                name="title"
                onChange={this.handleChange}
              />
            </label>
            <label>
              {" "}
              Description:
              <textarea
                required
                name="description"
                onChange={this.handleChange}
              />
            </label>
            <label>
              {" "}
              Start Time:
              <input
                required
                type="time"
                name="start"
                onChange={this.handleChange}
              />
            </label>
            <label>
              {" To "} End Time:
              <input
                required
                type="time"
                name="end"
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default EventForm;
