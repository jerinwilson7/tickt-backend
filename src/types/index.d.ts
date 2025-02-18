interface OrderInit {
    orderId:string;
    receiptId?:string
}

interface Order {
    orderId:string;
    receiptId:string;
    paymentId:string;
    userId:string;
    movieId:string;
    orderDate:Date;
    
}