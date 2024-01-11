import mongoose, {Document, Model, Schema, ObjectId} from "mongoose";

export interface OrderDocument extends Document {
    user: Object,
    DetailOrders: mongoose.Types.ObjectId,
    note?: String,
    totalPrice: Number
    isDelete: boolean
}

export interface OrderModel extends Model<OrderDocument>{}

const OrderSchema = new Schema<OrderDocument, OrderModel>({
    user: {
        type: Object,
    },
    DetailOrders: [
        {
            type: mongoose.Types.ObjectId,
            ref: "detailOrders"
        }
    ],
    note: {
        type: String,
    },
    totalPrice: {
        type: Number,
        required: [true, "Please enter your totalPrice"]
    },
    isDelete: {
        type: Boolean,
        default: false
    }
})


export default mongoose.model<OrderDocument, OrderModel>("order", OrderSchema);