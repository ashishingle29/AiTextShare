const mongoose = require('mongoose')
const db = process.env.DATABASE

mongoose.connect(db)
    .then(() => { console.log("MongoDB is Connected.....") })
    .catch((error) => { console.log(error.message) })