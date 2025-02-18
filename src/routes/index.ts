import express from "express";
import authentication from "./authentication";
import orders from "./orders";
import users from "./users";


const router = express.Router();

export default():express.Router=>{
    authentication(router)
    users(router)
    orders(router)
    return router
}