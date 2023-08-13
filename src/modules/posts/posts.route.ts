import express from "express";
import { postController } from "./posts.controller";
const router = express.Router();

router.post("/create-post", postController.insertIntoDB);
router.get("/", postController.getAllPosts);

export const postRoutes = router;
