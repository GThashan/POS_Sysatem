
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
    try {
        const id  = req.params.id;

        
        const existingOrder = await orderSchema.findById({'_id':id});

        if (!existingOrder) {
            return res.status(404).json({ success: false, message: "Order not available" });
        }

      
        return res.status(200).json({ 
            success: true, 
            message: "Here are the Order details", 
            order: existingOrder 
        });

    } catch (error) {
        
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }

}
export const updateOrder = async(req,res)=>{
    try {
        const id  = req.params.id;
        const { date, customerdetails, totalcost, products } = req.body;


        const updatedOrder = await orderSchema.findByIdAndUpdate(
            id,
            { date, customerdetails, totalcost, products},
            { new: true, runValidators: true } 
        );

        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }

        return res.status(200).json({
            success: true,
            message: "Order updated successfully",
            Order: updatedOrder,
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }


}
export const deleteByIdOrder = async(req,res)=>{
    try {
        const id  = req.params.id;

        

        const deletedOrder = await orderSchema.findByIdAndDelete(id);

        if (!deletedOrder) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }

        return res.status(200).json({
            success: true,
            message: "Order deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }


}
export const findAllOrder = async(req,res)=>{
    try {
        const orders = await orderSchema.find(); 
        
        if (!orders.length) {
            return res.status(404).json({ success: false, message: "No orders found" });
        }

        return res.status(200).json({
            success: true,
            message: "Here are all the orders",
            orders: orders
        });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }


}
