///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require('./connection')
const Cocktail = require('./cocktail')

///////////////////////////////////////
// Seed Script
///////////////////////////////////////
const db = mongoose.connection

db.on('open', () => {
    const startCocktails = [
        {
            name:'Margarita',
            image: 'https://i.imgur.com/jzjsZ5p.png',
            spirit: 'tequila',
            ingredients: ['2 oz tequila', 'salt', '1 oz triple ', 'lime'],
            recipe: 'Rub the rim of the glass with the lime slice and coat it with salt. Shake the other ingredients with ice and carefully pour into the glass. Garnish with a lime.',
        },
        {
            name:'Old-Fashioned',
            image: 'https://i.imgur.com/XxnqmkF.png',
            spirit: 'whiskey',
            ingredients: ['1 tsp sugar', '3 dashes of bitters', '1 tsp water', '2oz bourbon', 'orange twist'],
            recipe: 'Add the sugar and bitters into a mixing glass, then add the water, and stir until the sugar is nearly dissolved. Fill the mixing glass with ice, add the bourbon, and stir until well-chille. Strain into a rocks glass over one large ice cube. Express the oil of an orange twist over the glass, then drop into the glass to garnish',
        },
        {
            name:'Cosmopolitan',
            image: 'https://i.imgur.com/VeuUwFy.png',
            spirit: 'vodka',
            ingredients: ['2 oz vodka', '1/2 oz triple sec', '3/4 oz cranberry juice', '1/2 oz lime juice'],
            recipe: 'Add all ingredients into cocktail shaker filled with ice. Shake well and double strain into large cocktail glass. Garnish with lime peel twist.',
        },
        {
            name:'Mai Tai',
            image: 'https://i.imgur.com/zC4M8fZ.png',
            spirit: 'rum',
            ingredients: ['1 1/2 oz light rum', '1/2 oz dark rum', '1/2 oz orange liqueur', '3/4 oz triple sec', '3/4 oz lime juice', '1 1/2 oz pineapple juice'],
            recipe: 'Add all ingredients into cocktail shaker filled with ice. Shake well and strain into glass. Garnish with a pineapple wedge and maraschino cherries, then serve with straw.',
        },
        {
            name:'Manhattan',
            image: 'https://i.imgur.com/8LWhIww.png',
            spirit: 'whiskey',
            ingredients: ['2 oz whiskey', '1 oz sweet vermouth', '2 dashes bitters', 'brandied cherries'],
            recipe: 'Add the rye whiskey, sweet vermouth, and bitters into a mixing glass with ice and stir until well-chilled. Garnish with brandied cherries.',
        },
        {
            name:'Mint Julep',
            image: 'https://i.imgur.com/boWme9A.png',
            spirit: 'whiskey',
            ingredients: ['2 1/2 oz whiskey', '10 mint leaves', '1 1/2 oz tsp sugar', 'seltzer water'],
            recipe: 'Place the mint leaves in the bottom of an old-fashioned glass and top with the sugar. Muddle these together until the leaves begin to break down. Add a splash of seltzer water, fill the glass 3/4 full with crushed ice, and add the bourbon. Top with another splash of seltzer, stir, and garnish with a sprig of mint.',
        },
        {
            name:'Mojito',
            image: 'https://i.imgur.com/ULXmhZC.png',
            spirit: 'rum',
            ingredients: ['2 oz light rum', '5 mint leaves', '1/2 oz simple syrup', '3/4 oz lime juice', 'club soda'],
            recipe: 'Lightly muddle the mint with the simple syrup in a shaker. Add the rum, lime juice and ice, and give it a brief shake, then strain into a tall glass over fresh ice. Top with club soda then garnish with a mint sprig and lime wedge.',
        },
        {
            name:'Moscow Mule',
            image: 'https://i.imgur.com/7I8ugfn.png',
            spirit: 'vodka',
            ingredients: ['1 1/2 oz vodka', 'lime wedge', '3 oz ginger beer'],
            recipe: 'Put the vodka in a copper mug. Squeeze the lime over the vodka. Add ice and top with the ginger beer. Add 2-3 lime wedges on top.',
        },
        {
            name:'Negroni',
            image: 'https://i.imgur.com/arOSFHv.png',
            spirit: 'gin',
            ingredients: ['1 oz gin', '1 oz campari', '1 oz sweet vermouth', 'orange peel'],
            recipe: 'Add the gin, campari and sweet vermouth to a mixing glass filled with ice, and stir until well-chilled. Strain into a rocks glass over a large ice cube. Garnish with an orange peel.',
        },
        {
            name:'Paloma',
            image: 'https://i.imgur.com/kBsnTOU.png',
            spirit: 'tequila',
            ingredients: ['2 oz tequila blanco', '1 oz grapejuice', '1/2 oz orange juice', 'lime', '1 1/2 oz grapefruit soda'],
            recipe: 'Mix together the tequila, grapefruit juice, orange juice and lime juice. Pour over ice in a cocktail glass. Add the soda on top and serve with a grapefruit slice garnish.',
        },
        {
            name:'Tom Collins',
            image: 'https://i.imgur.com/qIuCFCM.png',
            spirit: 'gin',
            ingredients: ['2 oz gin', '1 oz lemon juice', '1/2 oz simple syrup', 'club soda'],
            recipe: 'Add the gin, lemon juice and simple syrup to a Collins glass. Fill with ice, top with club soda and stir. Garnish with a lemon wheel.',
        },
        {
            name:'Classic Martini',
            image: 'https://i.imgur.com/xpLmVp6.png',
            spirit: 'vodka',
            ingredients: ['3.5 oz vodka', '.5 oz vermouth', 'olives'],
            recipe: 'Pour ice, vodka and vermouth into a glass shaker. Shake and pour into a martini glass. Garnish with olives.',
        }
    ]

    // delete all existing cocktails
    Cocktail.deleteMany({})
        .then(deletedCocktails => {
            console.log('this is what .deleteMany returns', deletedCocktails)

            // replace with startCocktails
            Cocktail.create(startCocktails)
                .then(data => {
                    console.log('the newly created cocktails:', data)
                    db.close()
                })
                .catch(err => {
                    console.log(err)
                    db.close()
                })
                
        })
        .catch(err => {
            console.log(err)
            db.close()
        })
})