const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  _linkId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Link',
  },
  url: { type: String, required: true },
});

const Url = mongoose.model('Url', urlSchema);
module.exports = Url;
