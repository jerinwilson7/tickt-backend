import { Order } from "../../../types";
import { OrderModel } from "../../models";




export const PlaceOrder = ({movieId,orderDate,orderId,paymentId,receiptId,userId}:Order)=>new OrderModel({movieId,orderDate,orderId,paymentId,receiptId,userId}).save() 