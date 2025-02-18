import express from 'express';
import Razorpay from "razorpay";
import { RAZORPAY_KEY_ID, RAZORPAY_SECRET_KEY } from "../../../constants";
import { ApiResponse } from '../../../utils/response';

interface CreateOrderRequest {
    amount:number,
    email:string
}

interface OrderInit {
  orderId: string;
  receiptId?: string;
}

var razorpayInstance = new Razorpay({
    key_id:RAZORPAY_KEY_ID,
    key_secret:RAZORPAY_SECRET_KEY
})

export const createOrder = async(req:express.Request<{},{},CreateOrderRequest>,res:ApiResponse<OrderInit>)=>{
    const {amount,email} = req.body
    const receiptId = `receipt#${Date.now()}`
    const currency = "INR"

    if (!RAZORPAY_KEY_ID || !RAZORPAY_SECRET_KEY) {
      throw new Error("Razorpay key ID or secret key is missing");
    }

    try {
        const order = await razorpayInstance.orders.create({
            amount: amount,
            currency,
            receipt: receiptId,
            partial_payment: false,
            notes: {
                customer_email: email,
            },
        })

            return res.status(200).json({
                success:true,
                message:'Order created successfully',
                data:{
                    orderId:order.id,
                    receiptId:order.receipt
                }
            })
        }
    
    catch (error) {
       console.log("Create Order error :",error) 
       return res.status(500).json({
        success:false,
        message:"An error occurred while creating order",
       })
    }
}