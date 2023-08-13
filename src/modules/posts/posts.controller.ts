import { Request, Response } from "express";
import { postService } from "./posts.service";

const insertIntoDB = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const result = await postService.insertIntoDB(req.body);
    res.send({
      status: "Success",
      message: "Successfully added a post",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllPosts = async (req: Request, res: Response) => {
  const options = req.query;
  try {
    const result = await postService.getAllPosts(options);
    res.send({
      status: "Success",
      message: "Successfully added a post",
      total: result.total,
      data: result.data,
    });
  } catch (error) {
    res.send(error);
  }
};

export const postController = {
  insertIntoDB,
  getAllPosts,
};
