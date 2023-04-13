const mongoose = require('mongoose');

const exchangeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['requested', 'approved', 'rejected', 'completed'],
      default: 'requested',
      required: true,
    },
  },
  { timestamps: true }
);

const Exchange = mongoose.model('Exchange', exchangeSchema);

module.exports = { Exchange };
