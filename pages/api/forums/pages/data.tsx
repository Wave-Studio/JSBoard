import checkConfig from "../../../../lib/checkConfig";
import { forums } from "./forums";

export default function handle(req, res) {
  const date = 1622832731224;
  if (!checkConfig())
    return res.status(500).json({
      error: 500,
      description: "JSBoard is currently not configured",
      configured: false,
    });
  const { id } = req.query;
  if (![0, 1, 2].includes(parseInt(id)))
    return res.status(404).json({
      error: 404,
      configured: true,
      description: "User not found!",
    }); 
  return res.status(200).json(
    forums[parseInt(id)]
  );
}
