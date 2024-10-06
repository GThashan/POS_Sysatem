import productSchema from '../Models/productSchema.js'


export const createProduct= async(req,res)=>{
    try {
        const { name, description, image, unitprice, QoH } = req.body;

        if (!name || !description || !image || !unitprice || !QoH) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const product = new productSchema({
            name,
            description,
            image,
            unitprice,
            QoH
        });

        await product.save();
        return res.status(201).json({ success: true, message: "Product created successfully" });
        
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
    
    
}
export const findByIdProduct = async(req,res)=>{
    try {
        const id  = req.params.id;

        
        const existingProduct = await productSchema.findById({'_id':id});

        if (!existingProduct) {
            return res.status(404).json({ success: false, message: "Products not found" });
        }

      
        return res.status(200).json({ 
            success: true, 
            message: "Here are the product details", 
            product: existingProduct 
        });

    } catch (error) {
        
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }

}
export const updateProduct = async(req,res)=>{

}
export const deleteByIdProduct = async(req,res)=>{

}
export const findAllProduct = async(req,res)=>{

}
