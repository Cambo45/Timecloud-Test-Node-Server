import express from "express";
const app = express();
const PORT = 3000;

app.get('/', (req,res) => res.send('Timecloud Test Server'));

app.get('/data', (req,res) => {
    const message : object = {success: true, message: "data you requested"}
    res.json(message)
});

app.get('/abcd', (req,res) => {
    const message : object = {success: true, message: "efgh"}
    res.json(message)
});

app.use(function (req, res) {
    res.status(404).json({success: false, message: "bad request"})
  })

app.listen(PORT, () => {
    console.log(`server is running at https://localhost:${PORT}`)
});