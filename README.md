Plantsy
Overview
Plantsy is a simple plant store app that lets users view a catalog of plants, add new plants, mark them as sold out, and search through the list. Additionally, users can update prices and delete plants for more control over the catalog.
Setup Instructions
To set up and run this project on your local machine:

Clone the Repository:

bash
Copy code
git clone git@github.com:bradelvis/react-hooks-cc-plantshop.git
Install Dependencies:

In the project root, install dependencies for the frontend:
bash
Copy code
npm install
Start the JSON Server:

Run the backend server on port 5000:
bash
Copy code
npm run server
Verify the server is running by visiting http://localhost:5000/plants.
Start the React App:

In a new terminal, start the frontend:
bash
Copy code
npm start
The React app should open automatically at http://localhost:3000.

Usage
View Plants: Upon loading, the app fetches and displays a list of plants.
Add a New Plant: Use the form to add a plant by entering a name, image URL, and price.
Mark as Sold Out: Click on a plant to toggle its sold-out status.
Search Plants: Use the search bar to filter plants by name.

Core Features
Add Plant: Users can add a new plant entry to the database, which appears on the app immediately.
Sold Out Toggle: Plants can be marked as "sold out."
Search Functionality: Filter plants by name as you type

Advanced Features
Update Price: Users can update the price of a plant, and the change persists upon refresh.
Delete Plant: Users can delete a plant, which removes it from the database and app view.

Dependencies
React: Frontend framework
JSON Server: Mock backend server for handling CRUD operations
Semantic UI CSS: Styling library for UI elements
