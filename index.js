const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Im okay");
})

app.get("/:id", (req, res) => {
    const id = req.params.id;
    res.send(`${id} is sent by ${process.pid}`);
})

app.listen(3000, () => {
    console.log("Node app running on 3000");
})