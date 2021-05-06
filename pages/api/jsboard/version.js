export default function versionapi(req, res) {
  res.status(200).json({
    version: require("../../../package.json").version,
  });
}
