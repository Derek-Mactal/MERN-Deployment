const express = require('express'); 
const cors = require('cors') 
const app = express();
const port = 8000;
const dbName = "petshelterDB"

require('./server/config/mongoose.config')(dbName);
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/pet.routes')(app); 
app.listen(port, () => {
    console.log(`Listening on ${port}`)
});