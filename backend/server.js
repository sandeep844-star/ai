const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

let status = "STOPPED";
let direction = "UP";
let speed = 1;

// Start
app.post("/start", (req, res) => {
    status = "RUNNING";
    log("STARTED");
    res.send("Started");
});

// Stop
app.post("/stop", (req, res) => {
    status = "STOPPED";
    log("STOPPED");
    res.send("Stopped");
});

// Direction
app.post("/direction", (req, res) => {
    direction = req.body.direction;
    log("Direction: " + direction);
    res.send("Direction changed");
});

// Speed
app.post("/speed", (req, res) => {
    speed = req.body.speed;
    log("Speed: " + speed);
    res.send("Speed changed");
});

// Logging
function log(action) {
    db.query("INSERT INTO logs(action) VALUES(?)", [action]);
}

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
