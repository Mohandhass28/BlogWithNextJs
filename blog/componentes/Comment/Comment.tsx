"use client";
import React from "react";
import { comments, post } from "../../types/index";
import { useSession } from "next-auth/react";

const Comment = () => {
  return (
    <div className="">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, facere
        enim? Nisi labore, eaque hic excepturi voluptatibus voluptatum aliquid
        architecto eius blanditiis commodi nostrum soluta, id eligendi facere
        quas officiis.
      </p>
    </div>
  );
};

const GetUserData = () => {
  const { data, status } = useSession();
  const UserData = {
    name: data?.user?.name,
    email: data?.user?.email,
    image: data?.user?.image,
    like: 0,
    post: [],
  };
  return UserData;
};

export default Comment;
