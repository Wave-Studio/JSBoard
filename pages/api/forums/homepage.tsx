import checkConfig from "../../../lib/checkConfig";
import { Database } from "quickmongo";
import clientPromise from '../../../lib/mongodb';
import mongoose from 'mongoose';
const { Schema } = mongoose;
let Homepage: mongoose.Model<mongoose.Document<any>>;

//const db = new Database(process.env.DB_LINK);

export default async function handle(req, res) {
  await clientPromise;
  await mongoose.connections[0].readyState;
  /*if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handle(req, res);
  }
  const options = {
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true
  };
  // Use new db connection
  await mongoose.connect(process.env.DB_LINK, options);
  return handle(req, res);*/
  if (!mongoose.models.Homepage) {
    var homepageSchema = new Schema({
      configured: Boolean,
        forums: [{
          icon: String,
          name: String,
          description: String,
          redirect: String,
          color: String, //won't work, purgecss needs to see full names
          topics: Number,
          posts: Number,
        }],
        description: String,
        // svgs and json are kinda 🤡, so I had to do what I did below to make this work
        store: Boolean, //true = enabled, false = not enabled
        storeLink: String,
        website: Boolean,
        websiteLink: String,
        custom: Boolean,
        customName: String, //custom link also gets a name
        customLink: String, 
        orgName: String
    })
    
  }
  Homepage = mongoose.model('Homepage', homepageSchema)
  const orgName = new Homepage({ configured: true });
  await orgName.save()
  
  return res.status(200).json(await Homepage.findById(orgName))


  /*
  // TODO: make the site re-connect to the db every time to cause less issues n stuff
  if (!db.connection) {
    db.on("ready", () => {
      console.log("Database connected");
    });
  } //30% chance in 100% chance this fix actually works
  var name = await db.get("homepage");
  if (name == null) {
    db.set("homepage", {
      configured: true,
      forums: [
        {
          icon: "Heroicons.SpeakerPhoneIcon",
          name: "Announcements",
          description: "see dem newz",
          redirect: "#",
          color: "blue", //won't work, purgecss needs to see full names
          topics: 10,
          posts: 10,
        },
        {
          icon: "Heroicons.SpeakerPhoneIcon",
          name: "Simp for bl0x",
          description: "Just do it lel",
          redirect: "#",
          color: "bg-green-100",
          topics: 10,
          posts: 10,
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In expedita molestias possimus culpa maxime quae numquam architecto assumenda itaque nam, enim qui repellendus facilis. Maiores, tempora? Eos dolorem impedit quo autem cupiditate ea nam? Molestiae, nisi. Facere eius mollitia, odit veniam quam cumque illum, aperiam vero error sequi praesentium accusamus blanditiis voluptates nostrum autem voluptatem esse cum nisi consectetur reprehenderit iure. Tempora perspiciatis reprehenderit qui. Minus tenetur laudantium, in nesciunt rem ipsa, aut quis facere facilis non quasi ullam, pariatur quo! Numquam sit esse explicabo voluptate sequi, corporis necessitatibus est optio dolorum molestiae, recusandae eos blanditiis doloribus placeat earum voluptatem. Iure exercitationem cupiditate voluptatum quas in officiis, accusamus repellat praesentium ab rem, eum eaque debitis quidem natus consequatur possimus dicta? Voluptates modi ipsam maiores dignissimos praesentium animi id, officiis delectus provident hic fuga aliquid dolorum possimus assumenda error porro minus consectetur quisquam exercitationem magni incidunt quas vitae? Sed, quos culpa.",
      // svgs and json are kinda 🤡, so I had to do what I did below to make this work
      store: true, //true = enabled, false = not enabled
      storeLink: "https://example.com", //uses camelCase cause why not
      website: true,
      websiteLink: "#",
      custom: true,
      customName: "Among", //custom link also gets a name
      customLink: "https://example.com",
      orgName: "Insert indelible name here",
    });
  }

  /*if (!checkConfig())
		return res.status(500).json({
			error: 500,
			description: 'JSBoard is currently not configured',
			configured: false,
		});
  //temp disabled for testing ^^^

  return res.status(200).json(await db.get("homepage"));*/

}

