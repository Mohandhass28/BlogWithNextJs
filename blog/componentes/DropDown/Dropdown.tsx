'use client'
import React, { useState } from 'react'
import Style from "./DropDown.module.css"
import { signOut, useSession } from "next-auth/react";

const Dropdown = () => {
    const {data, status} = useSession()
  return (
    <div className={Style.drop}>
        <div className={Style.dropdown}>
            Profile
        </div>
        <div className={Style.dropdown} onClick={()=> signOut()}>
            Logout
        </div>
    </div>
  )
}

export default Dropdown