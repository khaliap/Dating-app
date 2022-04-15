const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/usersRouter')
const authCheck = require('./middleware/checkAuth')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(userRouter)

app.use("/users", authCheck, userRouter)


app.listen(PORT, ()=>{
    console.log('app started ')
})