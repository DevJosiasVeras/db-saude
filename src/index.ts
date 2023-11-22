import express from "express";
import { router } from "./routes";
import { prismaClient } from "./database/prismaClient";

const app = express();

app.use(express.json());
app.use(router)

app.get('/', (req, res) => {
  res.send('Api is running')
})

app.get('/planos', (req, res) => {
  prismaClient.plano.findMany()
    .then((result) => res.json(result))
    .catch((error) => res.json(error))
})

app.get('/medicos', (req, res) => {
  prismaClient.medico.findMany()
    .then((result) => res.json(result))
    .catch((error) => res.json(error))
})

app.listen(4003, () => console.log('Server is running in http://localhost:4003'))