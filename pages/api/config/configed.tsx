import fs from "fs";
import checkConfig from "../../../lib/checkConfig";

export default function (req: unknown, res: { status: (arg0: number) => { json: (arg0: unknown) => void } }) {
  return res.status(200).json({ configured: checkConfig() });
}
