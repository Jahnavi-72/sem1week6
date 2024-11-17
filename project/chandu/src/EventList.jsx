import React from 'react';
import EventItem from './EventItem';

const EventList = ({ events, editEvent, deleteEvent }) => {
  return (
    <div className="event-list">
      <h2>Events</h2>
      {events.length === 0 ? (
        <p>No events available. Please add an event.</p>
      ) : (
        events.map((event) => (
          <EventItem
            key={event.id}
            event={event}
            editEvent={editEvent}
            deleteEvent={deleteEvent}
          />
        ))
      )}
    </div>
  );
};

export default EventList;