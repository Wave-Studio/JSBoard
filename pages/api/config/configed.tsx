import fs from "fs";
import checkConfig from "../../../lib/checkConfig";

export default function (req, res) {
  return res.status(200).json({ configured: checkConfig() });
}
