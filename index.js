// This file is primarily for GitHub Pages to recognize the project as having JavaScript,
// but can be extended if you need any server-side functionality in the future.

console.log('PhoneHub website loaded successfully!');

// If you decide to expand to use a simple server like Express in the future,
// you could use code similar to this:

/*
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '/')));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
*/ 
 