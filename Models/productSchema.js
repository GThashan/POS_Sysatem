import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    unitprice: {
        type: Number,
        required: true
    },
    QoH: {
        type: Number,
        required: true
    }
});

export default mongoose.model("Product", productSchema);
