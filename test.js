let y = 20;
let value = 0; 
// "value here?" - yes

function myFunction(x) {
    // is there "value" here? No...
    let value = 9;

    if(x !== y) {
        // no variable called "value"
        value++
    }
    console.log(value, "in function")
}

myFunction(8);
myFunction(18);
myFunction(12);
myFunction(1);
myFunction(100);

console.log(value);
