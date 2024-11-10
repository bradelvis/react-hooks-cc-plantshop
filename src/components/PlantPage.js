import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch plants from the backend API on component mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => {
        if (!response.ok) {
          // More detailed error if the response isn't okay
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setPlants(data))
      .catch((error) => {
        console.error("Error loading plants:", error);
        // Optionally show a user-friendly error message in the UI
        alert("Failed to load plants. Please try again later.");
      });
  }, []);

  // Add a new plant
  const addPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  // Mark a plant as sold out
  const markAsSoldOut = (id) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, soldOut: true } : plant
      )
    );
  };

  // Delete a plant
  const deletePlant = (id) => {
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));
  };

  // Filter plants by search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearchQuery={setSearchQuery} />
      <PlantList
        plants={filteredPlants}
        markAsSoldOut={markAsSoldOut}
        deletePlant={deletePlant}
      />
    </main>
  );
}

export default PlantPage;
