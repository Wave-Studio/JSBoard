import { Server } from "socket.io";
import mongoose from "mongoose";

export const Module = (io: Server) => {
	io.on("connection", (socket) => {
		socket.on("userInfo", (id) => {
			if (users.filter((u) => u.id.toString() === id).length < 1) {
				socket.emit("userInfo", {
					unknown: true,
				});
			} else {
				const user = users.filter((u) => u.id.toString() === id)[0];
				interface SocketUser extends UserAccount {
					unknown: boolean;
				}
				// @ts-ignore prevent borky
				const loginFree: SocketUser = { ...user, unknown: false };
				// @ts-ignore prevent broky
				delete loginFree.account;
				socket.emit("userInfo", loginFree);
			}
		});
	});
};

function formatDate(date: number) {
	let fullstring = "";
	const data = new Date(date);
	fullstring += data.toDateString();
	return fullstring;
}

export interface UserAccount {
	email: string;
	password: string;
	phone?: string;
	twofa: boolean;
}

export interface User {
	account: {
		username: string;
		id: number;
		auth: UserAccount;
		twoFactorAuth?: boolean;
		phone?: string;
	};
	//Additional data
	titles: {
		userImage: string;
		status: string;
		bio: string;
	};
	activity: {
		joined: Date;
		rank: number[]; // Array of numbers, corresponds to the rank of the user
		level: number;
		seen: Date;
	};
	// Friends
	friends: {
		friendList: number[];
		friendRequests: number[];
		friendRequestsSent: number[];
	};
	// API
	apiReqs: number; // Total number of api requests
	imageApiReqs: number; // Number of image requests in the last hour
}

export const users = [
	{
		id: 0,
		username: "TestAccount",
		rank: ["Admin"],
		pfp: "/ProfilePicture.png",
		configured: true,
		title: "Amongus",
		description: "works",
		account: {
			email: "dan-schofenhagor@gmail.com",
			phone: null, // returning null will allow you to add a phone later
			password: "red-sus!", // wont be stored in plaintext later, this is just for testing
			twofa: false, // for some reason it won't let my type "2fa", idk why
			// nevermind, I'm dumb, see a comment I made elsewhere
			// (not sure where I made it though so have fun)
		},
		activity: {
			seen: "10 mins ago",
			msgs: 420,
			posts: 69,
			likes: 69420,
			joined: formatDate(1622832731224),
			unconverted: 1622832731224,
		},
		followers: [
			{
				username: "Bl0x",
				id: 1,
				image: "/blox.png",
			},
			{
				username: "Lukas",
				id: 2,
				image: "/examplepfp.gif",
			},
		],
		following: [
			{
				username: "Bl0x",
				id: 1,
				image: "/blox.png",
			},
			{
				username: "Lukas",
				id: 2,
				image: "/examplepfp.gif",
			},
		],
	},
	{
		id: 1,
		username: "Blocks",
		rank: ["Admin"],
		pfp: "/blox.png",
		configured: true,
		title: "Amongus",
		description: "works",
		account: {
			email: "blocksnmore@aol.com",
			phone: null, // returning null will allow you to add a phone later
			password: "red-sus!", // wont be stored in plaintext later, this is just for testing
			twofa: false, // for some reason it won't let my type "2fa", idk why
		},
		activity: {
			seen: "10 mins ago",
			msgs: 420,
			posts: 69,
			likes: 69420,
			joined: formatDate(1622832731224),
			unconverted: 1622832731224,
		},
		followers: [
			{
				username: "Test Account",
				id: 0,
				image: "/ProfilePicture.png",
			},
			{
				username: "Lukas",
				id: 2,
				image: "/examplepfp.gif",
			},
		],
		following: [
			{
				username: "Test Account",
				id: 0,
				image: "/ProfilePicture.png",
			},
			{
				username: "Lukas",
				id: 2,
				image: "/examplepfp.gif",
			},
		],
	},
	{
		id: 2,
		username: "Quick",
		rank: ["Admin", "EpicDev"],
		pfp: "/examplepfp.gif",
		configured: true,
		title: "Amongus",
		description: "works",
		account: {
			email: "verycool@among.us",
			phone: null, // returning null will allow you to add a phone later
			password: "red-sus!", // wont be stored in plaintext later, this is just for testing
			twofa: false, // for some reason it won't let my type "2fa", idk why
		},
		activity: {
			seen: "10 mins ago",
			msgs: 420,
			posts: 69,
			likes: 69420,
			joined: formatDate(1614756178),
			unconverted: 1614756178,
		},
		followers: [
			{
				username: "Test Account",
				id: 0,
				image: "/ProfilePicture.png",
			},
			{
				username: "Bl0x",
				id: 1,
				image: "/blox.png",
			},
		],
		following: [
			{
				username: "Test Account",
				id: 0,
				image: "/ProfilePicture.png",
			},
			{
				username: "Bl0x",
				id: 1,
				image: "/blox.png",
			},
		],
	},
];
