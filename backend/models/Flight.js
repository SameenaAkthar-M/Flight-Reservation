import mongoose from "mongoose";

const flightSchema=mongoose.Schema(
  {
    flightNumber:{
      type:String,
      required:true
    },
    origin:{
      type:String,
      required:true
    },
    destination:{
      type:String,
      required:true
    },
    departureDate:{
      type:Date,
      required:true
    },
    arrivalDate:{
      type:Date,
      required:true
    },
    price:{
      type:Number,
      required:true
    }
  }
)

const Flight=mongoose.model("Flight",flightSchema)

export default Flight;