import mongoose from "mongoose";

const CommunitySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
  },
},
  { timestamps: true }
);

export default mongoose.model("Community", CommunitySchema);