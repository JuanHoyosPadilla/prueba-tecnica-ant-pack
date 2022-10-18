//Importamos el modelo del usuario
import { User } from "../models/User.js";

//Funcion para obtener un solo usuario
export const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).exec();
  res.json(
    user
  );
};

//Funcion para obtener todos los usuarios
export const getUsers = (req, res) => {
  User.find()
    .then((users) => {res.json(users)})
    .catch((error) => res.json(error));
};

//Funcion para guardar avatar
/* export const addAvatar = async (req, res) => {
    const avatar = req.files.avatar
    console.log(req.files.avatar)
    const newUser = await new User(body);
    newUser.avatar.img.data = req.files.data;
    newUser.avatar.img.contentType = req.files.mimetype;
    newUser.save()
    res.json({message: 'file succes'})
} */

//Funcion para guardar usuario
export const addUser = async (req, res) => {
  const {
    name,
    username,
    email,
    phone,
    website,
    street,
    suite,
    city,
    name_company,
    catchPhrase,
    bs,
  } = req.body;
  const { data, mimetype } = req.files.avatar;
  const body = {
    avatar: {
      img: {
        data: data,
        contentType: mimetype,
      },
    },
    name,
    username,
    email,
    phone,
    website,
    address: {
      street,
      suite,
      city,
    },
    company: {
      name: name_company,
      catchPhrase,
      bs,
    },
  };
  //const avatar = req.files.avatar;

  console.log(req.body);
  console.log(req.files.avatar);
  //console.log(avatar)
  const newUser = await new User(body);
  newUser.save();
  newUser.update(
    { _id: newUser._id },
    {
      $push: {
        avatar: body.avatar,
        address: body.address,
        company: body.company,
      },
    }
  );

  res.json({ message: "saved user" });
};

//Funcion para Actualizar los datos del usuario

export const putUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
  res.json({
    message: "updated user",
    updatedUser,
  });
};

//Funcion para eliminar usuario

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json({
    message: "User deleted",
  });
};
