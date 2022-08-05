function memoize(func){
    const cache = new Map();
    return function(...args) {
        const key = args.toString();
        if(cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, func(...args));
        return cache.get(key);
    } 
 }

function add(a, b) {
    console.log('computing...');
    if(isNaN(b)) {
        return a;
    }
    return a + b;
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100,100));
console.log(memoizeAdd(100));
console.log(memoizeAdd(100,200));
console.log(memoizeAdd(100,200));
console.log(memoizeAdd(200,200));