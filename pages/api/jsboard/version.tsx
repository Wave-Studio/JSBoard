export default function versionapi(req: any, res: any) {
  res.status(200).json({
    version: require("../../../package.json").version,
  });
}
