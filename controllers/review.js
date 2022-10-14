////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express")
const Cocktail = require("../models/cocktail")

/////////////////////////////////////////
// Create Router
/////////////////////////////////////////
const router = express.Router()

/////////////////////////////////////////////
// Routes
////////////////////////////////////////////
// POST
// only loggedIn users can post comments

router.post("/:cocktailId", (req, res) => {
    const cocktailId = req.params.cocktailId

    if (req.session.loggedIn) {
        // we want to adjust req.body so that the author is automatically assigned
        req.body.author = req.session.userId
    } else {
        res.sendStatus(401)
    }
    // find a specific fruit
    Cocktail.findById(cocktailId)
        // do something if it works
        //  --> send a success response status and maybe the comment? maybe the fruit?
        .then(cocktail => {
            // push the comment into the fruit.comments array
            cocktail.reviews.push(req.body)
            // we need to save the fruit
            return cocktail.save()
        })
        .then(cocktail => {
            // res.status(200).json({ fruit: fruit })
            res.redirect(`/cocktails/${cocktail.id}`)
        })
        // do something else if it doesn't work
        //  --> send some kind of error depending on what went wrong
        .catch(err => res.redirect(`/error?error=${err}`))
})

// DELETE
// only the author of the comment can delete it
router.delete('/delete/:cocktailId/:reviewId', (req, res) => {
    // isolate the ids and save to vars for easy ref
    const cocktailId = req.params.cocktailId 
    const reviewId = req.params.reviewId
    // get the fruit
    Cocktail.findById(cocktailId)
        .then(cocktail => {
            // get the comment
            // subdocs have a built in method that you can use to access specific subdocuments when you need to.
            // this built in method is called .id()
            const theReview = cocktail.reviews.id(reviewId)
            console.log('this is the comment that was found', theReview)
            // make sure the user is logged in
            if (req.session.loggedIn) {
                // only let the author of the comment delete it
                if (theReview.author == req.session.userId) {
                    // find some way to remove the comment
                    // here's another built in method
                    theReview.remove()
                    cocktail.save()
                    res.redirect(`/cocktails/${cocktail.id}`)
                    // return the saved fruit
                    // return fruit.save()
                } else {
                    const err = 'you%20are%20not%20authorized%20for%20this%20action'
                    res.redirect(`/error?error=${err}`)
                }
            } else {
                const err = 'you%20are%20not%20authorized%20for%20this%20action'
                res.redirect(`/error?error=${err}`)
            }
        })
        // send an error if error
        .catch(err => res.redirect(`/error?error=${err}`))

})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router