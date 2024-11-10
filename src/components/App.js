import React, { useState, useEffect } from 'react';
import Header from './Header';
import PlantList from './PlantList';
import Search from './Search';
import NewPlantForm from './NewPlantForm'
function App() {
  const [plants, setPlants] = useState([]);          // State to store the plants
  const [searchQuery, setSearchQuery] = useState('');  // State for search query
  const [error, setError] = useState(null);           // State for error handling

  // Fetch plants from API when the component mounts
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => {
        console.error('Error fetching plants:', error);
        setError('Failed to load plants.');
      });
  }, []);

  // Function to add a new plant
  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  // Function to search for plants by name
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to mark a plant as "sold out"
  const markAsSoldOut = (id) => {
    const updatedPlants = plants.map((plant) =>
      plant.id === id ? { ...plant, soldOut: true } : plant
    );
    setPlants(updatedPlants);
  };

  // Function to delete a plant
  const deletePlant = (id) => {
    const updatedPlants = plants.filter((plant) => plant.id !== id);
    setPlants(updatedPlants);
  };

  return (
    <div className="app">
      <Header />
      {/* Pass search query and setter to Search component */}
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {/* Pass addPlant function to the form */}
      <NewPlantForm addPlant={addPlant} />
      
      {/* Display error message if there is one */}
      {error && <div className="error">{error}</div>}
      
      {/* Pass filtered plants and functions to the plant list */}
      <PlantList
        plants={filteredPlants}
        markAsSoldOut={markAsSoldOut}
        deletePlant={deletePlant}
      />
    </div>
  );
}

export default App;
