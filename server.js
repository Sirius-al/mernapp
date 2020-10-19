const express = require('express');
const connectToDb = require('./config/connectToDb');

const app = express();


//! databse Connection established
connectToDb()


//* INIT middleWares
app.use(express.json({ extended: false }))


app.get('/', (req, res) => {
    res.send('Server Running');
});

//@ routes defination
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});