import { mongoose } from "mongoose";

const todoSchema = new mongoose.schema({
    content: {
        type: String,
        required: true
    },
    color: {
        type: String,
    },
    completed:{
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subTodo"
    }]
},
    {
        timestamps: true
    });

export const Todo = mongoose.model("Todo",todoSchema)