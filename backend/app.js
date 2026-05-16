const express = require("express");

const cors = require("cors");

const candidateRoutes = require("./routes/candidateRoutes");

const matchRoutes = require("./routes/matchRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(
    "/api/candidates",
    candidateRoutes
);

app.use("/api/match", matchRoutes);

app.get("/", (req, res) => {
    res.send("API Running...");
});

module.exports = app;