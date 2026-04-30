/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if( x < 2){
        return x;
    }

    let l = 2;
    let r = Math.floor(x/2);

    while(l <= r){
        let m = l + Math.floor((r - l)/2);
        let square = m * m;

        if(square == x){
            return m;
        }

        // it means we need to move in right as there is more nearer ans exsit
        if(square < x){
            l = m + 1;
        } else{
            r = m - 1;
        }
    }

    return r;
};