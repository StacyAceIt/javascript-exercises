const palindromes = function (s) {
    if (typeof s != "string"){
        return "ERROR: input is not a string";
    }
    let str = s.toLocaleLowerCase();
    function isAlpha(char){
        return /^[a-zA-Z0-9]$/.test(char);
    }
    let l = 0;
    let r = str.length - 1;
    while (l <= r){
        while (l <= r && !isAlpha(str[l])){
            l += 1;
        }
        while (l <= r && !isAlpha(str[r])){
            r -= 1;
        }
        if (l <= r && str[l] != str[r]){
            return false;
        }
        l += 1;
        r -= 1;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
