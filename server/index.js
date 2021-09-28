const express = require('express');
const app = express();
const cors = require('cors');


const { getHouses, createHouse, updateHouse, deleteHouse } = require('./controller');

app.use(cors());
app.use(express.json());

app.get('/api/houses', getHouses);
app.delete('/api/houses/:id', deleteHouse);
app.post('/api/houses', createHouse);
app.put('/api/houses/:id', updateHouse);


app.listen(4004, () => console.log('Server Running on 4004'));