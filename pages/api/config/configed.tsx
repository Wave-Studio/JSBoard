import fs from "fs";
import checkConfig from "../../../lib/checkConfig";

export default function (req: any, res: any) {
  return res.status(200).json({ configured: checkConfig() });
}
