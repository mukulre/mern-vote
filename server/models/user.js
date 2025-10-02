const mongoose = require('mongoose');
<<<<<<< HEAD
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  polls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Poll' }],
});

userSchema.pre('save', async function(next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashed = await bcrypt.hash(this.password, 10);
    this.password = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function(attempt, next) {
  try {
    return await bcrypt.compare(attempt, this.password);
  } catch (err) {
    return next(err);
  }
};

=======

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    unique: true, 
    required: true 
  },
  password: { 
    type: String, 
    required: true, 
  },
  polls: [{type: mongoose.Schema.Types.ObjectId, ref: 'Poll'}]  
});

>>>>>>> 9bc829e41a527a44fad07b7fcefd1f3f51f512e0
module.exports = mongoose.model('User', userSchema);
