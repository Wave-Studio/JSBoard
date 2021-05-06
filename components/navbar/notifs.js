import React from "react";
import Head from "next/head";
import Link from "next/link";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.isUser,
      notifs: this.props.notifs || [{ link: "/", text: "beans" }],
      open: false,
    };
  }
  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ open: !this.state.open });
          }}
          class="flex flex-row items-center w-full px-1 py-1 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:rounded-full md:w-auto md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline mr-2 md:mr-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-auto h-4 my-1 mr-3 md:mr-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
        </button>
        <div className={this.state.open ? "visible" : "invisible"}>
          <NotifBox notifs={this.state.notifs}></NotifBox>
        </div>
      </>
    );
  }
}

class NotifBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
      notifs: this.props.notifs,
      show: this.props.show,
    };
  }
  render() {
    if (this.state.show) return <></>;
    var notifs = [];
    for (var i = 0; i < this.state.notifs.length; i++) {
      notifs[i] = (
        <Notif
          url={this.state.notifs[i].link}
          text={this.state.notifs[i].text}
        ></Notif>
      );
    }
    return notifs;
  }
}

class Notif extends React.Component {
  render() {
    return (
      <>
        <Link href={this.props.url}>
          <a class="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
            {this.props.text}
          </a>
        </Link>
      </>
    );
  }
}

/*
<div
                      x-show="open"
                      x-transition:enter="transition ease-out duration-100"
                      x-transition:enter-start="transform opacity-0 scale-95"
                      x-transition:enter-end="transform opacity-100 scale-100"
                      x-transition:leave="transition ease-in duration-75"
                      x-transition:leave-start="transform opacity-100 scale-100"
                      x-transition:leave-end="transform opacity-0 scale-95"
                      className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
                    >
                      <div className="px-2 py-2 bg-gray-700 rounded shadow">
                        <a
                          className="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          href="forum.html"
                        >
                          coming soon
                        </a>
                        <a
                          className="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          href="chat.html"
                        >
                          need blocks
                        </a>
                        <a
                          className="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          href="#"
                        >
                          help with this also gonna make this very long to test
                          formatting
                        </a>
                      </div>
                    </div>
*/
