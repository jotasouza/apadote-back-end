const mongoose = require("mogoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/apadote");
  console.log("Conectou ao Mongoose!");
}

main().catch((error) => console.log(error));

module.exports = mongoose;
