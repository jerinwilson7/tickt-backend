import express from 'express'
import { getUsers } from '../../controllers'

export default (router:express.Router)=>{
    router.get('/users/get-users',getUsers)
}