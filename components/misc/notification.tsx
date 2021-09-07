import React, { useState } from "react";
import Link from "next/link";

export default function Notification(props) {
  return (
    <>
      <div
        className={
          "flex rounded-md py-2 px-4 z-30 absolute bottom-[20px] right-[30px] text-center text-white font-semibold shadow-xl select-none " +
          props.color
        }
      >
        {props.msg}
        {props.children}
      </div>
    </>
  );
}
