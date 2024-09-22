import express from 'express'
const app = express()
// json middleware for parsing application/json
app.use(express.json())
const PORT = 3000
let users = [
    {id: 1, name:"ibad", email:'ibad@gmail.com'},
    {id: 2, name:"ali", email:'ali@gmail.com'},
    {id: 3, name:"umar", email:'umar@gmail.com'},
    {id: 4, name:"usman", email:'usman@gmail.com'}
]

app.get('/api/users/', (req, res)=>{
    res.status(200).json({message:'fetching all users', data: users})
})
app.post('/api/users', (req, res)=>{
    const newUser = {
        id : users.length+1,
        name: "abc",
        email: 'abc@gmail.com'
    }
    users.push(newUser)
    res.status(201).json({message: 'New user successfully created!', newUser})
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

});
app.put('/api/users/:id', (req, res)=>{
    const userId = parseInt(req.params.id); // Get user ID from request parameters
    const { name, email } = req.body; // Destructure name and email from request body
    // Find user index
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    // Update the user details
    users[userIndex] = { ...users[userIndex], name, email };
    // Send response
    res.status(200).json({ message: 'User updated successfully', user: users[userIndex] });
});
app.listen(PORT, ()=>{
    console.log(`The server is listening on http://localhost:${PORT}`)
});