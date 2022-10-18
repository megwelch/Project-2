////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require('express')
const Cocktail = require('../models/cocktail')

/////////////////////////////////////////
// Create Router
/////////////////////////////////////////
const router = express.Router()


/////////////////////////////////////////////
// Routes
////////////////////////////////////////////
// index ALL
// Make sure you're labelling your code correctly and using your code comments in a way that makes it easier for other developers to read. Here should be labelled as your filter, 
router.get('/byspirit', (req, res) => {
	const spirit = req.query.spirit
	Cocktail.find({'spirit': spirit})
		.then(cocktails => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			const userId = req.session.userId

			res.render('cocktails/index', { cocktails, loggedIn, userId, username })
		})
		.catch(error => {
			// console.log(error)
			res.redirect(`/error?error=${error}`)
		})
})
// and here should be labelled as your index all.
router.get('/', (req, res) => {
	Cocktail.find({})
		.then(cocktails => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			const userId = req.session.userId

			res.render('cocktails/index', { cocktails, loggedIn, userId, username })
		})
		.catch(error => {
			// console.log(error)
			res.redirect(`/error?error=${error}`)
		})
})

// new route -> GET route that renders our page with the form
router.get('/new', (req, res) => {
	const { username, userId, loggedIn } = req.session
	res.render('cocktails/new', { username, loggedIn, userId })
})

// create -> POST route that actually calls the db and makes a new document
router.post('/', (req, res) => {
	req.body.owner = req.session.userId
	const ingArr = req.body.ingredients.split(',')
	const spirit = req.body.spirit.toLowerCase()
	req.body.spirit = spirit
	req.body.ingredients = ingArr
	// let spirit = req.body.spirit
	// req.body.spirit = spirit.charAt(0).toUpperCase() + spirit.slice(1)
	// console.log('this is the request body in create', req.body)
	Cocktail.create(req.body)
		.then(cocktail => {
			const username = req.session.username
            const loggedIn = req.session.loggedIn
            const userId = req.session.userId
			// console.log('this was returned from create', cocktail)
			res.redirect('/cocktails')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// index that shows only the user's examples
router.get('/mine', (req, res) => {
	Cocktail.find({ owner: req.session.userId })
		.then(cocktails => {
			const username = req.session.username
            const loggedIn = req.session.loggedIn
            const userId = req.session.userId

			res.render('cocktails/index', { cocktails, username, loggedIn, userId })
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// review route
router.get('/:id/review', (req, res) => {
	const username = req.session.username
    const loggedIn = req.session.loggedIn
    const userId = req.session.userId
	const cocktailId = req.params.id
	Cocktail.findById(cocktailId)
	//Good use of populate here
		.populate("reviews.author", "username")
		.then(cocktail => {
			res.render('cocktails/review', { cocktail, username, loggedIn, userId })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// edit route -> GET that takes us to the edit form view
router.get('/:id/edit', (req, res) => {
	// we need to get the id
	const cocktailId = req.params.id
	Cocktail.findById(cocktailId)
		.then(cocktail => {
			res.render('cocktails/edit', { cocktail })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// update route
router.put('/:id', (req, res) => {
	//Great feature! And good variable names.
	const ingArr = req.body.ingredients.split(',')
	req.body.ingredients = ingArr
	const cocktailId = req.params.id
	//When the app is finished, make sure you comment out your console logs. But you did a great job with using them and adding strings to keep track of them.
	console.log('this is the request body in update', req.body)
	Cocktail.findById(cocktailId)
		.then(cocktail => {
			console.log('the cocktail:', cocktail)
			console.log(req.session)
			console.log(cocktail.owner == req.session.userId)
			if (cocktail.owner == req.session.userId) {
                return cocktail.updateOne(req.body)
			}
		})
		.then(() => {
			res.redirect(`/cocktails/${cocktailId}`)
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// delete route
router.delete('/:id', (req, res) => {
	const cocktailId = req.params.id
	console.log('the cocktailId to be deleted:', cocktailId)
	Cocktail.findByIdAndRemove(cocktailId)
		.then(cocktail => {
			res.redirect('/cocktails')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// show route
router.get('/:id', (req, res) => {
	const cocktailId = req.params.id
	Cocktail.findById(cocktailId)
		.populate("reviews.author", "username")
		.then(cocktail => {
			//Good use of destructuring syntax
            const {username, loggedIn, userId} = req.session
			res.render('cocktails/show', { cocktail, username, loggedIn, userId })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// Export the Router
module.exports = router
