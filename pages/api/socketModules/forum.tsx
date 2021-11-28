import { Server } from "socket.io";

export const Module = async (io: Server) => {
  io.on("connection", (socket) => {
    socket.on("forum", async (id) => {
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
            sampleContent:
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
  });
};
