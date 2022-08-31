import mongoose from "mongoose";

function connectDB(url) {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default connectDB;
