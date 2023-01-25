const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();


const PORT  = process.env.PORT || 8080;

const postRoute = require('./routes/post');

app.use(express.json());
app.use(cors());

app.use('/api/headers',postRoute);

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})