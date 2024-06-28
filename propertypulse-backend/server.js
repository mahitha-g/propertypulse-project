const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const Contact = require('./models/Contact') // Make sure the path is correct

const app = express();
const port = 3001; // Use port 3001 for your server

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/PropertyPulse', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Successfully connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Verify MongoDB connection
const db = mongoose.connection;
db.on('error', (error) => {
  console.error('Connection error:', error);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// POST route for user signup
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body; // Properly receive the request body

  try {
    // Check if email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Email already exists');
    }

    // Create a new user instance
    const newUser = new User({ name, email, password });

    // Save the new user to MongoDB
    await newUser.save();
    res.status(201).send('Success');
  } catch (err) {
    console.error('Error during signup:', err.message); // Log the error for debugging
    res.status(500).send('Internal Server Error'); // Send a generic error to the client
  }
});

// POST route for contact form
app.post('/contact', async (req, res) => {
  const { name, email, query } = req.body; // Properly receive the request body

  try {
    // Create a new contact instance
    const newContact = new Contact({ name, email, query });

    // Save the new contact to MongoDB
    await newContact.save();
    res.status(201).send('Form submitted successfully');
  } catch (err) {
    console.error('Error during form submission:', err.message); // Log the error for debugging
    res.status(500).send('Internal Server Error'); // Send a generic error to the client
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

