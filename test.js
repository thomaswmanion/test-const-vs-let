// Bubble Sort with `const`
const bubbleSortConst = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

// Bubble Sort with `let`
const bubbleSortLet = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

// Generate a random array
const generateArray = (size) => {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
};

// Measure performance
const measurePerformance = (sortFunction, array) => {
    const start = process.hrtime.bigint();
    sortFunction([...array]); // Use a copy of the array
    const end = process.hrtime.bigint();
    return end - start;
};

// Run performance test
const arraySize = 1000;
const testArray = generateArray(arraySize);
const iterations = 100;

let totalConstTime = 0n;
let totalLetTime = 0n;

for (let i = 0; i < iterations; i++) {
    totalConstTime += measurePerformance(bubbleSortConst, testArray);
    totalLetTime += measurePerformance(bubbleSortLet, testArray);
}

console.log(`Average time with const: ${totalConstTime / BigInt(iterations)} nanoseconds`);
console.log(`Average time with let: ${totalLetTime / BigInt(iterations)} nanoseconds`);
