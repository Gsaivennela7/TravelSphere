import express from "express"
import Booking from "../models/Booking.js";

export const createBooking = async (req,res)=>{

    const newBooking = new Booking(req.body);
try{
    const saveBooking = await newBooking.save();
    res.status(200).json({
        success: true,
        message: 'your tour is booked',
        data: saveBooking
    });
}
catch(err){
    res.status(500).json({
        success: false,
        message: 'internal server error',
    });
}
    
}


export const getBooking = async (req,res)=>{

    const id = req.params.id
try{
    const book = await Booking.findById(id)
    res.status(200).json({
        success: true,
        message: 'Successful',
        data: book
    });
}
catch(err){
    res.status(500).json({
        success: false,
        message: 'internal server error',
    });
}
    
}


export const getAllBooking = async (req,res)=>{

try{
    const book = await Booking.find({})
    res.status(200).json({
        success: true,
        message: 'Successful',
        data: book
    });
}
catch(err){
    res.status(500).json({
        success: false,
        message: 'internal server error',
    });
}
    
}