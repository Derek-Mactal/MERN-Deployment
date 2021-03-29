const mongoose = require('mongoose');

module.exports = (dbName) => {
    mongoose.connect(`mongodb://localhost/${dbName}`, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log(`established a connection to the ${dbName}`))
    .catch(err => console.log(`Something went wrong when connecting to the ${dbName}`, err));
}