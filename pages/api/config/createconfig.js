import fs from "fs";
import checkConfig from "../../../lib/checkConfig";

/**
 *
 * @param {import("http").IncomingMessage} req
 * @param {import("http").ServerResponse} res
 */
export default function (req, res) {
  if (checkConfig())
    return res
      .status(404)
      .json({ error: 404, description: "JSBoard is already configured!", configured: true, });
}
