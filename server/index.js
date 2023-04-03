import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/users.js'
import questionsRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answer.js'


const app = express();
dotenv.config();
app.use(express.json({limit:"30mb", extended: true}))
app.use(express.urlencoded({limit:"30mb", extended: true}))
app.use(cors());
app.get('/',(req, res)=>{
    res.send("This is stack overflow clone Api")
})

app.use('/user',userRoutes)
app.use('/questions',questionsRoutes)
app.use('/answer', answerRoutes)

const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL

const CONNECTION_URL = "mongodb+srv://chanchal417333:admin@scack-overflow.0toific.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect( CONNECTION_URL , {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
.catch((err)=>console.log(err))