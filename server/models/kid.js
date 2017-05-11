const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const KidSchema = new Schema(
  {
    category: { type: String,unique: true,required: true },
    variety: { type: String },
    picture: { type: String ,required: true},
    dogs: [{
      type: ObjectId,
      ref: 'Dog'
    }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Kid', KidSchema);
