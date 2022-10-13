///////////////////////////////////////////////////////////
// Import Dependencies
///////////////////////////////////////////////////////////
const mongoose = require('./connection')

const { Schema } = mongoose

// comment schema
const reviewSchema = new Schema ({
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

///////////////////////////////////////////////////////////
// Export Our Schema
///////////////////////////////////////////////////////////
module.exports = reviewSchema