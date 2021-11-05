import fs from "fs";

export default function (req: unknown, res: { status: (arg0: number) => { json: (arg0: unknown) => void } }) {
  if (!fs.existsSync("./.jsboard/config.json"))
    return res.status(500).json({
      error: 500,
      description: "JSBoard is not configured yet!",
      configured: false,
    });
}
