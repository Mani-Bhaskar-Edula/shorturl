const express = require("express");
const {connectToMongoDB} = require("./connect");

const urlRoute = require("./routes/url");

const app = express();
const PORT = 8081;

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
