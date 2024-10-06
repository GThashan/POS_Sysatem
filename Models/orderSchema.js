import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    customerdetails: {
        type: Object,
        required: true
    },
    totalcost: {
        type: Number,
        required: true
    },
    products: {
        type: Array,
        required: true
    }
});

export default mongoose.model("order", orderSchema);
