import * as dotenv from "dotenv";

dotenv.config();
export const config = {
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost/ububa",
};
