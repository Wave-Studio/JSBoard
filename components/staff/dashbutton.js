import React from "react";
import Link from "next/link";

export default class DashButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const url =
      "/staff/" +
      (this.props.section ? this.props.section.toLowerCase() + "/" : "") +
      (this.props.url || this.props.name).toLowerCase();

    return (
      <>
        <li>
          <Link href={url}>
            <button className="sidebar-btn">
              {this.props.icon}
              {this.props.name.substring(0, 1).toUpperCase() +
                this.props.name.substring(1).toLowerCase()}
            </button>
          </Link>
        </li>
      </>
    );
  }
}
