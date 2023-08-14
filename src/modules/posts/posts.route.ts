import express from "express";
import { postController } from "./posts.controller";
const router = express.Router();

router.post("/create-post", postController.insertIntoDB);
router.patch("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);
router.get("/", postController.getAllPosts);

export const postRoutes = router;
