import mongoose, {Document, Model, Schema} from "mongoose";

export interface ProductDocument extends Document {
    name: String,
    subname: String,
    image: String,
    description: String,
    price: Number,
    size: String,
    info: String,
    extra_info: String,
    typeProduct: Object[],
    isDelete: boolean
}

export interface ProductModel extends Model<ProductDocument>{}

const ProductSchema = new Schema<ProductDocument, ProductModel>({
    name: {
        type: String,
        required:[true, "Please enter your name!"],
    },
    subname: {
        type: String,
        required: [true, "Please enter your subname!"],
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: [true, "Please enter your description"],
    },
    price: {
        type: Number,
        required: [true, "Please enter your price"],
    },
    size: {
        type: String,
        default: ["S", "M", "L"],
        required: [true, "Please enter your size"],
    },
    info: {
        type: String,
        required: [true, "Please enter your info"],
    },
    extra_info: {
        type: String,
        required: [true, "Please enter your extra_info"]
    },
    typeProduct: [
        {
            type: Object
        }
    ],
    isDelete: {
        type: Boolean,
        default: false
    }
})


export default mongoose.model<ProductDocument, ProductModel>("products", ProductSchema);