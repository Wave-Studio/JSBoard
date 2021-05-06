import checkConfig from "../../../lib/checkConfig";

export default function handle(req, res) {
  if (!checkConfig())
    return res.status(500).json({
      error: 500,
      description: "JSBoard is currently not configured",
    });
  return res.status(200).json({
    configured: true,
    forums: [
      {
        icon: "SpeakerphoneIcon",
        name: "Announcements",
        description: "see dem newz",
        redirect: "#",
        color: "blue",
        topics: 10,
        posts: 10,
      },
      {
        icon: "SpeakerphoneIcon",
        name: "Simp for bl0x",
        description: "Just do it lel",
        redirect: "#",
        color: "green",
        topics: 10,
        posts: 10,
      },
    ],
  });
}
