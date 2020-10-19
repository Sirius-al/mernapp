const express = require('express');
const connectToDb = require('./config/connectToDb');

const app = express();

//! databse Connection established
connectToDb()

app.get('/', (req, res) => {
    res.send('Server Running');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});