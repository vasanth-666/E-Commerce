import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

const app = express()
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: ["https://e-commerce-frontend-alpha-three.vercel.app", "https://e-commerce-admin-azure-beta.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

connectDB()
connectCloudinary()

app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
  res.send("Api Working");
})

app.listen(port, () => console.log('server is running : ' + port))