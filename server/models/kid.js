const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const KidSchema = new Schema(
  {
    variety: { type: String,unique: true,required: true },
    narration: { type: String },
    picture: { type: String ,required: true},
    dogs: [{
      type: ObjectId,
      ref: 'Dog'
    }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Kid', KidSchema);
