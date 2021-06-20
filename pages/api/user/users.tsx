export default function (req, res) {
  res.status(404).json({
    code: 404,
  });
}

function formatDate(date: number) {
  let fullstring = "";
  const data = new Date(date);
  fullstring += data.toDateString();
  return fullstring;
}

export const users = [
  {
    username: "TestAccount",
    rank: "Admin",
    pfp: "/ProfilePicture.png",
    configured: true,
    title: "Amongus",
    description: "works",
    account: {
      email: "dan-schofenhagor@gmail.com",
      phone: null, //returning null will allow you to add a phone later
      password: "red-sus!", //wont be stored in plaintext later, this is just for testing
      twofa: false, //for some reason it won't let my type "2fa", idk why
    },
    activity: {
      seen: "10 mins ago",
      msgs: 420,
      posts: 69,
      likes: 69420,
      joined: formatDate(1622832731224),
      unconverted: 1622832731224,
    },
    followers: [
      {
        username: "Bl0x",
        id: 1,
        image: "/blox.png",
      },
      {
        username: "Lukas",
        id: 2,
        image: "/examplepfp.gif",
      },
    ],
    following: [
      {
        username: "Bl0x",
        id: 1,
        image: "/blox.png",
      },
      {
        username: "Lukas",
        id: 2,
        image: "/examplepfp.gif",
      },
    ],
  },
  {
    username: "Blocks",
    rank: "Admin",
    pfp: "/blox.png",
    configured: true,
    title: "Amongus",
    description: "works",
    account: {
      email: "blocksnmore@yahoo.com",
      phone: null, //returning null will allow you to add a phone later
      password: "red-sus!", //wont be stored in plaintext later, this is just for testing
      twofa: false, //for some reason it won't let my type "2fa", idk why
    },
    activity: {
      seen: "10 mins ago",
      msgs: 420,
      posts: 69,
      likes: 69420,
      joined: formatDate(1622832731224),
      unconverted: 1622832731224,
    },
    followers: [
      {
        username: "Bl0x",
        id: 1,
        image: "/blox.png",
      },
      {
        username: "Lukas",
        id: 2,
        image: "/examplepfp.gif",
      },
    ],
    following: [
      {
        username: "Bl0x",
        id: 1,
        image: "/blox.png",
      },
      {
        username: "Lukas",
        id: 2,
        image: "/examplepfp.gif",
      },
    ],
  },
  {
    username: "Quick",
    rank: "Admin",
    pfp: "/examplepfp.gif",
    configured: true,
    title: "Amongus",
    description: "works",
    account: {
      email: "verycool@among.us",
      phone: null, //returning null will allow you to add a phone later
      password: "red-sus!", //wont be stored in plaintext later, this is just for testing
      twofa: false, //for some reason it won't let my type "2fa", idk why
    },
    activity: {
      seen: "10 mins ago",
      msgs: 420,
      posts: 69,
      likes: 69420,
      joined: formatDate(1614756178),
      unconverted: 1614756178,
    },
    followers: [
      {
        username: "Bl0x",
        id: 1,
        image: "/blox.png",
      },
      {
        username: "Lukas",
        id: 2,
        image: "/examplepfp.gif",
      },
      {
        username: "Test Account",
        id: 0,
        image: "/ProfilePicture.png",
      },
    ],
    following: [
      {
        username: "Bl0x",
        id: 1,
        image: "/blox.png",
      },
      {
        username: "Lukas",
        id: 2,
        image: "/examplepfp.gif",
      },
    ],
  },
];
