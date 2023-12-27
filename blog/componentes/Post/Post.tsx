"use client";
import React, { useState } from "react";
import Style from "./Post.module.css";
import { SlLike } from "react-icons/sl";
import { FaShare } from "react-icons/fa6";
import { FaCommentDots } from "react-icons/fa6";
import Comments_section from "../Comment_section/Comments_Sectoin";
import { IoCloseOutline } from "react-icons/io5";
import { data } from "../../types";
import { isDate } from "util/types";

type value = {
  _id: string;
  name: string;
  email: string;
  date: Date;
  image: string;
  like: number;
  posts: string;
};

const Post = (datas: value | null) => {
  const [Comment, setComment] = useState(false);
  const date = datas?.date;
  console.log(date);
  return (
    <div className={Style.home}>
      {Comment && (
        <div className={Style.comment}>
          <div className={Style.incomment}>
            <Comments_section />
          </div>
          <div
            className={Style.comment_icone}
            onClick={() => setComment(!Comment)}
          >
            <IoCloseOutline
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
            />
          </div>
        </div>
      )}
      <div className={Style.homehead}>  
        <div style={{ padding: "5px" }}>
          <div className="" style={{ padding: "2px" }}>
            Post
          </div>
          <div className="" style={{ padding: "1px" }}>
            <h4>
              By <span>{datas?.name}</span>
            </h4>
          </div>
        </div>
        <div className="">{date?.toString().slice(0, 15)}</div>
      </div>

      <div className={Style.contant}>
        <p style={{padding:'1rem 1rem', width:'100vh', overflow:'hidden'}}>
          {datas?.posts}
        </p>
        <div
          className=""
          style={{ margin: "1.6rem 1rem", paddingBottom: "0rem", marginTop:'4rem' }}
        >
          <p>{datas?.email}</p>
        </div>
        <div className={Style.icon}>
          <div className="">
            <h3>
              <SlLike className={Style.icons} />
                <span>{datas?.like}</span>
            </h3>
          </div>
          <div className="">
            <h3>
              <FaShare className={Style.icons} />
            </h3>
          </div>
          <div className="">
            <h3>
              <FaCommentDots
                className={Style.icons}
                onClick={() => setComment(!Comment)}
              />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
