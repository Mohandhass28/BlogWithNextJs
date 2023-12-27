"use client";
import React, { useState } from "react";
import Navcss from "./Navbar.module.css";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import Dropdown from "../DropDown/Dropdown";
import { CiSquarePlus } from "react-icons/ci";
const Navbar = () => {
  const { data, status } = useSession();
  const [Isvisiable, setIsvisiable] = useState(false);
  return (
    <>
      <div className={Navcss.navbar}>
        <div className={Navcss.navinner}>
          <a href="/">Home</a>
          <h2>Blgo</h2>
          {status !== "authenticated" ? (
            <div className="" onClick={() => signIn("google")}>
              <Link href="/">Login</Link>
            </div>
          ) : (
            <>
              <div>
                <h3>
                  <FaRegUser
                    onClick={() => setIsvisiable(!Isvisiable)}
                    className={Navcss.icon}
                  />
                  {Isvisiable && <Dropdown />}
                </h3>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
