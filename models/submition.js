const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const submitionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: {
            index: {
                unique: true,
            },
        },
    },
    maker: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    handlelength: {
        type: Number,
        required: false,
    },
    bladelength: {
        type: Number,
        required: false,
    },
    weight: {
        type: Number,
        required: true,
    },
    pivot: {
        type: String,
        required: true,
    }
});

const Submition = mongoose.model("Submition", submitionSchema);

module.exports = Submition;