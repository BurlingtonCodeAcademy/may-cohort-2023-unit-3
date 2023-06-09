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