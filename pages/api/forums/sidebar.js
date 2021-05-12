import checkConfig from "../../../lib/checkConfig";
import { FireIcon } from "@heroicons/react/outline";

export default function handle(req, res) {
  if (!checkConfig())
    return res.status(500).json({
      error: 500,
      description: "JSBoard is currently not configured",
      configured: false,
    });
  return res.status(200).json({
    configured: true,
    sidebar: [
      {
        icon: <FireIcon className="w-10" />,
        name: "🔥 Hot Posts",
        content: "joe bidn appov dat msg",
        startColor: "from-red-600",
        endColor: "to-yellow-600",
      },
    ],
  });
}
