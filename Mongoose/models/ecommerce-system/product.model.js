import { type } from "express/lib/response";
import { mongoose, Schema } from "mongoose";
import { Category } from "./category.model";

const productSchema = new mongoose.schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
},
    {
        timestamps: true
    });

export const Product = mongoose.model("Product",productSchema)