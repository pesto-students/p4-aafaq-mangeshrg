let i = 2;
let fib = [0, 1]; // Initialize array!

let fibItr = {
        [Symbol.iterator]() {
            this.limit = 10;
            return this;
        },
        next() {
            fib[i] = fib[i - 2] + fib[i - 1];
            i++;
            return { value : fib[i - 1], done : i < this.limit };
        }
    }

fibItr.next();
fibItr.next();
fibItr.next();
fibItr.next();
fibItr.next();
fibItr.next();
fibItr.next();
fibItr.next();
fibItr.next();
console.log(fib);
