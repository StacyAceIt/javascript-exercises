const fibonacci = function(fib) {
    function isAlpha(num){
        let k = +num;
        if (Number.isInteger(k) && k >= 0){
            return true;
        }
        return false;
    }
    if (!isAlpha(fib)){
        return "OOPS";
    }
    else if (fib == 1 || fib == 0){
        return +fib;
    }else{
        let a = 0;
        let b = 1;
        for (let i = 1; i < fib; i++){
            let c = a + b;
            a = b;
            b = c;
        }
        return b;

    }
};

// Do not edit below this line
module.exports = fibonacci;
