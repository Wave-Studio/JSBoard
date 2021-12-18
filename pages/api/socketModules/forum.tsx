import connect from "../../../lib/db";
import { Server } from "socket.io";
import {
	NewThreadTypings,
	OutputThreadTypings,
} from "../../../lib/typings/forum";
import mongoose from "mongoose";
import { UserSchema } from "./user";
import { forumSchema } from "./home";

export const Module = (io: Server) => {
	io.on("connection", (socket) => {
		socket.on("forum", (id) => {
			socket.emit("forum", {
				foundForum: true,
				name: "Example forum",
				description: "Beans",
				tags: ["The", "Best", "Forum"],
				page: 1,
				search: null,
				posts: [
					{
						title: "Hi my name is bob and I want to be welcomed into pokemon",
						content:
							"I was wondeirng how linus makes so many vides and why they are all sooo cool :flushed:",
						author: "Blox",
						authorID: 1,
						votes: 69,
						authorPFPFormat: ".jpg", //jpg or gif
						postDate: "2020-01-01",
						updatedDate: "2020-01-01",
						//content: "This is an example post.", We only care about featching surface level details here
						locked: true,
						pinned: true,
						views: 0,
						tags: ["The", "Best", "post"],
						replies: 400,
						id: 1,
					},
				],
			});
		});
		socket.on("newThread", async (data: NewThreadTypings) => {
			socket.emit("newThread", await newThread(data));
		});
	});
};

async function newThread(data: NewThreadTypings): Promise<OutputThreadTypings> {
	await connect();
	if (!data.token) return { success: false, message: "User not logged in!" };

	const User = mongoose.models.user || mongoose.model("user", UserSchema);
	const user = await User.findOne({ "activity.token": data.token });
	if (!user)
		return { success: false, message: "Couldn't validate user credentials!" };

	const Forum = mongoose.models.forum || mongoose.model("forum", forumSchema);
	const forum = await Forum.findOne({ id: data.forumID });
	if (!forum) return { success: false, message: "Couldn't find forum!" };

	const Thread =
		mongoose.models[forum.name] || mongoose.model(forum.name, threadSchema);
	const pageData = new Thread({
		title: data.title,
		content: data.content,
		authorID: user.id,
		votes: [],
		postDate: { type: Date, default: Date.now },
		updatedDate: { type: Date, default: Date.now },
		locked: data.locked,
		pinned: data.pinned,
		views: 1,
		tags: [],
		repliesNumber: 0,
		id: (await Thread.find().count()) + 1,
		replies: [],
	});
	return { success: true };
}

const threadSchema = new mongoose.Schema({
	title: String,
	content: String,
	authorID: Number,
	votes: [Number], //array of user ID's
	postDate: { type: Date, default: Date.now },
	updatedDate: { type: Date, default: Date.now },
	locked: Boolean,
	pinned: Boolean,
	views: Number,
	tags: [String],
	repliesNumber: Number,
	id: Number,
	replies: [
		{
			title: String,
			content: String,
			authorID: Number,
			votes: Number,
			postDate: Date,
			updatedDate: Date,
			id: Number,
		},
	],
});
