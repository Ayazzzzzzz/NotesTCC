import express from "express";
import cors from "cors";
import NotesRoutes from "./routes/NotesRoutes.js";


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(NotesRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log("Server berjalan di port 5000");
});