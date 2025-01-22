import mongoose from "mongoose";

const bookingSchema=mongoose.Schema(
  {
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true
    },
    flight:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Flight",
      required:true
    },
    passenger:{
      type:Number,
      required:true
    }
  }
)

const Booking=mongoose.model("Booking",bookingSchema)

export default Booking;