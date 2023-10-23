

const fibonacci = function(count){

    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    num1st = 1
    num2nd = 0

    for(let i = 2; i <= count; i++){
        let current = num1st + num2nd
        num2nd = num1st
        num1st = current
    }
    return num1st
}


// Do not edit below this line
module.exports = fibonacci;
