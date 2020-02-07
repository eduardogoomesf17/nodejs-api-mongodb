import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  senha: String,
});

module.exports = mongoose.model('User', UserSchema);
