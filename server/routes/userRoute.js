import express from "express";
import {
  getAllUser,
  createUser,
  updateUserRecord,
  deleteUserRecord,
  fetchUserWithTheId,
} from "../controller/userController.js";

const router = express.Router();

router.get("/fetchuser", getAllUser);
router.get("/:id", fetchUserWithTheId);
router.post("/createuser", createUser);
router.post("/:id", updateUserRecord);
router.delete("/:id", deleteUserRecord);

export default router;
