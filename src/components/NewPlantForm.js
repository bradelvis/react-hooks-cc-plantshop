import React, { useState } from 'react';

function NewPlantForm({ addPlant }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the new plant object
    const newPlant = {
      name,
      image,
      price: parseFloat(price),
    };

    // Send the new plant data to the backend (POST request)
    fetch('https://react-hooks-cc-plantshop-1wcr.onrender.com/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((data) => {
        // After the plant is added, update the parent component's state
        addPlant(data);
        
        // Reset the form inputs
        setName('');
        setImage('');
        setPrice('');
      })
      .catch((error) => {
        console.error('Error adding plant:', error);
      });
  };

  return (
    <div className="new-plant-form">
      <h2>Add New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Plant name"
          required
        />
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          required
        />
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          step="0.01"
          placeholder="Price"
          required
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
