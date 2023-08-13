import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is running");
});

router.post("/create-user", UserController.insertIntoDB);
router.post("/profile", UserController.insertOrUpdateProfile);
router.post("/getUser", UserController.getUsers);
router.post("/getUser/:id", UserController.getSingleUser);
export const userRouter = router;
