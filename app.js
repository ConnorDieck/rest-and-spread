const filterOutOdds = (...nums) => {
    return nums.filter(function(num) {
      return num % 2 === 0
    });
}

const findMin = (...nums) => nums.reduce((min, next) => min < next ? min : next);

const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

const doubleAndReturnArgs = (arr, ...rest) => {
    const double = rest.map((num) => num * 2);
    return [arr, ...double];
}

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    const randomInd = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomInd), ...items.slice(randomInd + 1)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) =>  ({...obj, [key]: val});


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}