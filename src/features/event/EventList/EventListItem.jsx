import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  render() {
    // binding event (event is the callback function of EventList.jsx) with this.props: 
    const {event, selectEvent} = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              {/* can use props like this also: {this.props.event.hostPhotoURL} */}
              <Item.Image size='tiny' circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header>{event.title}</Item.Header>
                <Item.Description>
                  Hosted by {event.hostedBy}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name='clock' /> {event.date} |
            <Icon name='marker' /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {/* //if event.attendees exist  then execute the map function*/}
              {event.attendees && event.attendees.map(attendee => (
                <EventListAttendee key={attendee.id} attendee={attendee}/>
              ))}
              </List>
        </Segment>
        <Segment clearing>
            <span>{event.description}</span>
            {/*wrapping the selectEvent prop with an array function to avoid being triggered as soon as the component loads */}
          <Button onClick={() => selectEvent(event)} as='a' color='teal' floated='right' content='View' />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
