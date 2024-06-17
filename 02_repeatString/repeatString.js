const repeatString = function(inputString, numOfTimes) {
    if (numOfTimes < 0){
        return "ERROR" ;
    }
    
    res = ""
    for (let i = 0; i < numOfTimes; i += 1){
        res += inputString
    }
    return res;

};

// Do not edit below this line
module.exports = repeatString;
