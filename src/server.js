import express from "express";
import { peopleRouter } from "./routes/people.routes.js";

const app = express()
const port = 4000

// permite nosso js entender json
// transforma um json em objeto
app.use(express.json());

// dando acesso as nossas rotas
app.use(peopleRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})