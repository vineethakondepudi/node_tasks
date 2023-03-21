const express = require('express');
const app = express();

// Example data
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
  { id: 8, name: 'Item 8' },
  { id: 9, name: 'Item 9' },
  { id: 10, name: 'Item 10' },
];

// Endpoint for retrieving items
app.get('/items', (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default page is 1
  const limit = parseInt(req.query.limit) || 5; // Default limit is 5

  // Calculate offset based on page and limit
  const offset = (page - 1) * limit;

  // Get a subset of items based on offset and limit
  const subset = items.slice(offset, offset + limit);

  // Send the subset of items as a response
  res.json(subset);
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});





