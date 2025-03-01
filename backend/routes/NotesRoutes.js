import express from "express";
import {
  createNotes,
  deleteNotes,
  getNotes,
  updateNotes,
} from "../controller/NotesController.js";

const router = express.Router();

router.get("/Notes", getNotes);
router.post("/add-Notes", createNotes);
router.put("/edit-Notes/:id", updateNotes);
router.delete("/delete-Notes/:id", deleteNotes);

export default router;