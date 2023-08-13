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

export const postController = {
  insertIntoDB,
};
