import {Schema, model} from 'mongoose';

let UserSchema: Schema = new Schema({
  name: String,
  dateOfBirth: Date,
  address: String,
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  createdAt: Date,
  updatedAt: Date,

})

export default model('User', UserSchema);