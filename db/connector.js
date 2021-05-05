mongoose = require("mongoose")

const DB_CONNECTION_STRING = "mongodb+srv://Mohammed_19:Carolin1@cluster0.5jb4h.mongodb.net/meseDb?retryWrites=true&w=majority";

module.exports = () => {
        mongoose.connect(DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

}
