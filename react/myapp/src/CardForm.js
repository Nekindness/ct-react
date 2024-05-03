import React, { useState } from 'react';
import './CardForm.css';

const CardForm = ({ onSend }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardMonth, setCardMonth] = useState('');
  const [cardDate, setCardDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cardData = {
      cardNumber,
      cardDate: `${cardMonth}/${cardDate}`,
      cvc
    };
    onSend(cardData);
    setCardNumber('');
    setCardMonth('');
    setCardDate('');
    setCvc('');
  };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <div className="card-input">
        <label>Номер карты:</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div className="card-input">
        <label>Месяц:</label>
        <div className="date-input">
          <input
            type="text"
            value={cardMonth}
            onChange={(e) => setCardMonth(e.target.value)}
          />
          <span>/</span>
          <input
            type="text"
            value={cardDate}
            onChange={(e) => setCardDate(e.target.value)}
          />
        </div>
      </div>
      <div className="card-input">
        <label>CVC код:</label>
        <input
          type="text"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default CardForm;  