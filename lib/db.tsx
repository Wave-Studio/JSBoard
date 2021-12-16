import mongoose from "mongoose";

export default async function dbconnect() {
	if (mongoose.connection.readyState !== 1) {
		await mongoose.connect(process.env.DB_LINK as string, {
			//VScode says process.env.DB_LINK is undefined, but it works
			serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
			socketTimeoutMS: 10000, // Close sockets after 10 seconds of inactivity
		});
	}
}
