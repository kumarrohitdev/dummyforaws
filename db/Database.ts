import mongoose from "mongoose";
export const ConnectfunDb = () => {
  mongoose
    .connect("mongodb://localhost:27017/AwsConnected")
    .then((e) => {
      console.log(`Database connected ${e.connection.host}`);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
