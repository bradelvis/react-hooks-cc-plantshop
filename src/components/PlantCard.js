import React from 'react';

function PlantCard({ plant, markAsSoldOut, deletePlant }) {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>Price: ${plant.price}</p>
      <button onClick={() => markAsSoldOut(plant.id)}>
        {plant.soldOut ? 'Sold Out' : 'Mark as Sold Out'}
      </button>
      <button onClick={() => deletePlant(plant.id)}>Delete</button>
    </div>
  );
}

export default PlantCard;
