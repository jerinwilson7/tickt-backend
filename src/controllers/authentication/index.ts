import express from 'express';
import admin from '../../db/firebase/firebase-config';
import { createUser, getUserByEmail, getUserByUid } from '../../db';

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, uid } = req.body;

    if (!email || !uid) {
      return res.status(400).json({ message: "Email and UID are required" });
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const user = await createUser({
      email,
      uid,
    });

    return res.status(201).json({message:'user registered successfully ',user});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const login = async(req:express.Request,res:express.Response)=>{

    try {
        
        const {uid,idToken} = req.body
    
        if(!uid || !idToken){
            return res.status(400).json({message:'uid and id token are required for authentication'})
        }
    
        const decodedToken = await admin.auth().verifyIdToken(idToken)
    
        if(decodedToken.uid !== uid){
            return res.status(400).json({message:'invalid token or uid mismatch'})
        }
    
        const user = await getUserByUid(uid)
    
        if(!user){
            return res.status(400).json({message:"No user exits, please register to continue"})
        }
    
        return res.status(200).json({
            message:'Login success',
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:'Internal error occurred while logging in please try again',

        })
    }


}
