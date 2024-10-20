function reverseString(str) {
    var reversedStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(reversedStr("hello")); 

function countCharacters(str) {
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
    }
    return count;
}
console.log(countCharacters("hello")); 
 

function capitalizeWords(sentence) {
    var capitalizedSentence = '';
    var capitalizeNext = true;
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        if (char === ' ') {
            capitalizedSentence += char; 
            capitalizeNext = true;       
        } else if (capitalizeNext) {
            capitalizedSentence += char.toUpperCase();
            capitalizeNext = false; 
        } else {
            capitalizedSentence += char;
        }
    }

    return capitalizedSentence;
}
console.log(capitalizeWords("hello world")); 

function findMax(arr) {
    var max = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([1, 2, 3, 4, 5])); 
function findMin(arr) {
    var min = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            max = arr[i];
        }
    }
    return min;
}
console.log(findMin([1, 2, 3, 4, 5])); 

function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}


console.log(sumArray([1, 2, 3, 4, 5])); 

function filterArray(arr, conditionFn) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (conditionFn(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

console.log(filterArray([1, 2, 3, 4, 5], num => num > 2));

function factorial(n) {
    if (n === 0 || n === 1) 
        return 1;
    return n * factorial(n - 1);
}


console.log(factorial(5)); 

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); 
console.log(isPrime(4)); 

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Example usage:
console.log(fibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]