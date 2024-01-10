import mongoose, {Document, Model, Schema} from "mongoose";

export interface ToppingDocument extends Document {
    name: String,
    subname: String,
    description: String,
    price: Number,
    isDelete: boolean
}

export interface ToppingModel extends Model<ToppingDocument>{}

const ToppingSchema = new Schema<ToppingDocument, ToppingModel>({
    name: {
        type: String,
        required:[true, "Please enter your name!"],
    },
    subname: {
        type: String,
        required: [true, "Please enter your subname!"],
    },
    description: {
        type: String,
        required: [true, "Please enter your description"],
    },
    price: {
        type: Number,
        required: [true, "Please enter your price"],
    },
    isDelete: {
        type: Boolean,
        default: false
    }
})


export default mongoose.model<ToppingDocument, ToppingModel>("toppings", ToppingSchema);