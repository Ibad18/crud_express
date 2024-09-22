import express from 'express'
const app = express()
// json middleware for parsing application/json
app.use(express.json())
const PORT = 5000
let users = [
    {id: 1, name:"ibad", email:'ibad@gmail.com'},
    {id: 2, name:"ali", email:'ali@gmail.com'}
]

app.get('/api/users', (req, res)=>{
    res.status(200).json({message:'fetching all users', data:users})
})
app.post('/api/users', (req, res)=>{
    const newUser = {
        id : users.length+1,
        name: "abc",
        email: 'abc@gmail.com'
    }
    users.push(newUser)
    res.status(201).json({message: 'New user successfully created!', data: users})
})
app.delete('/api/users/:id',(req, res)=>{
    let userId = parseInt(req.params.id)
    // Check if user exists
    let userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    // Remove user from the array
    users = users.filter(user => user.id !== userId);

    // Send response
    res.status(200).json({ message: 'User deleted successfully', users });

})
app.listen(PORT, ()=>{
    console.log(`The server is listening on http://localhost:${PORT}`)
})