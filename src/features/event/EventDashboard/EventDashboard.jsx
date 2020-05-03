import React, { Component, Fragment } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";

const eventsFromDashBoard = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27T11:00:00+00:00",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28T14:00:00+00:00",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
    ],
  },
];

class EventDashboard extends Component {
  state = {
    events: eventsFromDashBoard,
    isOpen: false,
  };

  handleIsOpenToggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "assets/user.png";
    this.setState(({ events }) => ({
      //(...events) this is the events from our previous events
      //and spred them out and add a new array(newEvent)
      events: [...events, newEvent],
      //hide the form after creating the event
      isOpen: false
    }));
  };

  render() {
    //we have to use the this key word when we are accessing properties inside the class
    const { events, isOpen } = this.state;
    return (
      <Fragment>
        <Grid>
          <Grid.Column width={10}>
            <EventList events={events} />
          </Grid.Column>
          <Grid.Column width={6}>
            {/* don't call the function like this this.handleFormOpen() if so,
          as soon as the Component loads function will trigger */}
            <Button
              onClick={this.handleIsOpenToggle}
              positive
              content='Create Event'
            />
            {isOpen && (
              <EventForm
                createEvent={this.handleCreateEvent}
                cancelFormOpen={this.handleIsOpenToggle}
              />
            )}
          </Grid.Column>
        </Grid>
      </Fragment>
    );
  }
}

export default EventDashboard;
