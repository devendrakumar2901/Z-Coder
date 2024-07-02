import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('/api/events');
      setEvents(response.data);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Upcoming Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <p>{event.name} - {event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
