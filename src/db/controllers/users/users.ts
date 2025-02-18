import { UserModel } from "../../models";

export const getAllUsers = () => UserModel.find();

export const getUserByUid = (uid:string)=>UserModel.findOne({uid})

export const getUserByEmail = (email:string)=>UserModel.findOne({email})

export const getUserBySessionToken = (sessionToken:string)=>UserModel.findOne({'authentication.sessionToken':sessionToken})

export const createUser = (values:Record<string,any>)=>new UserModel(values).save().then((user)=>user.toObject())

export const deleteUser = (uid:string)=> UserModel.findOneAndDelete({uid});

export const UpdateUser = (uid:string,values:Record<string,any>)=>UserModel.updateOne({uid},values)
