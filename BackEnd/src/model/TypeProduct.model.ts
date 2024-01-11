import mongoose, {Document, Model, Mongoose, Schema} from "mongoose";

export interface TypeProductDocument extends Document {
    name: String,
    toppings: Object[]
    isDelete: boolean
}

export interface TypeProductModel extends Model<TypeProductDocument>{}

const TypeProductModelSchema = new Schema<TypeProductDocument, TypeProductModel>({
    name: {
        type: String,
        required:[true, "plase enter name type product"]
    },
    toppings: [
        {type: Object}
    ],
    isDelete: {
        type: Boolean,
        default: false
    }
})


export default mongoose.model<TypeProductDocument, TypeProductModel>("typeProducts", TypeProductModelSchema);