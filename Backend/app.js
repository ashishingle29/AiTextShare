require('dotenv').config()
const express = require('express');
const route = require('./Router/route');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
require('./db/mdb')
const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Working")
})

app.use(route);

app.listen(PORT, () => { console.log(`Server Run on ${PORT} ...`)} );

