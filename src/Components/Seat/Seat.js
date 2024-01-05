import React, { useState } from 'react';
import './Seat.css';

const BusSeatBooking = () => {
 const [selectedSeats, setSelectedSeats] = useState([]);
 const seatRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
 const seatNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 const handleSeatClick = (row, number) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.some((seat) => seat.row === row && seat.number === number)) {
        return prevSelectedSeats.filter((seat) => seat.row !== row || seat.number !== number);
      } else {
        return [...prevSelectedSeats, { row, number }];
      }
    });
 };

 const renderSeat = (row, number) => {
    const isSelected = selectedSeats.some((seat) => seat.row === row && seat.number === number);
    return (
      <div
        key={`${row}${number}`}
        className={`seat ${isSelected ? 'selected' : ''}`}
        onClick={() => handleSeatClick(row, number)}
      >
        {number}
      </div>
    );
 };

 return (
  <>
  <br/>
  <br/>
  <br/>
    <div className="bus-seat-booking">
      <h3>Choose Your Seat</h3>
      <div className="seat-container">
        {seatRows.map((row) => (
          <div key={row} className="seat-row">
            {seatNumbers.map((number) => renderSeat(row, number))}
          </div>
        ))}
      </div>
      <div className="selected-seats">
        <h3>Selected Seats</h3>
        <ul>
          {selectedSeats.map((seat) => (
            <li key={`${seat.row}${seat.number}`}>{seat.row}{seat.number}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
 );
};

export default BusSeatBooking;