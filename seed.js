const spirits = [
    {
        name: 'Vodka',
        image: 'image here',
    },
    {
        name: 'Whiskey',
        image: 'image here',
    },
    {
        name: 'Gin',
        image: 'image here',
    },
    {
        name: 'Tequila',
        image: 'image here',
    },
    {
        name: 'Rum',
        image: 'image here',
    }
]

const cocktails = [
    {
        name:'Margarita',
        image: 'image here',
        spirit: spirits[3],
        ingredients: ['2 oz tequila', 'salt', '1 oz triple ', 'lime'],
        recipe: 'Rub the rim of the glass with the lime slice and coat it with salt. Shake the other ingredients with ice and carefully pour into the glass. Garnish with a lime.',
    },
    {
        name:'Old-Fashioned',
        image: 'image here',
        spirit: spirits[1],
        ingredients: ['1 tsp sugar', '3 dashes of bitters', '1 tsp water, 2oz bourbon, orange twist'],
        recipe: 'Add the sugar and bitters into a mixing glass, then add the water, and stir until the sugar is nearly dissolved. Fill the mixing glass with ice, add the bourbon, and stir until well-chille. Strain into a rocks glass over one large ice cube. Express the oil of an orange twist over the glass, then drop into the glass to garnish',
    },
    {
        name:'Long Island Iced Tea',
        image: 'image here',
        spirit: (spirits[0], spirits[2], spirits[3], spirits[4]),
        ingredients: ['1/2 oz vodka', '1/2 oz rum', '1/2 oz gin', '1/2 oz tequila', 'lemon', 'coca-cola'],
        recipe: 'Combine all ingredients (except coca-cola) and pour over ice in a tall glass then add a splash of coca cola. Garnish with a slice of lemon.',
    },
    {
        name:'Cosmopolitan',
        image: 'image here',
        spirit: spirits[0],
        ingredients: ['2 oz vodka', '1/2 oz triple sec', '3/4 oz cranberry juice', '1/2 oz lime juice'],
        recipe: 'Add all ingredients into cocktail shaker filled with ice. Shake well and double strain into large cocktail glass. Garnish with lime peel twist.',
    },
    {
        name:'Mai Tai',
        image: 'image here',
        spirit: spirits[4],
        ingredients: ['1 1/2 oz light rum', '1/2 oz dark rum', '1/2 oz orange liqueur', '3/4 oz triple sec', '3/4 oz lime juice', '1 1/2 oz pineapple juice'],
        recipe: 'Add all ingredients into cocktail shaker filled with ice. Shake well and strain into glass. Garnish with a pineapple wedge and maraschino cherries, then serve with straw.',
    },
    {
        name:'Manhattan',
        image: 'image here',
        spirit: spirits[1],
        ingredients: ['2 oz whiskey', '1 oz sweet vermouth', '2 dashes bitters', 'brandied cherries'],
        recipe: 'Add the rye whiskey, sweet vermouth, and bitters into a mixing glass with ice and stir until well-chilled. Garnish with brandied cherries.',
    },
    {
        name:'Mint Julep',
        image: 'image here',
        spirit: spirits[1],
        ingredients: ['2 1/2 oz whiskey', '10 mint leaves', '1 1/2 oz tsp sugar', 'seltzer water'],
        recipe: 'Place the mint leaves in the bottom of an old-fashioned glass and top with the sugar. Muddle these together until the leaves begin to break down. Add a splash of seltzer water, fill the glass 3/4 full with crushed ice, and add the bourbon. Top with another splash of seltzer, stir, and garnish with a sprig of mint.',
    },
    {
        name:'Mojito',
        image: 'image here',
        spirit: spirits[4],
        ingredients: ['2 oz light rum', '5 mint leaves', '1/2 oz simple syrup', '3/4 oz lime juice', 'club soda'],
        recipe: 'Lightly muddle the mint with the simple syrup in a shaker. Add the rum, lime juice and ice, and give it a brief shake, then strain into a tall glass over fresh ice. Top with club soda then garnish with a mint sprig and lime wedge.',
    },
    {
        name:'Moscow Mule',
        image: 'image here',
        spirit: spirits[1],
        ingredients: ['1 1/2 oz vodka', 'lime wedge', '3 oz ginger beer'],
        recipe: 'Put the vodka in a copper mug. Squeeze the lime over the vodka. Add ice and top with the ginger beer. Add 2-3 lime wedges on top.',
    },
    {
        name:'Negroni',
        image: 'image here',
        spirit: spirits[2],
        ingredients: ['1 oz gin', '1 oz campari', '1 oz sweet vermouth', 'orange peel'],
        recipe: 'Add the gin, campari and sweet vermouth to a mixing glass filled with ice, and stir until well-chilled. Strain into a rocks glass over a large ice cube. Garnish with an orange peel.',
    },
    {
        name:'Paloma',
        image: 'image here',
        spirit: spirits[4],
        ingredients: ['2 oz tequila blanco', '1 oz grapejuice', '1/2 oz orange juice', 'lime', '1 1/2 oz grapefruit soda'],
        recipe: 'Mix together the tequila, grapefruit juice, orange juice and lime juice. Pour over ice in a cocktail glass. Add the soda on top and serve with a grapefruit slice garnish.',
    },
    {
        name:'Tom Collins',
        image: 'image here',
        spirit: spirits[4],
        ingredients: ['2 oz gin', '1 oz lemon juice', '1/2 oz simple syrup', 'club soda'],
        recipe: 'Add the gin, lemon juice and simple syrup to a Collins glass. Fill with ice, top with club soda and stir. Garnish with a lemon wheel.',
    },
]






