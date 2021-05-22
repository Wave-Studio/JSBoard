import fs from "fs";

export default async function (req, res) {
  if (!fs.existsSync("./.jsboard/config.json"))
    return res.status(500).json({
      error: 500,
      description: "JSBoard is not configured yet!",
      configured: false,
    });
}
