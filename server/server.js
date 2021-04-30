const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { readdirSync } = require('fs');
require('dotenv').config();

// App Create:
const app = express();

// Database:
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})
.then(() => console.log("DB Connected"))
.catch(error => console.log("DB Connection Error", error));

// Middlewares:
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: '2mb'}));
app.use(cors());

// Routes Middleware
readdirSync('./routes').map((r) => app.use("/api", require('./routes/' + r)));

// Port:
const port = process.env.port || 8000;
app.listen(port, () => console.log("Server is running on port", port));