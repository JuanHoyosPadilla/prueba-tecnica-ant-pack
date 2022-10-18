//Modelos
import mongoose from "mongoose";
const { Schema } = mongoose;

//Subdocumento imagen
/* const imageSchema = new mongoose.Schema({
  name: String,
  img: {
    data: Buffer,
    contentType: String,
  },
}); */

//Subdocumento address
const AddressShema = new Schema({
  street: String,
  suite: String,
  city: String,
});

//Subdocumento company
const CompanyShema = new Schema({
  name: String,
  catchPhrase: String,
  bs: String,
});

//Subdocumento avatar
const AvatarShema = new Schema({
  img: {
    data: Buffer,
    contentType: String,
  },
});

//Documento usuarios
const UsersSchema = new Schema({
  avatar: AvatarShema,
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  address: AddressShema,
  company: CompanyShema,
});

export const User = new mongoose.model("User", UsersSchema);
