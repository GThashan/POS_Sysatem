import customerSchema from "../Models/customerSchema.js"
import mongoose from "mongoose";

export const createCustomer = async(req,res)=>{
    try {
        const { name, address, salary } = req.body;

        if (!name || !address || !salary) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const customer = new customerSchema({
            name,
            address,
            salary
        });

        await customer.save();
        return res.status(201).json({ success: true, message: "Customer created successfully" });
        
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
    
}
export const findByIdCustomer = async(req,res)=>{
    try {
        const id  = req.params.id;

        
        const existingCustomer = await customerSchema.findById({'_id':id});

        if (!existingCustomer) {
            return res.status(404).json({ success: false, message: "Customer not found" });
        }

      
        return res.status(200).json({ 
            success: true, 
            message: "Here are the customer details", 
            customer: existingCustomer 
        });

    } catch (error) {
        
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};
   


export const updateCustomer = async(req,res)=>{
    try {
        const id  = req.params.id;
        const { name, address, salary } = req.body;


        const updatedCustomer = await customerSchema.findByIdAndUpdate(
            id,
            { name, address, salary },
            { new: true, runValidators: true } 
        );

        if (!updatedCustomer) {
            return res.status(404).json({ success: false, message: "Customer not found" });
        }

        return res.status(200).json({
            success: true,
            message: "Customer updated successfully",
            customer: updatedCustomer,
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }

}
export const deleteByIdCustomer = async(req,res)=>{
    try {
        const id  = req.params.id;

        

        const deletedCustomer = await customerSchema.findByIdAndDelete(id);

        if (!deletedCustomer) {
            return res.status(404).json({ success: false, message: "Customer not found" });
        }

        return res.status(200).json({
            success: true,
            message: "Customer deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }

}
export const findAllCustomer = async(req,res)=>{
    try {
        const customers = await customerSchema.find(); 
        
        if (!customers.length) {
            return res.status(404).json({ success: false, message: "No customers found" });
        }

        return res.status(200).json({
            success: true,
            message: "Here are all the customers",
            customers: customers
        });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }

}
