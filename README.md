studeo
Overview
Studeo app is your study buddy. The app allows user to create flashcards and study them effectively.

Features
View All Flashcards and study them in the carousel.
CRUD Operations: Add, update, and delete flashcards with ease.

Prerequisites
Node.js (version 14+ recommended)
MongoDB (local installation or MongoDB Atlas cluster)
npm (included with Node.js)
Local Setup
# Clone the repository
git clone https://github.com/Anloms/studeo.git
cd server 

# Install dependencies
npm install

# Setup environment variables
echo "MONGODB_URI=mongodb://localhost:27017/flashcards" >> .env
echo "PORT=3000" >> .env
# Note: Replace the MONGODB_URI value if using a remote MongoDB database.

# Start the backend server
nodemon
# Access the server at http://localhost:3000 (or the custom PORT you've set)

# Setup frontend (if separate)
cd client
npm install
npm run dev
# Your default web browser should open the application automatically.

