require("dotenv").config(); // load .env variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const { log } = require("mercedlogger"); // import mercedlogger's log function
const cors = require("cors"); // import cors
const { isLoggedIn } = require("./controllers/middleware");
AgentRouter = require(".controllers/Agent");

const { PORT = 3000 } = process.env;

const app = express();

// GLOBAL MIDDLEWARE
app.use(cors()); // add cors headers
app.use(morgan("tiny")); // log the request for debugging
app.use(express.json());

// ROUTES AND ROUTES
app.get("/", isLoggedIn, (req, res) => {
  res.send("This is the home");
});

app.use("/agent", AgentRouter);

// APP LISTENER
app.listen(PORT, () => log.green("SERVER STATUS", `Listening on port ${PORT}`));
