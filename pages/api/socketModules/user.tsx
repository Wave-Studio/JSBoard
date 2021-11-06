import { Server } from "socket.io";
import mongoose from "mongoose";
import { getModelForClass, prop } from "@typegoose/typegoose";
import connect from "../../../lib/db";
import { hashPassword } from "../../../lib/hashpass";

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
		socket.on("userList", () => {
			socket.emit("userList", ["TestAccount:0", "Blocks:1", "Quick:2"]);
		});
	});
};

function formatDate(date: number) {
	const data = new Date(date);
	return data.toDateString();
}

export interface UserAccount {
	username: string;
	email: string;
	password: string;
	twoFactorAuth?: boolean;
	phone?: string;
	userImage: string;
}

export interface User {
	account: UserAccount;
	//Additional data
	titles: {
		status: string;
		bio: string;
	};
	activity: {
		joined: Date;
		rank: number[]; // Array of numbers, corresponds to the rank of the user
		exp: number;
		seen: Date;
	};
	// Friends
	friends: {
		friendList: number[];
		friendRequests: number[];
		friendRequestsSent: number[];
	};
	// API
	apiReqs?: number; // Total number of api requests
	imageApiReqs: number; // Number of image requests in the last hour
}

const UserSchema = new mongoose.Schema({
	account: {
		username: String,
		email: String,
		password: String,
		twoFactorAuth: Boolean,
		phone: String,
		userImage: String
	},
	titles: {
		status: String,
		bio: String
	},
	activity: {
		joined: Date,
		rank: [Number],
		exp: Number,
		seen: Date,

	},
	friends: {
		friendList: [Number],
		friendRequests: [Number],
		friendRequestsSent: [Number]
	},
	apiReqs: Number,
	imageApiReqs: Number
});

const User = mongoose.models.user || mongoose.model("user", UserSchema);

export async function registerUser(username: string, email: string, password: string) {
	const cryptedPassword = hashPassword(password);
	const d = new Date();
	const time = d.getTime();
	await connect();
	
	//delete mongoose.connection.models['user'];
	//used to debug when testing new schemas, don't leave above uncommented in production

	const account = new User({
		account: {
			username: username,
			email: email,
			password: cryptedPassword,
			twoFactorAuth: false,
			phone: undefined,
			userImage: undefined
		},
		titles: {
			status: "Say hi! I'm new!",
			bio: undefined
		},
		activity: {
			joined: time,
			rank: [1],
			exp: 0,
			seen: time,
		},
		friends: {
			friendList: [],
			friendRequests: [],
			friendRequestsSent: []
		},
		apiReqs: 0,
		imageApiReqs: 0
	})
	await account.save();

}

export async function loginUser(email: string, password: string) {
	const cryptedPassword = await hashPassword(password);
	const d = new Date();
	const time = d.getTime();

	const filter = { email: email, password: cryptedPassword };
	const update = { activity: { seen: time } };
	if (await User.findOne(filter)) {
		await User.findOneAndUpdate(filter, update);
		return true;

	} else {
		return false;
	}

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
