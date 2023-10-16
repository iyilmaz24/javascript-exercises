const removeFromArray = function(array, ...args) {

    returnArray = array.filter((item) => !args.includes(item));

    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
