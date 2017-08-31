


//function logging() {
//    console.log(arguments);
//}

function logging(...args) {
    args.unshift('hello');
    console.log(...args);
}


logging('hello');
logging('a', 'b', 1, 2);
console.log('a', 'b', 1, 2);
