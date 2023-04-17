import { createError } from "../error.js";
import Community from "../models/Community.js";
import User from "../models/Users.js";

export const addCommunity = async (req, res, next) => {
  const newCommunity = new Community({ ...req.body, userId: req.user.id });
  try {
    const savedCommunity = await newCommunity.save();
    res.status(200).send(savedCommunity);
  } catch (err) {
    next(err);
  }
};

export const getCommunity = async (req, res, next) => {
  try {
    const community = await Community.find();
    res.status(200).json(community);
  } catch (err) {
    next(err);
  }
};