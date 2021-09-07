import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

export default function Linkmaker(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex w-full select-none ">
        <label>
          {props.name}
          {props.input}
        </label>
        <div className="flex flex-grow"></div>
        <span onClick={() => setOpen(!open)}>
          <ChevronRightIcon
            className={
              "w-6 h-auto hover:bg-coolGray-700 bg-opacity-70 hover:cursor-pointer rounded mt-1 " +
              (open ? "hidden" : "")
            }
          />
          <ChevronDownIcon
            className={
              "w-6 h-auto hover:bg-coolGray-700 bg-opacity-70 hover:cursor-pointer rounded mt-1 " +
              (open ? "" : "hidden")
            }
          />
        </span>
      </div>
      <span className={open ? "" : "hidden"}>{props.children}</span>
    </>
  );
}
