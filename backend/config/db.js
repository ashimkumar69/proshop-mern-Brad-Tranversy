import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected ${connect.connection.host}`.green.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline);
    process.exit(1);
  }
};

export default connectDB;
