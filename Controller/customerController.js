import customerSchema from "../Models/customerSchema.js"

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

}
export const updateCustomer = async(req,res)=>{

}
export const deleteByIdCustomer = async(req,res)=>{

}
export const findAllCustomer = async(req,res)=>{

}
