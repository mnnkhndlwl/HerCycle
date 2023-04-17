import express from "express";
import { send } from "../Controllers/bot.js";

const router = express.Router();

router.post("/send", send);

export default router;