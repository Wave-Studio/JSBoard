import fs from "fs";
import checkConfig from "../../../lib/checkConfig";

export default function (req: any, res: any) {
  if (!checkConfig()) {
    return res.status(200).json({ configured: false });
  } else {
    return res.status(200).json({
      configured: true,
      theme: JSON.parse(fs.readFileSync("./.jsboard/config.json", "utf-8"))
        .theme,
    });
  }
}
