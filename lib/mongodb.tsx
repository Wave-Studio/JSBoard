import mongoose from 'mongoose';

const uri = process.env.DB_LINK
const options = {
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  useUnifiedTopology: true,
  useNewUrlParser: true
};


let clientPromise: Promise<typeof mongoose>;

if (!process.env.DB_LINK) {
  throw new Error('Please add your Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!mongoose.connections[0].readyState) {
    clientPromise = mongoose.connect(process.env.DB_LINK, options)
  }
  clientPromise = global._mongoClientPromise
} else if (!mongoose.connections[0].readyState) {
  // In production mode, it's best to not use a global variable.
  clientPromise = mongoose.connect(process.env.DB_LINK, options)
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
