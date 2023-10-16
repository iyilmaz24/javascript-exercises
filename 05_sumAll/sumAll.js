const sumAll = function(num1, num2) {

    if(!(Number.isInteger(num1) && Number.isInteger(num2)) || !(num1 >= 0 && num2 >= 0)){
        return "ERROR";
    }

    if(num1 < num2){
        startNum = num1;
        endNum = num2; 
    }
    else{   
        startNum = num2;
        endNum = num1;
    }

    let total = 0;
    for(let i = startNum; i < endNum; i++){
        total += i;
    }
    return total + endNum;

};

// Do not edit below this line
module.exports = sumAll;
