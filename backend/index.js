import express from "express";
import cors from "cors";
import NotesRoutes from "./routes/NotesRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(NotesRoutes);

app.listen(5000, function(){ console.log("Server Connected") });
