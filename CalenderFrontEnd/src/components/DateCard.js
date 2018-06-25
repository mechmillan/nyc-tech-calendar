import React, { Component } from "react";
import EventForm from "./EventForm";
import axios from "axios";

class DateCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      eventId: ""
    };

    this.togglePopup = this.togglePopup.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  togglePopup() {
    this.setState({ clicked: !this.state.clicked });
  }

  onClickDelete(id) {
    let { getAllEvents } = this.props;

    axios
      .delete(`http://localhost:3000/api/events/${id}`)
      .then(() => getAllEvents());
  }

  render() {
    return (
      <div className="date-card">
        <strong>
          <button onClick={this.togglePopup}>+Event</button>
          <span>{this.props.date}</span>
          {this.props.events && this.props.events.length > 0 ? (
            <ul>
              {this.props.events
                .filter(
                  event =>
                    Number(event.start.slice(8, 10)) === Number(this.props.date)
                )
                .map(event => {
                  return (
                    <li key={event.id}>
                      <button onClick={() => this.onClickDelete(event.id)}>
                        X
                      </button>
                      {event.title} - {event.description},
                      {event.start.slice(11, 16)} to {event.end.slice(11, 16)}
                    </li>
                  );
                })}
            </ul>
          ) : null}
        </strong>
        {this.state.clicked === true ? (
          <EventForm
            date={this.props.date}
            togglePopup={this.togglePopup}
            getAllEvents={this.props.getAllEvents}
          />
        ) : null}
      </div>
    );
  }
}

export default DateCard;
