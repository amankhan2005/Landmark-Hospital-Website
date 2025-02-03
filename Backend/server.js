import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
const app = express()
const port = process.env.PORT
const mongoDBUrl = process.env.MONGODB
app.use(express.json())
app.use(cors())

//routes
import teamRouter from './Routes/team.js'
app.use('/team',teamRouter)



mongoose.connect(mongoDBUrl).then(() => console.log('MongoDB Connected')).catch((err) => console.log(`MongoDb Error, Err- ${err}}`))
app.listen(port, () => { console.log(`Server is running on ${port}`) })
app.get('/', (req, res) => {
    res.send(`Server is Running on port ${port}`);
});