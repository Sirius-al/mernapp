
const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');


const connectToDb = async () => {
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

module.exports = connectToDb;