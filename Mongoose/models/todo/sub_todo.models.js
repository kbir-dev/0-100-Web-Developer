import { mongoose } from "mongoose";

const subTodoSchema = new mongoose.schema({
    content: {
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
    {
        timestamps: true
    });

export const subTodo = mongoose.model("subTodo",subTodoSchema)