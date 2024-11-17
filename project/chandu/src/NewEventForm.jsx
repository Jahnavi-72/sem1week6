import React, { useState } from 'react';


const NewEventForm = ({ addEvent }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ title, date, description });
    setTitle('');
    setDate('');
    setDescription('');
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>Create New Event</h2>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default NewEventForm;