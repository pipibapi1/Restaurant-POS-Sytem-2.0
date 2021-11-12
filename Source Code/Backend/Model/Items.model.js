const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let Items = new Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    imageURL: {
        type: String
    }
}
);

module.exports = mongoose.model('Items', Items, "Items");