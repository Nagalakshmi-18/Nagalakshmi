import React, { useState } from 'react';
import './TicketCancel.css';

function App() {
 const [bookingId, setBookingId] = useState('');
 const [cancelStatus, setCancelStatus] = useState('');

 const handleCancel = () => {
    if (!bookingId) {
      alert('Please enter your booking ID.');
      return;
    }
    // Cancel ticket logic goes here.
    setCancelStatus('Your booking has been cancelled.');
 };

 return (
  <>
  <br/>
  <br/>
  <br/>
    <div className="App">
      <h1>Bus Ticket Cancellation</h1>
      <input
        type="text"
        placeholder="Enter your booking ID"
        value={bookingId}
        onChange={(e) => setBookingId(e.target.value)}
      />
      <button onClick={handleCancel}>Cancel Ticket</button>
      {cancelStatus && <p>{cancelStatus}</p>}
    </div>
    </>
 );
}

export default App;