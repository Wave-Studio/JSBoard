import checkConfig from "../../../lib/checkConfig";
//const { Database } = require("quickmongo");
//const db = new Database(process.env.DB_LINK);

export default function handle(
	req: unknown,
	res: { status: (arg0: number) => { json: (arg0: unknown) => void } },
) {
	if (!checkConfig()) {
		return res.status(500).json({
			error: 500,
			description: "JSBoard is currently not configured",
			configured: false,
		});
	}
	return res.status(200).json({
		users: ["TestAccount:0", "Blocks:1", "Quick:2"],
	});
}
