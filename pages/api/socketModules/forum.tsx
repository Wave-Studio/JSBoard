import connect from "../../../lib/db";
import { Server } from "socket.io";
import {
	NewThreadTypings,
	OutputForumTypings,
	OutputThreadTypings,
} from "../../../lib/typings/forum";
import mongoose from "mongoose";
import { UserSchema } from "./user";
import { forumSchema } from "./home";

export const Module = (io: Server) => {
	io.on("connection", (socket) => {
		socket.on("forum", async (data: { forumID: number; search?: string }) => {
			socket.emit("forum", await loadForum(data));
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

	const Category =
		mongoose.models[forum.name] || mongoose.model(forum.name, threadSchema);
	const pageData = new Category({
		title: data.title,
		content: data.content,
		authorID: user.id,
		votes: [],
		locked: data.locked,
		pinned: data.pinned,
		views: 1,
		tags: [],
		repliesNumber: 0,
		id: (await Category.find().count()) + 1,
		replies: [],
	});
	await pageData.save();
	return {
		success: true,
		redirect: `/thread/${forum.name
			.toLowerCase()
			.replaceAll(" ", "-")
			.replaceAll(":", "")}:${data.forumID}/${data.title
			.toLowerCase()
			.replaceAll(" ", "-")
			.replaceAll(":", "")
			.substring(0, 50)}:${pageData.id}`,
	};
}

async function loadForum(data: {
	forumID: number;
	search?: string;
	page?: number;
}): Promise<{ success: boolean; message?: string; pageData?: any }> {
	await connect();
	const Forum = mongoose.models.forum || mongoose.model("forum", forumSchema);
	const forum = await Forum.findOne({ id: data.forumID });
	if (!forum) return { success: false, message: "Couldn't find forum!" };
	const Category =
		mongoose.models[forum.name] || mongoose.model(forum.name, threadSchema);
	const User = mongoose.models.user || mongoose.model("user", UserSchema);
	const pageData = await Category.find()
		.sort({ pinned: -1, updatedDate: -1 })
		.limit(20);
	var posts: any = [];
	for (let i = 0; i < pageData.length; i++) {
		const author = await User.findOne({ id: pageData[i].authorID });
		posts.push({
			title: pageData[i].title,
			content: pageData[i].content,
			author: author.account.username,
			votes: pageData[i].votes.length,
			//seems like id is uneeded
			avatar: author.account.avatar,
			postDate: pageData[i].postDate,
			updatedDate: pageData[i].updatedDate,
			locked: pageData[i].locked,
			pinned: pageData[i].pinned,
			views: pageData[i].views,
			tags: pageData[i].tags,
			replies: pageData[i].replies.length,
			id: pageData[i].id,
		});
	}
	return {
		success: true,
		pageData: {
			foundForum: true,
			name: forum.name,
			description: forum.description,
			tags: forum.tags || [],
			page: data.page || 0, //used not for pagination, but for scroll loading
			search: data.search || null,
			posts: posts,
		},
	};
}

/*
{
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
			//also don't look 8 lines above pls
			locked: true,
			pinned: true,
			views: 0,
			tags: ["The", "Best", "post"],
			replies: 400,
			id: 1,
		},
	],
	*/

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
