"use client";
import React, { FormEvent } from "react";
import style from "./Button.module.css";
import { buttonType } from "../../types";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import Link from "next/link";

const Button = (text: buttonType) => {
  return (
    <div className={style.button_warp}>
      <button type="submit" className={style.button}>
        {text.text}
      </button>
    </div>
  );
};

export default Button;
