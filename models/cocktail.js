// import dependencies
const mongoose = require('./connection')

// import user model for populate
const User = require('./user')

// import review schema
const reviewSchema = require('./review')

// destructure the schema and model constructors from mongoose
const { Schema, model } = mongoose

const cocktailSchema = new Schema(
	{
		name: String,
		image: String,
		spirit: { 
			type: String, 
			enum: ['gin', 'rum', 'tequila', 'vodka', 'whiskey'], 
		},
        ingredients: Array,
		recipe: String,
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		reviews: [reviewSchema]
	}, { timestamps: true })

const Cocktail = model('Cocktail', cocktailSchema)

/////////////////////////////////
// Export our Model
/////////////////////////////////
module.exports = Cocktail
