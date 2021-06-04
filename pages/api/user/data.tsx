import checkConfig from "../../../lib/checkConfig";


export default function handle(req, res) {
  if (!checkConfig())
    return res.status(500).json({
      error: 500,
      description: "JSBoard is currently not configured",
      configured: false,
    });
  const { id } = req.query;
  if (id !== "0")
    return res.status(404).json({
      error: 404,
      configured: true,
      description: "User not found!",
    });
  return res.status(200).json({
    username: "Blocksnmore",
    rank: "Admin",
    pfp: "/examplepfp.gif",
    configured: true,
    title: "Amongus",
    description: "works",
    activity: {
      seen: "10 mins ago",
      msgs: 69,
      posts: 1000,
      likes: 31,
      joined: "2021-06-02T11:04:37", //need to convert, idk how though
    },
  });
}
