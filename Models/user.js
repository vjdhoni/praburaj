var mongoose = require('mongoose')

var data = {
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    }
}

var schema = mongoose.Schema(data)

module.exports = mongoose.model("user", schema)