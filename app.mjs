import express from 'express'
const app = express()
const PORT = 5000
const users = [
    {id: 1, name:"ibad", email:'ibad@gmail.com'},
    {id: 2, name:"ali", email:'ali@gmail.com'}
]
app.get('/api/users', (req, res)=>{
    res.status(200).json({message:'fetching users', data:users})
})
app.post('/api/users', (req, res)=>{
    const newUser = {
        userId : users.length+1,
        name : "khan",
        email:"khan@gmail.com"
    }
})
app.listen(PORT, ()=>{
    console.log(`The server is listening on http://localhost:${PORT}`)
})