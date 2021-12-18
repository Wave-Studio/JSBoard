import connect from "../../../lib/db";
import { Server } from "socket.io";
import { newThreadTypings } from "../../../lib/typings/forum";
import mongoose from "mongoose";

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
		socket.on("newThread", (data: newThreadTypings) => {
			socket.emit("newThread", newThread(data));
		});
	});
};

async function newThread(data: newThreadTypings) {
	await connect();

	//const Thread =
	//mongoose.models[""] || mongoose.model("", threadSchema);
}

const threadSchema = new mongoose.Schema({
	title: String,
	content: String,
});
