function fun (flowerbed, n) {
    let a = flowerbed.length;

    for (let i = 0; i < a; i++) {
        if (flowerbed[i] === 0) {
            let left = (i === 0) || flowerbed[i - 1] === 0;
            let right = (i === a - 1) || flowerbed[i + 1] === 0;

            if (left && right) {
                flowerbed[i] = 1; 
                n--;
            }
        }

        if (n <= 0) return true;
    }

    return false;
};
