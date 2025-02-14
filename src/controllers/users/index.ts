import express from "express";
import { getAllUsers } from "../../db";

export const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getAllUsers();
    if (!users) {
      return res.status(402).json({ message: "No users found" });
    }

    return res
      .status(200)
      .json({ message: "users fetched successfully the users are", data: users });
  } catch (error) {
    console.log("error occurred while fetching users :", error);
    return res
      .status(400)
      .json({ message: "error occurred while fetching the users", error });
  }
};
