const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;


// Hello world route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 