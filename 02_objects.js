//! Objects
let marvelHero = {
    fullName: "Peter Parker",
    codeName: "Spider-Man",
    age: 25,
    active: true
}

/* 
    - Object Literal
        When our values are written within our keys. "Hard Coded"

    Structure:

    keyword objectName = {
        key: value,
    }

    - Dictionaries.
*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        "season one": [
            {
                episode_title: 'Simpsons Roasting on an Open Fire',
                aired: '1989-12-17'
            },
            {
                episode_title: 'Bart the Genius',
                aired: '1990-01-01'
            },
        ],
        "season two":[/* mock info */],
        "season three":[/* mock info */],
    },
    currently_running: true,
}

// keys are consider "strings".
//* Dot Notation and Square Bracket Notation

console.log(theSimpsons.genre); // object.key
console.log(theSimpsons["genre"]); // object["key"]
// console.log(theSimpsons[genre]); // looking for a variable.

console.log(theSimpsons.seasons["season one"]);
console.log(theSimpsons.seasons["season one"][1].episode_title);

theSimpsons.character = [
    'Homer', "Marge", "Bart", "Lisa", "Maggie"
];
console.log(theSimpsons);

theSimpsons.character.push("Ned Flanders");
console.log(theSimpsons.character);

theSimpsons.seasons["season one"][1].aired = "1990-01-14";
console.log(theSimpsons.seasons["season one"][1].aired)
console.log(theSimpsons.seasons["season one"][1]);

//! Methods
//* Object.keys()
// - Pass an object as an argument into the method.
console.log('KEYS: ', Object.keys(theSimpsons)); // returns an array of the objects keys.

//* Object.values()
console.log('Values: ', Object.values(theSimpsons)); // returns an array of the objects values within the keys.

//* Object.create()
const futurama = Object.create(theSimpsons);
futurama.id = 2;
futurama.est = 1999;
console.log(futurama);

//* delete object.key
futurama.currently_running = false;

console.log("BEFORE: ", Object.keys(futurama));
delete futurama.currently_running;
console.log("AFTER: ", Object.keys(futurama));

//! Destructuring
const { character, seasons } = theSimpsons;
console.log(character);
console.log(seasons);

let newPos = theSimpsons.character; // only targets the value of the key.

character.push('Meo'); //TYPO
// console.log(character);
character[6] = "Moe"; // changes the original object value.
console.log(character);
console.log('OBJ: ', theSimpsons.character);

// Changing the Key
const { est: established, currently_running: on_air  } = theSimpsons;

console.log("Established: ", established);
console.log("On Air: ", on_air);
console.log('OBJ: ', theSimpsons); // doesn't change the original object.

//! Spread with Objects
const simpsonsCharacters = {
    simpsonHouse: ['Homer', 'Marge', "Bart", 'Lisa', "Maggie"],
    moesTavern: ['Moe', 'Barney']
}

const generalLocations = {
    park: "statue",
    beach: "dock",
    lake: "3-eyed fish"
}

const locations = {
    ...simpsonsCharacters,
    dmv: ['Patty', 'Selma'],
    ...generalLocations
}

console.log(locations);
