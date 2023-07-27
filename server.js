const express = require('express');
const dotenv = require('dotenv').config()

const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());
app.use('/api/contacts',require('./routes/contactRoutes'))
app.listen(port,() => {
    console.log("Hello there i am in "+port);
})
