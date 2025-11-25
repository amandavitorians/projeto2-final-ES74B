const { Schema, model } = require('mongoose');

const ItemSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  sourceUrl: { type: String },
  tags: [String],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = model('Item', ItemSchema);
