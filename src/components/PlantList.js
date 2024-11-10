import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants, markAsSoldOut, deletePlant }) {
  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          markAsSoldOut={markAsSoldOut}
          deletePlant={deletePlant}
        />
      ))}
    </div>
  );
}

export default PlantList;
