const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    index: true,
  },
  lastName: {
    type: String,
    required: true,
    index: true,
  },
  createdOn: { type: Date, default: Date.now },
});

// virtuals do pre-calculations before data is returned

AuthorSchema.virtual('fullName')
  .get(() => {
    return `${this.firstName} ${this.lastName}`;
  });

module.exports = mongoose.model('Author', AuthorSchema);
