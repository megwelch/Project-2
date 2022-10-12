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
	// const spirit = req.body
	// console.log(spirit)
	Cocktail.find({'spirit': 'Vodka'})
		.then(cocktails => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			const userId = req.session.userId

			res.render('cocktails/index', { cocktails, loggedIn, userId })
		})
		.catch(error => {
			// console.log(error)
			res.redirect(`/error?error=${error}`)
		})
})

// router.get('/', (req, res) => {
// 	Cocktail.find({})
// 		.then(cocktails => {
// 			const username = req.session.username
// 			const loggedIn = req.session.loggedIn
// 			const userId = req.session.userId

// 			res.render('cocktails/index', { cocktails, loggedIn, userId })
// 		})
// 		.catch(error => {
// 			// console.log(error)
// 			res.redirect(`/error?error=${error}`)
// 		})
// })

// new route -> GET route that renders our page with the form
router.get('/new', (req, res) => {
	const { username, userId, loggedIn } = req.session
	res.render('cocktails/new', { username, loggedIn, userId })
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

// create -> POST route that actually calls the db and makes a new document
router.post('/', (req, res) => {
	req.body.owner = req.session.userId
	const ingArr = req.body.ingredients.split(',')
	req.body.ingredients = ingArr
	let spirit = req.body.spirit
	req.body.spirit = spirit.charAt(0).toUpperCase() + spirit.slice(1)
	console.log('this is the request body in create', req.body)
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

// // edit route -> GET that takes us to the edit form view
// router.get('/:id/edit', (req, res) => {
// 	// we need to get the id
// 	const exampleId = req.params.id
// 	Example.findById(exampleId)
// 		.then(example => {
// 			res.render('examples/edit', { example })
// 		})
// 		.catch((error) => {
// 			res.redirect(`/error?error=${error}`)
// 		})
// })

// // update route
// router.put('/:id', (req, res) => {
// 	const exampleId = req.params.id
// 	req.body.ready = req.body.ready === 'on' ? true : false

// 	Example.findByIdAndUpdate(exampleId, req.body, { new: true })
// 		.then(example => {
// 			res.redirect(`/examples/${example.id}`)
// 		})
// 		.catch((error) => {
// 			res.redirect(`/error?error=${error}`)
// 		})
// })

// // show route
// router.get('/:id', (req, res) => {
// 	const exampleId = req.params.id
// 	Example.findById(exampleId)
// 		.then(example => {
//             const {username, loggedIn, userId} = req.session
// 			res.render('examples/show', { example, username, loggedIn, userId })
// 		})
// 		.catch((error) => {
// 			res.redirect(`/error?error=${error}`)
// 		})
// })

// // delete route
// router.delete('/:id', (req, res) => {
// 	const exampleId = req.params.id
// 	Example.findByIdAndRemove(exampleId)
// 		.then(example => {
// 			res.redirect('/examples')
// 		})
// 		.catch(error => {
// 			res.redirect(`/error?error=${error}`)
// 		})
// })

// Export the Router
module.exports = router
