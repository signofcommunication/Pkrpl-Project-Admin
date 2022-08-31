import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema(
  {
    images: {
      type: [String],
      required: [true, "Please provide an images"],
    },
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    categories: {
      type: String,
      required: [true, "Please provide a categories"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price"],
    },
  },
  { timestamps: true }
);

const Store = mongoose.model("StoreSchema", StoreSchema);

export default Store;
