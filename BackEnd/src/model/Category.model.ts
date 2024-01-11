import mongoose, {Document, Model, Schema} from "mongoose";

export interface CategoryDocument extends Document {
    name: String,
    description: String,
    isDelete: boolean
}

export interface CategoryModel extends Model<CategoryDocument>{}

const CategorySchema = new Schema<CategoryDocument, CategoryModel>({
    name: {
        type: String,
        required:[true, "Please enter your name!"]
    },
    description: {
        type: String,
        required: [true, "Please enter your description"],
    },
    isDelete: {
        type: Boolean,
        default: false
    }
})


export default mongoose.model<CategoryDocument, CategoryModel>("categories", CategorySchema);