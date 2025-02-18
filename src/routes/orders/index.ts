import express from 'express'
import { createOrder } from '../../controllers'

export default (router:express.Router)=>{
    router.post('/orders/create-order',createOrder)
}