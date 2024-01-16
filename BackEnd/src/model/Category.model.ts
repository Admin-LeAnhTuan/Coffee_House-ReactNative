import mongoose, { Document, Model, Schema } from "mongoose";

export interface CategoryDocument extends Document {
<<<<<<< HEAD
    name: String,
    description: String,
    isDelete: boolean
=======
  name: String;
  description: String;
  products: mongoose.Types.ObjectId[];
  isDelete: boolean;
>>>>>>> b749c4cbf54ee166ab6e0dee532210628e483368
}

export interface CategoryModel extends Model<CategoryDocument> {}

const CategorySchema = new Schema<CategoryDocument, CategoryModel>({
  name: {
    type: String,
    required: [true, "Please enter your name!"],
  },
  description: {
    type: String,
    // required: [true, "Please enter your email address"],
  },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: "products",
    },
<<<<<<< HEAD
    description: {
        type: String,
        required: [true, "Please enter your description"],
    },
    isDelete: {
        type: Boolean,
        default: false
    }
})
=======
  ],
  isDelete: {
    type: Boolean,
    default: false,
  },
});
>>>>>>> b749c4cbf54ee166ab6e0dee532210628e483368

export default mongoose.model<CategoryDocument, CategoryModel>(
  "categories",
  CategorySchema
);
