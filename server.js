const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const AppError = require('./utils/AppError');
const globalErrorHandler = require('./Controller/ErrorController');


//! Uncaught Exception ERROR
process.on('uncaughtException', err => {
    console.log(`ERROR::: ${err}`)
    console.log('ERROR_Stack:::', err.stack)
    console.log(`Uncaught Exception, Shutting Down the Server... 😟😟😟😟😟`);
    process.exit(1)
})



//! Initializing special configs
const app = express();

dotenv.config({
    path: './config.env'
})



//! database Connection establishing

const db = process.env.MONGOURI

const connecttoDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Database connected SuccessFully')
    } catch (err) {
      console.log(`Error Connection to database : ${err}`)

      process.exit(1)
    }
}
connecttoDB()
//! database Connection established


//! INIT middleWares
app.use(express.json({ extended: false }))


app.get('/', (req, res) => {
    res.send('Server Running');
});

//@ routes definations
app.use('/api/users', require('./routes/api/usersRoutes'));
app.use('/api/profile', require('./routes/api/profileRoutes'));
app.use('/api/posts', require('./routes/api/postsRoutes'));
app.use('/api/auth', require('./routes/api/authRoutes'));

//! to catch unexpected routes
app.all('*', (req, res, next) => {
    next(new AppError(`Cannot find the Route => ${req.originalUrl} <= on the Server `))
});
app.use(globalErrorHandler)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});

//! Unhandled Rejection ERROR
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err}`)
    console.log('ERROR_Stack:::', err.stack)
    console.log(`Unhandled Rejection, Shutting Down the Server... 😟😟😟😟😟`);
    server.close(() => {
        process.exit(1)
    })
})