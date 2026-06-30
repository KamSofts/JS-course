const add = (a, b, cb) => {
    setTimeout(() => {
        result = a + b;
        cb(result);
    }, 1000);
};

const print = (output) => {
    console.log(output);
}

add(2, 3, print);