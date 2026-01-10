function fun(chars) {
    let write = 0
    let read = 0

    while (read < chars.length) {
        let char = chars[read]
        let count = 0

        while (read < chars.length && chars[read] === char) {
            read++
            count++
        }
        chars[write] = char;
        write++

        if(count > 1){
            const countStr = count.toString();
            for (let c of countStr) {
                chars[write] = c;
                write++
            }
        }
    }

    return write;

}

console.log(fun(["a", "a", "b", "b", "c", "c", "c"]))