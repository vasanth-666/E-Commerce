import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

const app=express()
const port =process.env.PORT || 4000;

const corsOptions = {
    origin: ["https://ecommerce-app-frontend-lemon.vercel.app", "https://ecommerce-app-woad-five.vercel.app"], // Allowed frontend origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  };

connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors(corsOptions))
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("Api Working");
})

app.listen(port,()=>console.log('server is running : '+port))