"use client";
import React, { FormEvent, useRef } from "react";
import Style from "../Comment_section/Comments_section.module.css";
import Comment from "../Comment/Comment";
import { post } from "../../types";
import Button from "../Button/Button";

const Comments_Sectoin = () => {
  const handlechange = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={Style.comment}>
      <div className="">
        <form className={""} onSubmit={handlechange}>
          <input
            type="text"
            placeholder=" Add a Comment"
            className={Style.input}
            name="input"
          />
        </form>
      </div>
      <div style={{margin:'1rem'}}>
        <Comment/>
      </div>
      <Button text={"Submit"} function={""} />
    </div>
  );
};

export default Comments_Sectoin;
