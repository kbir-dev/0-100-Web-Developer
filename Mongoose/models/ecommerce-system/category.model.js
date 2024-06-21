import { mongoose } from "mongoose";

const categorySchema = new mongoose.schema({
    category:{
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });

export const Category = mongoose.model("Category",categorySchema)