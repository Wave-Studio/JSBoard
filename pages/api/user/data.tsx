import checkConfig from "../../../lib/checkConfig";
import { users } from "./users";

export default function handle(req: any, res: any) {
  const date = 1622832731224;
  if (!checkConfig())
    return res.status(500).json({
      error: 500,
      description: "JSBoard is currently not configured",
      configured: false,
    });
  const { id } = req.query;
  if (![0, 1, 2].includes(parseInt(id))) {
    return res.status(200).json(users);
  }
  return res.status(200).json(users[parseInt(id)]);
}
