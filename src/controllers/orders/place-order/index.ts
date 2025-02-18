import express from 'express';
import { PlaceOrder } from '../../../db';
import { ApiResponse } from '../../../utils/response';
import { Order } from '../../../types';


export const placeOrder = async(req:express.Request<{},{},Order>, res:ApiResponse<null>)=>{
    const {orderId,paymentId,movieId,receiptId,userId} = req.body

    if(!orderId || !paymentId){
        throw new Error("orderId and paymentId are required")
    }

    try {
        
        const order = await PlaceOrder({
            orderId,
            paymentId,
            movieId,
            orderDate:new Date(),
            receiptId,
            userId
        })

        if(!order){
            throw new Error("Failed to place order")
        }

        return res.status(200).json({
            success:true,
            message:"Order placed successfully",
        })
    } catch (error) {
        console.log("Place Order error :",error)
        return res.status(500).json({
            message:"An error occurred while placing order",
            success:false
        })
        
    }
}