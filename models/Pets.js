const mongoose = require("../db/connection");
const { Schema } = mongoose;

const Pet = mongoose.model(
  "Pet",
  new Schema(
    {
      name: {
        //nome
        type: String,
        required: true,
      },
      species: {
        //especie
        type: String,
        required: true,
      },
      weight: {
        //peso
        type: Number,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      images: {
        type: Array,
        required: true,
      },
      age: {
        //idade
        type: Number,
        required: true,
      },
      breed: {
        //raça
        type: String,
        required: true,
      },
      size: {
        //porte
        type: String,
        required: true,
      },
      castred: {
        //castrado
        type: Boolean,
      },
      vaccinated: {
        //vacinado
        type: Boolean,
      },
      local: {
        type: String,
        required: true,
      },
      details: {
        //detalhes
        type: String,
      },
      available: {
        type: Boolean,
      },
      user: Object,
      adopter: Object,
    },
    { timestamps: true }
  )
);

module.exports = Pet;
