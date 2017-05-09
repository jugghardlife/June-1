const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KidSchema = new Schema(
  {
    category: { type: String,unique: true,required: true },
    narration: { type: String },
    picture: { type: String ,required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model('Kid', KidSchema);
