import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: false,
});

import Car from "./models/cars.js";

//new car
const mercedes = new Car({
  make: "Mercedes",
  model: "Mercedes-Benz",
  expensive: true,
  hybrid: false,
});

//insert into databse
await mercedes.save();

//create and add a new car
const mini = await Car.create({
  make: "BMW",
  model: "mini",
  expensive: false,
  hybrid: false,
});
console.log(mini);

// //update
mini.hybrid = true;
await mini.save();
console.log(mini);

//find a car - first car
const findCar = await Car.findOne({});
console.log(findCar);

//find document by id
const mini = await Car.findById("6390ccbe9d15d963388e5f8e").exec();
console.log(mini);

//delete one - delete first document matching query
const car = await Car.deleteOne({ make: "BMW" });
console.log(car);

//delete multiple - all that match
const car = await Car.deleteMany({ make: "BMW" });
console.log(car);

//add
const volkswagen = await Car.create({
  make: "Volkswagen",
  model: "Beetle",
  expensive: false,
  hybrid: false,
});

console.log(volkswagen);
