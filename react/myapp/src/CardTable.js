import React from 'react';
import './CardTable.css';

const CardTable = ({ cardData }) => {
  return (
    <table className="card-table">
      <thead>
        <tr>
          <th>Номер карты</th>
          <th>Дата</th>
          <th>CVC</th>
        </tr>
      </thead>
      <tbody>
        {cardData.map((data, index) => (
          <tr key={index}>
            <td>{data.cardNumber}</td>
            <td>{data.cardDate}</td>
            <td className="cvv-value"></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CardTable;