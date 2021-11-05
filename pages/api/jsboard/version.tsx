export default function versionapi(req: unknown, res: { status: (arg0: number) => { json: (arg0: unknown) => void } }) {
  res.status(200).json({
    version: require("../../../package.json").version,
  });
}
