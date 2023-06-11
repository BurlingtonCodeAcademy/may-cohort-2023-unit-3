let abcs = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r,','s','t','u','v','w','x','y','z'
];
// console.log(abcs);
let pulledLetters = [];

const findLetter = () => {
    let num = Math.floor(Math.random() * abcs.length - 1);
    // console.log(num);
    let returnedLtr = abcs[num];
    abcs.splice(num,1);

    pulledLetters.push(returnedLtr);

    // return `Coming from findLetter function`
    return returnedLtr.toUpperCase();
}


function getLetter() {
    let ltr = findLetter();

    let res = `Your letter is ${ltr}. \nHere are the pulled letters: ${pulledLetters}. \n Here is what remains: ${abcs}.`;

    // console.log("Hello, they said, \"Quote\".")

    // return "See the return"
    return res
}