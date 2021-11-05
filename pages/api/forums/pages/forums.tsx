export default function (req: unknown, res: { status: (arg0: number) => { json: (arg0: unknown) => void } }) {
  res.status(404).json({
    code: 404,
  });
}

export const forums = [
  {
    something: "t",
  },
];
