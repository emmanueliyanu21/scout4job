const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const http = require('http');
const path = require('path');
// const cors = require('cors')


//Load Routes
const users = require("./routes/api/users");
const jobs = require("./routes/api/jobs");
const resumes = require("./routes/api/resumes");
const covers = require("./routes/api/covers");

const app = express();

// React build output folder branch
app.use(express.static(path.join(__dirname, 'client/build')));

//send all other requests to the React app
app.set('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', '/index.html'));
});

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
// app.use(cors())
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
    .connect(
        db,
        { useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);


// Routes
app.use("/api/users", users);
app.use("/api", jobs);
app.use("/api", covers);
app.use("/api", resumes)

// Set Port
const port = process.env.PORT || '8000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on port ${port}`));