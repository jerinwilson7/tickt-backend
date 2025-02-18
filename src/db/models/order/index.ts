import mongoose from "mongoose";

 const OrderSchema = new mongoose.Schema({
  userId:{type:String,required:true},
  orderId:{type:String,required:true},
  receiptId:{type:String,required:true},
  paymentId:{type:String,required:true},
  movieId:{type:String,required:true},
  orderDate:{type:Date,required:true},
});


export const OrderModel = mongoose.model("Order", OrderSchema)