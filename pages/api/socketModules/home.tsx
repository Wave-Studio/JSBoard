import connect from "../../../lib/db";
import mongoose from "mongoose";
import { Server } from "socket.io";

export const Module = async (io: Server) => {
	await connect();
	io.on("connection", (socket) => {
		socket.on(
			"homepage",
			async (data?: {
				data:
					| mongoose.UpdateWithAggregationPipeline
					| mongoose.UpdateQuery<unknown>;
			}) => {
				delete mongoose.connection.models["forum"];
				const Homepage =
					mongoose.models.homepage ||
					mongoose.model("homepage", homepageSchema);
				const Forum =
					mongoose.models.forum || mongoose.model("forum", forumSchema);

				if (!data) {
					if ((await Homepage.find().count()) == 0) {
						const pageData = new Homepage(defaultHomepage);
						await pageData.save();
					}
					if ((await Forum.find().count()) == 0) {
						const pageData = new Forum(defaultForum);
						await pageData.save();
					}
					const main = await Homepage.findOne();
					const forums = await Forum.find();
					socket.emit("homepage", { main, forums });
				} else {
					//need to auth token here
					await Homepage.updateOne({}, data.data);
				}
			}
		);
		socket.on("sidebar", () => {
			socket.emit("sidebar", {
				configured: true,
				sidebar: [
					{
						name: " Hot Posts",
						content: "joe bidn appov dat msg",
						startColor: "from-red-600",
						endColor: "to-yellow-600",
					},
				],
			});
		});
	});
};

const homepageSchema = new mongoose.Schema({
	configured: Boolean,
	forums: [
		{
			icon: String,
			name: String,
			description: String,
			redirect: String,
			color: String, //won't work, purgecss needs to see full names
			topics: Number,
			posts: Number,
			id: Number,
		},
	],
	description: String,
	// svgs and json are kinda 🤡, so I had to do what I did below to make this work
	store: Boolean, //true = enabled, false = not enabled
	storeLink: String,
	website: Boolean,
	websiteLink: String,
	custom: Boolean,
	customName: String, //custom link also gets a name
	customLink: String,
	orgName: String,
});

const defaultHomepage = {
	configured: true,

	description:
		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. In expedita molestias possimus culpa maxime quae numquam architecto assumenda itaque nam, enim qui repellendus facilis. Maiores, tempora? Eos dolorem impedit quo autem cupiditate ea nam? Molestiae, nisi. Facere eius mollitia, odit veniam quam cumque illum, aperiam vero error sequi praesentium accusamus blanditiis voluptates nostrum autem voluptatem esse cum nisi consectetur reprehenderit iure. Tempora perspiciatis reprehenderit qui. Minus tenetur laudantium, in nesciunt rem ipsa, aut quis facere facilis non quasi ullam, pariatur quo! Numquam sit esse explicabo voluptate sequi, corporis necessitatibus est optio dolorum molestiae, recusandae eos blanditiis doloribus placeat earum voluptatem. Iure exercitationem cupiditate voluptatum quas in officiis, accusamus repellat praesentium ab rem, eum eaque debitis quidem natus consequatur possimus dicta? Voluptates modi ipsam maiores dignissimos praesentium animi id, officiis delectus provident hic fuga aliquid dolorum possimus assumenda error porro minus consectetur quisquam exercitationem magni incidunt quas vitae? Sed, quos culpa.",
	// svgs and json are kinda 🤡, so I had to do what I did below to make this work
	store: true, //true = enabled, false = not enabled
	storeLink: "https://example.com", //uses camelCase cause why not
	website: true,
	websiteLink: "#",
	custom: true,
	customName: "Among", //custom link also gets a name
	customLink: "https://example.com",
	orgName: "Insert indelible name here",
};

export const forumSchema = new mongoose.Schema({
	icon: String,
	name: String,
	description: String,
	redirect: String,
	tags: [String],
	color: String, //should probably be a hex code rather than a tw style like `bg-red-600`
	topics: Number,
	posts: Number,
	id: Number,
});

const defaultForum = {
	icon: "Heroicons.SpeakerPhoneIcon",
	name: "Announcements",
	description: "see dem newz",
	redirect: "announcements",
	color: "blue", //won't work, purgecss needs to see full names
	topics: 10,
	posts: 10,
	id: 1,
};
