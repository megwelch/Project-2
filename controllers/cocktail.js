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
router.get('/', (req, res) => {
	Cocktail.find({})
		.then(cocktails => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn

			res.render('cocktails/index', { cocktails, username, loggedIn })
		})
		.catch(error => {
			// console.log(error)
			res.redirect(`/error?error=${error}`)
		})
})

// index that shows only the user's examples
router.get('/mine', (req, res) => {
    // destructure user info from req.session
    // const { username, userId, loggedIn } = req.session
	
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

// new route -> GET route that renders our page with the form
router.get('/new', (req, res) => {
	const { username, userId, loggedIn } = req.session
	res.render('cocktails/new', { username, loggedIn })
})

// create -> POST route that actually calls the db and makes a new document
router.post('/', (req, res) => {
	req.body.ready = req.body.ready === 'on' ? true : false

	req.body.owner = req.session.userId
	Example.create(req.body)
		.then(example => {
			console.log('this was returned from create', example)
			res.redirect('/examples')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// edit route -> GET that takes us to the edit form view
router.get('/:id/edit', (req, res) => {
	// we need to get the id
	const exampleId = req.params.id
	Example.findById(exampleId)
		.then(example => {
			res.render('examples/edit', { example })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// update route
router.put('/:id', (req, res) => {
	const exampleId = req.params.id
	req.body.ready = req.body.ready === 'on' ? true : false

	Example.findByIdAndUpdate(exampleId, req.body, { new: true })
		.then(example => {
			res.redirect(`/examples/${example.id}`)
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// show route
router.get('/:id', (req, res) => {
	const exampleId = req.params.id
	Example.findById(exampleId)
		.then(example => {
            const {username, loggedIn, userId} = req.session
			res.render('examples/show', { example, username, loggedIn, userId })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// delete route
router.delete('/:id', (req, res) => {
	const exampleId = req.params.id
	Example.findByIdAndRemove(exampleId)
		.then(example => {
			res.redirect('/examples')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// Export the Router
module.exports = router
