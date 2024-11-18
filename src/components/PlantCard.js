import React, { useState } from "react";

function PlantCard({ plant }) {
  const [soldOut, setSoldOut] = useState(plant.soldOut || false);
  const [error, setError] = useState(null);  // For error handling
  const [isLoading, setIsLoading] = useState(false);  // For loading state

  // Toggle the sold-out status
  const toggleSoldOut = async () => {
    const updatedSoldOut = !soldOut;

    // Optimistically update the UI
    setSoldOut((prevState) => !prevState);  // Use previous state to toggle
    setIsLoading(true); // Start loading

    try {
      // Send a PATCH request to update the sold-out status on the server
      const response = await fetch(`https://react-hooks-cc-plantshop-1-9cir.onrender.com/plants/${plant.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ soldOut: updatedSoldOut }),
      });

      if (!response.ok) {
        throw new Error("Failed to update the plant status");
      }

      // Optionally, handle the response data (if any)
      // const data = await response.json(); 
    } catch (error) {
      // Handle the error, reset the soldOut state if the request fails
      setError(error.message);
      setSoldOut(soldOut);  // Revert to the previous state
    } finally {
      setIsLoading(false); // End loading state
    }
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button
        className={soldOut ? "sold-out" : "in-stock"}
        onClick={toggleSoldOut}
        disabled={isLoading} // Disable button while loading
      >
        {isLoading ? (
          <span>Updating...</span> // You can replace this with a spinner if preferred
        ) : (
          soldOut ? "Sold Out" : "In Stock"
        )}
      </button>
      {error && (
        <div style={{ color: "red", marginTop: "10px", fontWeight: "bold" }}>
          <p>Oops! Something went wrong. Please try again later.</p>
          <button onClick={toggleSoldOut}>Retry</button>
        </div>
      )}
    </li>
  );
}

export default PlantCard;
