// A simple Express server to handle the API key securely.
const express = require('express');
const path = require('path');
const app = express();

// The port Render will use.
const PORT = process.env.PORT || 3000;

// Serve the main index.html file.
app.use(express.static(path.join(__dirname, 'public')));

// Create a secure endpoint for the app to fetch the API key.
app.get('/api/gemini-key', (req, res) => {
  // Read the key from the environment variable set in Render.
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey) {
    res.json({ apiKey: apiKey });
  } else {
    res.status(500).json({ error: 'API key is not configured on the server.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
