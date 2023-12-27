import React from "react";
import Post from "../Post/Post";
import style from "./NewPost.module.css";
import { post } from "../../types";
import { POST } from "@/app/api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";
import { Posts } from "../../modle/user.modle";

type value = {
  data: [
    {
      _id: string;
      name: string;
      email: string;
      date: Date;
      image: string;
      like: number;
      posts: string;
    }
  ];
};

const NewPost = (data: value) => {
  return (
    <div className={style.test}>
      {data.data.map((e, i) => (
        <Post
          key={e._id}
          _id={e._id}
          name={e.name}
          email={e.email}
          date={e.date}
          image={e.image}
          like={e.like}
          posts={e.posts}
        />
      ))}
    </div>
  );
};

export default NewPost;
