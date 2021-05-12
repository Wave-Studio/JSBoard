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
    username: "Admin",
    pfp: "/ProfilePicture.png",
    nickname: "Blocks",
    configured: true,
  });
}
