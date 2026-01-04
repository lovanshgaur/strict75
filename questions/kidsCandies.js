function fun(candies, extraCandies) {
    let i = candies.length;
    let result = []
    const max = Math.max(...candies);


    for (n = 0; n < i; n++) {
        let total = candies[n] + extraCandies;
        if (total >= max) {
            result.push(true)
        }
        else {
            result.push(false)
        }
    };
    console.log(result)
    return result 
};

fun([2, 3, 5, 1, 3], 3)