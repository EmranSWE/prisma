import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is running");
});

router.post("/create-user", UserController.insertIntoDB);
export const userRouter = router;
