import mongoose, { Schema } from "mongoose";
const { schema, model } = mongoose;

//make a schema
const carSchema = new Schema({
  make: String,
  model: String,
  expensive: Boolean,
  hybrid: Boolean,
});

//model - pass collection and schema
const Car = model("Cars", carSchema);
export default Car;
