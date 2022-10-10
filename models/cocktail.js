// import dependencies
const mongoose = require('./connection')

// import user model for populate
const User = require('./user')

// destructure the schema and model constructors from mongoose
const { Schema, model } = mongoose

const cocktailSchema = new Schema(
	{
		name: String,
		image: String,
		spirit: { 
			type: String, 
			enum: ['Gin', 'Rum', 'Tequila', 'Vodka', 'Whiskey'], 
		},
        ingredients: Array,
		recipe: String,
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
	},
	{ timestamps: true }
)

const Cocktail = model('Cocktail', cocktailSchema)

/////////////////////////////////
// Export our Model
/////////////////////////////////
module.exports = Cocktail
