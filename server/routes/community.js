import express from "express";
import { addCommunity,getCommunity } from "../Controllers/community.js";
import {verifyToken} from "../verifyToken.js"
const router = express.Router();

router.post("/", verifyToken, addCommunity);
router.get("/", getCommunity);

export default router;