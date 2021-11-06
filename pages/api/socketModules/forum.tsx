import { Server } from "socket.io";

export const Module = (io: Server) => {
	io.on("connection", (socket) => {
		socket.on("forum", (id) => {
			socket.emit("forum", {
				name: "Example forum",
				description: "Beans",
				posts: [
					{
						id,
						title: "Example post",
						author: "Blox",
						content: "This is an example post.",
					},
				],
			});
		});
	});
};
