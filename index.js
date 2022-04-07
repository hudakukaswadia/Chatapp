const express = require('express')

const app = express()
const port = 3000

const {userrouter} = require('./routes/user')

app.use(express.json())

app.use('/user', userrouter)

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log("Your app is running on http://localhost:"+port)
})