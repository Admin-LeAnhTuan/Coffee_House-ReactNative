import mongoose, {Document, Model, Mongoose, Schema} from "mongoose";

export interface TypeProductDocument extends Document {
    product: Object,
    toppings: mongoose.Types.ObjectId[],
    isDelete: boolean
}

export interface TypeProductModel extends Model<TypeProductDocument>{}

const TypeProductModelSchema = new Schema<TypeProductDocument, TypeProductModel>({
    product: {
        type: Object,
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


export default mongoose.model<TypeProductDocument, TypeProductModel>("typeProducts", TypeProductModelSchema);