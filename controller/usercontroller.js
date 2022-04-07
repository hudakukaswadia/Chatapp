/*
this user controller will be responsible for all functionalities of the routes 
which has user prefix in it 
*/

function register(req, res){
    const email = req.body.email, 
    password = req.body.password,
    name = req.body.name
}

exports.register = register