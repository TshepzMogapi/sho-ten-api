const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  _linkId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Link',
  },
  url: { type: String, required: true },
  dates: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

urlSchema.methods.generateAnalytics = async function () {
  const url = this;
  const queryDate = new Date();
  url.dates = url.dates.concat({ queryDate });
  await url.save();
};

const Url = mongoose.model('Url', urlSchema);
module.exports = Url;
