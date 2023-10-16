const reverseString = function(inputString) {

    let returnString = [];

    for(let i = inputString.length;  i !== 0 ; i--){
        returnString.push(inputString[i-1]);
    }
    
    return (returnString.join(""));

};

// Do not edit below this line
module.exports = reverseString;
