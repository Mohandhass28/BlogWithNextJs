"use server";
import { Posts } from "../../modle/user.modle";
import { connectToDB } from "../mongoose";
import { Session } from "next-auth";

export const connect = async (data: Session | null, postsword: string) => {
  try {
    await connectToDB();
    let NewPost = {
      name: data?.user?.name,
      email: data?.user?.email,
      image: data?.user?.image,
      like: 0,
      posts: postsword,
    };
      const posted = await Posts.create(NewPost);
  } catch (error) {
    console.log(error);
  }
};

export const GetAllPost = async () => {
  try {
    connectToDB();
    const po = await Posts.find();
    return po;
  } catch (error) {
    return error;
  }
};
