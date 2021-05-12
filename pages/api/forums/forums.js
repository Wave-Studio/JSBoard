import checkConfig from "../../../lib/checkConfig";

export default function handle(req, res) {
  if (!checkConfig())
    return res.status(500).json({
      error: 500,
      description: "JSBoard is currently not configured",
      configured: false,
    });
  return res.status(200).json({
    configured: true,
    forums: [
      {
        icon: "Heroicons.SpeakerPhoneIcon",
        name: "Announcements",
        description: "see dem newz",
        redirect: "#",
        color: "blue", //won't work, purgecss needs to see full names
        topics: 10,
        posts: 10,
      },
      {
        icon: "Heroicons.SpeakerPhoneIcon",
        name: "Simp for bl0x",
        description: "Just do it lel",
        redirect: "#",
        color: "bg-green-100",
        topics: 10,
        posts: 10,
      },
    ],
  });
}
