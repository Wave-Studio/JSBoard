import React from "react";
import Link from "next/link";

export default class Notification extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {/*Mobile*/}
        <div
          className={
            "flex rounded px-4 py-2 z-30 absolute bottom-[20px] right-[30px] text-center text-white font-semibold shadow-xl " +
            this.props.color
          }
        >
          {this.props.msg}
        </div>
      </>
    );
  }
}
