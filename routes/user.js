import express, { Router } from 'express'
import bcrypt from 'bcrypt'
const router = express.Router() 
let users = []

router.post('/signup', async (req, res)=>{
    try {
        const {email, username, password}= req.body
        let user = users.find(user=>user.email === email)
        if(user){
            res.status(404).send('wrong email or password')
        }
            let hashedpass = await bcrypt.hash(password, 10)
            console.log(hashedpass);
            users.push({email , username , password : hashedpass})
            res.status(201).send(users)
        
    } catch (error) {
        console.log(error);
        
    }
})
router.post('/Login', async(req, res)=>{
    try {
        const {email, password}= req.body
        let user = users.find(user=>user.email === email)
        if(!user){
            res.status(404).send('wrong email or password')
        }
        let MatchedPassw = await bcrypt.compare(password, user.password)
        if(!MatchedPassw){
            res.status(404).send('email or password unmatched')
        }
        res.status(200).send(`welcome back user ` )
    } catch (error) {
        console.log(error);
        
    }
})
export default router