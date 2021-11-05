import mongoose from 'mongoose';

export default async function dbconnect() {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.DB_LINK, { //VScode says process.env.DB_LINK is undefined, but it works
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 10000, // Close sockets after 10 seconds of inactivity
    })
  }
}

const userSchema = new mongoose.Schema({
  //Base data
  username: String,
  password: String,
  email: String,
  id: Number,
  //Additional data
  data: {
  created: Date,
  userImage: String,
  status: String,
  bio: String,
  seen: Date,
  rank: Array //Array of numbers, corresponds to the rank of the user
  },
  //Friends
  friends: Array, //Array of user ids
  outboundFriendRequests: Array, //Array of user ids
  inboundFriendRequests: Array, //Array of user ids
  //API
  apiReqs: Number, //Total number of api requests
  imageApiReqs: Number, //Number of image requests in the last hour
});