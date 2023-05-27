import mongoose, { Connection } from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

let isconnected = 0;

export async function connectDB() {
	if (isconnected) {
		console.log(`DB is already connected`);
		return;
	}

	if (mongoose.connections.length > 0) {
		isconnected = mongoose.connections[0].readyState;
		if (isconnected === 1) {
			console.log("use previous connection");
			return;
		}

		await mongoose.disconnect();
	}

	const db = await mongoose.connect(MONGO_URI as string);
	console.log("Mongodb connected");
	isconnected = db.connections?.[0]?.readyState;
}
