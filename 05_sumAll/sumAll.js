const sumAll = function(start, end) {
    function isPositiveInteger(value){
        return Number.isInteger(value) && value > -1;
    }
    if (!isPositiveInteger(start) || !isPositiveInteger(end)){
        return "ERROR";
    }
    if (end < start){
        [start, end] = [end, start];
    }
    let res = 0;
    for (let i = start; i < end + 1; i++){
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
