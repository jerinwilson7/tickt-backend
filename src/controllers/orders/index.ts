import express from 'express';
import Razorpay from "razorpay";
import { RAZORPAY_KEY_ID, RAZORPAY_SECRET_KEY } from "../../constants";

var razorpayInstance = new Razorpay({
    key_id:RAZORPAY_KEY_ID,
    key_secret:RAZORPAY_SECRET_KEY
})
export const createOrder = async(req:express.Request,res:express.Response)=>{
    try {
        
        await razorpayInstance.orders.create({
            amount: 50000,
            currency: "INR",
            receipt: "receipt#1",
            partial_payment: false,
            notes: {
                key1: "value3",
                key2: "value2",
            },
        }).then((data)=>{
            const orderResponse = {
                orderId:data.id,
                receipt:data.receipt
            }
            console.log("test 30!",orderResponse)

            return res.status(200).json({
                success:true,
                message:'Order created successfully',
                data:orderResponse
            })
        });
    } catch (error) {
       console.log("Create Order error :",error) 
       return res.status(500).json({
        success:false,
        message:"An error occurred while creating order",
       })
    }
}