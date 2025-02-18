import express from 'express'
import { createOrder, placeOrder } from '../../controllers'

export default (router:express.Router)=>{
    router.post('/orders/create-order',createOrder)
    router.post('/orders/place-order',placeOrder)
}