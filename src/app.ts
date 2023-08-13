import express, { Application } from "express";
import cors from "cors";
import { userRouter } from "./modules/user/user.route";
import { categoryRoutes } from "./modules/category/category.route";
import { postRoutes } from "./modules/posts/posts.route";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/posts", postRoutes);
export default app;
