import { mongoose } from "mongoose";

const orderSchema = new mongoose.schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    status: {
        type: String,
        enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
        default: "Pending"
    }
},
    {
        timestamps: true
    }
);

export const Order = mongoose.model("Order",orderSchema)