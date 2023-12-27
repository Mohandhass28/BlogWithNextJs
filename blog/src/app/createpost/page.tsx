"use client";
import { FormEvent } from "react";
import style from "./CreatePost.module.css";
import { connect } from "../../../lib/action/index";
import { useSession } from "next-auth/react";


function CreatePost() {
  const {data ,status} = useSession()
  const handle = (event: FormEvent<HTMLFormElement>) => {
    // event.preventDefault()
    const post = event.currentTarget.input.value
    connect(data, post)
  };
  return (
    <section>
      <div className={style.section}>
        <form onSubmit={(e) => handle(e)}>
          <input
            type="text"
            className={style.input}
            placeholder="Enter Your Comment"
            name="input"
          />
          <button type="submit" className={style.buttom}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreatePost;
