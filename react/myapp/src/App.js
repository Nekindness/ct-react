import React, { useState } from 'react';
import CardForm from './CardForm';
import CardTable from './CardTable';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);

  const handleSend = (cardData) => {
    setCards([...cards, cardData]);
  };

  return (
    <div className="app">
      <h1>React hook from</h1>
      <CardForm onSend={handleSend} />
      <CardTable cardData={cards} />
    </div>
  );
};

export default App;