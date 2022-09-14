import * as express from "express";
import * as cors from "cors";
import { connectDB } from "./db/init-db";
import { config } from "./utils/config";

const app = express();
const PORT = Number(process.env.PORT) || 8000;

class Server {
  public async loadControllers() {
    app.use(express.json({ limit: "50mb" }));
    app.use(cors({ origin: true }));

    app.get("/", (_, res) => {
      res.send("Welcome");
    });
  }

  public run() {
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  }
}

(async () => {
  try {
    const server = new Server();
    await connectDB(config.MONGO_URI);
    await server.loadControllers();
    server.run();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
