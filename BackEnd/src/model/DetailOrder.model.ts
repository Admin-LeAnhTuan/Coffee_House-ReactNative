import mongoose, {Document, Model, Schema} from "mongoose";

export interface DetailOrderDocument extends Document {
    product: Object,
    toppings: mongoose.Types.ObjectId[],
    isDelete: boolean
}

export interface DetailOrderModel extends Model<DetailOrderDocument>{}

const DetailOrderSchema = new Schema<DetailOrderDocument, DetailOrderModel>({
    product: {
        type: Object
    },
    toppings: [
        {
            type: mongoose.Types.ObjectId,
            ref: "toppings"
        }
    ],
    isDelete: {
        type: Boolean,
        default: false
    }
})


export default mongoose.model<DetailOrderDocument, DetailOrderModel>("detailOrders", DetailOrderSchema);