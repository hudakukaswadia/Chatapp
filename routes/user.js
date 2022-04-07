const express = require('express')

const router = express.Router()
const {register} = require('../controller/usercontroller')


//shows the informatiton on user based on the id and i want to pass the id into the url
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

//suppose if you are making a register request or some request where you are making a post request, now passing those parameters
// in the url may not be a good idea so you need to pass it as a json payload or in the request body so how to do it?

/*
in the request.json body, there will be a json payload where we will have a key of email and to make this work, we need to
make sure that whatever json payload we get, it is passed into a json and to do that we have a middleware -> app.use(express.json()) so
this middleware will make sure that whatever request is coming in, if it has json payload -> it will be passed into json object properly so we can 
use it here properly 
*/

router.post('/register', register)

exports.userrouter = router