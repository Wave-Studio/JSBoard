import React from "react";
import Link from "next/link";

export default class DashButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <li>
          <Link
            href={
              "/staff/" +
              this.props.section +
              "/" +
              (this.props.url || this.props.name).toLowerCase()
            }
          >
            <button className="sidebar-btn">
              {this.props.icon}
              {this.props.name}
            </button>
          </Link>
        </li>
      </>
    );
  }
}
