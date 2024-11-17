import React from 'react';
import PropTypes from 'prop-types';


const EventItem = ({ event, editEvent, deleteEvent }) => {
  return (
    <div className="event-item">
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.description}</p>
      <div className="event-item-buttons">
        <button onClick={() => editEvent(event)}>Edit</button>
        <button onClick={() => deleteEvent(event.id)}>Delete</button>
      </div>
    </div>
  );
};

EventItem.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  editEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default EventItem;