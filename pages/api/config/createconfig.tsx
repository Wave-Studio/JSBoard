//we should probably remove this as its not being used anymore

import { writeFileSync } from "fs";
import checkConfig from "../../../lib/checkConfig";

export default function (req: any, res: any) {
  if (true)
    return res.status(404).json({
      error: 404,
      description: "JSBoard is already configured!",
      configured: true,
    });
  else {
    if (req.method === "POST") {
      let { type, name, description, links, db, theme } = req.query;
      writeFileSync(
        ".jsboard/config.json",
        JSON.stringify({
          name,
          description,
          type,
          links,
          db,
          theme,
        })
      );
      res.status(200).json({
        configured: true,
        description: "JSBoard has been configured!",
      });
    } else {
      res.status(400).json({
        error: 400,
        configured: false,
        description: "Invalid method called!",
      });
    }
  }
}
