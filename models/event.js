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
  datetime: {
    type: Date,
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
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
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