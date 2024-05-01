const express = require("express");
 
const app = express();
 
app.use("/", express.static("dist", {extensions: ['html', 'htm'],}));
 
app.listen(3000);
