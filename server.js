const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// Middleware
app.use(bodyParser.json());
// Endpoint to handle fruit data
app.post('/addFruit', (req, res) => {
 const { name, price } = req.body;
 console.log(`Received fruit data: Name - ${name}, Price - ${price}`);
 res.send(`Fruit data received: Name - ${name}, Price - ${price}`);
});
// Serve static files (e.g., your HTML file)
app.use(express.static('public'));
app.listen(port, () => {
 console.log(`Server running on http://localhost:${port}`);
});