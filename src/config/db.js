import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connected succesfully`);
    
  } catch (error) {
    console.log(`database connection failed`);
    process.exit(1);
  }
};

export default connectDb
