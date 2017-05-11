const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const DogSchema = new Schema(
  {
    name: { type: String},
    age: { type: String },
    gender:{type:String},
    picture: { type: String ,required: true},
    kid: {
      type: ObjectId,
      ref: 'Kid'
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Dog', DogSchema);
