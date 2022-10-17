////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require('express')
const Cocktail = require('../models/cocktail')

/////////////////////////////////////////
// Create Router
/////////////////////////////////////////
const router = express.Router()

router.get('/', (req, res) => {
	// const spirit = req.body
	Cocktail.find({})
		.then(cocktails => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			const userId = req.session.userId

			res.render('cocktails/spirits', { cocktails, loggedIn, userId, username })
		})
		.catch(error => {
			// console.log(error)
			res.redirect(`/error?error=${error}`)
		})
})

// Export the Router
module.exports = router