import express from "express";
import { postController } from "./posts.controller";
const router = express.Router();

router.post("/create-post", postController.insertIntoDB);

export const postRoutes = router;
