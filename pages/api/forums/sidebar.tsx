import checkConfig from "../../../lib/checkConfig";
import { FireIcon } from "@heroicons/react/outline";

export default function handle(
	req: unknown,
	res: { status: (arg0: number) => { json: (arg0: unknown) => void } }
) {
	if (!checkConfig()) {
		return res.status(500).json({
			error: 500,
			description: "JSBoard is currently not configured",
			configured: false,
		});
	}
	return res.status(200).json({
		configured: true,
		sidebar: [
			{
				icon: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
						/>
					</svg>
				),
				name: " Hot Posts",
				content: "joe bidn appov dat msg",
				startColor: "from-red-600",
				endColor: "to-yellow-600",
			},
		],
	});
}
