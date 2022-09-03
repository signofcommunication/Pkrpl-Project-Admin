import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price"],
    },
    categories: {
      type: String,
      required: [true, "Please provide a categories"],
    },
    images: [String],
  },
  { timestamps: true }
);

const Store = mongoose.model("StoreSchema", StoreSchema);

export default Store;
