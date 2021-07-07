import express from "express";
const app: express.Express = express();
const PORT: number = 3000;

app.get('/', (req: express.Request, res: express.Response) => res.send('Timecloud Test Server'));

app.get('/data', (req: express.Request, res: express.Response) => {
    const message: object = {success: true, message: "data you requested"}
    res.json(message)
});

app.get('/data/abcd', (req: express.Request, res: express.Response) => {
    const message: object = {success: true, message: "efgh"}
    res.json(message)
});

app.use((req: express.Request, res: express.Response) => {
    res.status(404).json({success: false, message: "bad request"})
});

app.listen(PORT, () => {
    console.log(`server is running at https://localhost:${PORT}`)
});