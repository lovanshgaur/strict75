function fun(nums) {
    let a  = Number.MAX_SAFE_INTEGER;
    let b  = Number.MAX_SAFE_INTEGER;

    for(let n of nums){
        if(n <= a){
            a = n
        }
        else if( n <= b){
            b = n
        }
        else{
            return true
        }
    }
    return false
}
console.log(fun([1, 2, 3, 4, 5]))
console.log(fun([5,4,3,2,1]))