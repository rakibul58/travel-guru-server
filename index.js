const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.listen(port);

const destinations = require('./data/destinations.json');


app.get('/', (req, res) => {
    res.send('Destination API Running');
});

app.get('/destinations', (req, res) => {
    res.send(destinations);
});

app.get('/destination/:id', (req, res) => {
    const id = req.params.id;
    const destination = destinations.filter(dn=>dn.id==id);
    res.send(destination);
});



