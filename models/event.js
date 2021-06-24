const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  host: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  attendees: [{
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    rsvp: {
      type: String,
      enum: ['YES', 'NO', 'MAYBE', 'PENDING'],
      default: 'PENDING'
    }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);