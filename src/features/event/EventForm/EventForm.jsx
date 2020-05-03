import React, { Component } from "react";
import { Form, Segment, Button } from "semantic-ui-react";

class EventForm extends Component {
  state = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: "",
  };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      //if selectedEvent not null
      // mounting the slected event to the state (title,date....)
      this.setState({
        ...this.props.selectedEvent,
      });
    }
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.id) {
      //this.state contains all our fileds (title,date...)
      this.props.updateEvent(this.state);
    } else {
      this.props.createEvent(this.state);
    }
  };

  //Non Destructured way
  // handleInputChange = evt => {
  //   this.setState({
  //     // we need to use [] brackets to access the object(evt) property
  //     [evt.target.name]: evt.target.value
  //   });
  // };

  //Destructured way
  //can use both ways
  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      // we need to use [] brackets to access the object property
      [name]: value,
    });
  };

  render() {
    const { cancelFormOpen } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
          <Form.Field>
            <label>Event Title</label>
            <input
              name='title'
              onChange={this.handleInputChange}
              value={title}
              placeholder='Event Title'
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name='date'
              onChange={this.handleInputChange}
              value={date}
              type='date'
              placeholder='Event Date'
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name='city'
              onChange={this.handleInputChange}
              value={city}
              placeholder='City event is taking place'
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name='venue'
              onChange={this.handleInputChange}
              value={venue}
              placeholder='Enter the Venue of the event'
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name='hostedBy'
              onChange={this.handleInputChange}
              value={hostedBy}
              placeholder='Enter the name of person hosting'
            />
          </Form.Field>
          <Button positive type='submit'>
            Submit
          </Button>
          <Button onClick={cancelFormOpen} type='button'>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
