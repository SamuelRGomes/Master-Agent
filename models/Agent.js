const { Schema, model } = require("../db/connection"); // import Schema & model

// Agent Schema
const AgentSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isMasterAgent: { type: Boolean, required: true },
});

// Agent model
const Agent = model("Agent", AgentSchema);

module.exports = Agent;
