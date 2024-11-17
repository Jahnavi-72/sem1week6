import React, { useState } from 'react';
import EventList from './EventList';
import NewEventForm from './NewEventForm';
import EditEventForm from './EditEventForm';
import './index.css';

const App = () => {
  const [events, setEvents] = useState([]); // State to manage the list of events
  const [editingEvent, setEditingEvent] = useState(null); // State to track the event being edited

  // Function to handle adding a new event
  const addEvent = (event) => {
    setEvents([...events, { id: Date.now(), ...event }]);
  };

  // Function to handle updating an existing event
  const updateEvent = (updatedEvent) => {
    setEvents(
      events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event))
    );
    setEditingEvent(null); // Clear editing state after update
  };

  // Function to handle deleting an event
  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  // Function to start editing an event
  const editEvent = (event) => {
    setEditingEvent(event);
  };

  return (
    <div className="app-container">
      <h1>Event Management System</h1>

      {/* Conditional rendering based on whether an event is being edited */}
      {editingEvent ? (
        <EditEventForm
          event={editingEvent}
          updateEvent={updateEvent}
          cancelEdit={() => setEditingEvent(null)}
        />
      ) : (
        <NewEventForm addEvent={addEvent} />
      )}

      {/* Event List Component */}
      <EventList events={events} editEvent={editEvent} deleteEvent={deleteEvent} />
    </div>
  );
};

export default App;