import fs from "fs";
import checkConfig from "../../../lib/checkConfig";

/**
 *
 * @param {import("http").IncomingMessage} req
 * @param {import("http").ServerResponse} res
 */
export default function (req, res) {
    return res.status(200).json({ configured: checkConfig() });
}
