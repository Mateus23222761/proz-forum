import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))