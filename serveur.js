import express from 'express'
const app = express()
const Port = process.env.Port


app.use(express.json())
import users from './routes/user.js'
app.use(express.json())
app.use('/api/user', users)







app.listen(Port, ()=>{
    console.log(`server runnig at port ${Port}`);
    
})