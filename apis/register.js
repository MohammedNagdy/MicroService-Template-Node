investor = require("../db/models/register-model")

module.exports = (route) => {
    app.post(route, async(req, res) => {
        try {
            console.log(req.body)
            const registered = await investor.investorModel.create(req.body)
            console.log("Registered")
            res.send(200)
        } catch(error) {
            console.log(error)
            // handle the error
            res.send(400)
        }        
    })
}
