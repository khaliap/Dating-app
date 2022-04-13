const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const app = express()

app.use(express.json())
app.use(cors())
app.use(userRouter)

const PORT = process.env.PORT || 3000



app.listen(PORT, ()=>{
    console.log('app started ')
})