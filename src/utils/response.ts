import express from 'express';

export class Response<T> {
    success:boolean;
    message:string;
    data?:T

    constructor(success:boolean,message:string,data?:T){
        this.success = success;
        this.message=message;
        this.data=data;
    }
}

export type ApiResponse<T> = express.Response<Response<T>>