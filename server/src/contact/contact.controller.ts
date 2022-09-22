import { Router } from "express";
import { ContactService } from "./contact.service";

const router = Router();
const service = new ContactService();

router.get("/", async (req, res) => {
  try {
    const data = await service.getContacts();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await service.createContact(req.body);
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});
export { router as ContactRouter };
