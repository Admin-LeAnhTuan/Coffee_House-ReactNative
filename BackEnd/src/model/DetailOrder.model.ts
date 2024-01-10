import mongoose, {Document, Model, Schema} from "mongoose";

export interface DetailOrderDocument extends Document {
    products: mongoose.Types.ObjectId[],
    isDelete: boolean
}

export interface DetailOrderModel extends Model<DetailOrderDocument>{}

const DetailOrderSchema = new Schema<DetailOrderDocument, DetailOrderModel>({
    products: [
        {
            type: mongoose.Types.ObjectId,
            ref: "products"
        }
    ],
    isDelete: {
        type: Boolean,
        default: false
    }
})


export default mongoose.model<DetailOrderDocument, DetailOrderModel>("detailOrder", DetailOrderSchema);