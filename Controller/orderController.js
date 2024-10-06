
import orderSchema from '../Models/orderSchema.js'
export const createOrder= async(req,res)=>{
    try {
        const { date, customerdetails, totalcost, products } = req.body;

        if (!date || !customerdetails || !totalcost || !products) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const order = new orderSchema({
           date,
           customerdetails,
           totalcost,
           products
        });

        await order.save();
        return res.status(201).json({ success: true, message: "Order created successfully" });
        
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
    
}
export const findByIdOrder = async(req,res)=>{

}
export const updateOrder = async(req,res)=>{

}
export const deleteByIdOrder = async(req,res)=>{

}
export const findAllOrder = async(req,res)=>{

}
