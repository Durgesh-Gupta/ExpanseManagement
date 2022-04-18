const Product=require("../model/products.model")
const dotenv=require("dotenv")
const connectDataBase=require("../config/database")

const products=require('../data/products.json')

dotenv.config({path: 'Backend/config/config.env'})
connectDataBase()

const seedProducts=async () =>{
    try {
        await Product.deleteMany();
        console.log("Products are deleted")
        await Product.insertMany(products)
        console.log("Products are Added")
        process.exit()

        
    } catch (error) {
        console.log(error.message)
        process.exit()
        
    }
}
seedProducts()