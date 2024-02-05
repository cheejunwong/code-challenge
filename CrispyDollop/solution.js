function nextNumber(num) {

    // convert num to array
    let digits = num.toString().split('').map(Number);
    let pivot = -1;

    // find the pivot
    for (let i = digits.length - 2; i >= 0; i--) {
        if (digits[i] < digits[i + 1]) {
            pivot = i;
            break;
        }
    }

    // no bigger number can be formed
    if (pivot === -1) return -1;

    // find the smallest digit larger than the pivot to the right
    let nextBiggestIndex = pivot + 1;
    
    for (let i = pivot + 2; i < digits.length; i++) {
        if (digits[i] > digits[pivot] && digits[i] < digits[nextBiggestIndex]) {
            nextBiggestIndex = i;
        }
    }

    // swap the pivot with this digit
    [digits[pivot], digits[nextBiggestIndex]] = [digits[nextBiggestIndex], digits[pivot]];

    // sort the digits right of the pivot
    let right = digits.splice(pivot + 1).sort((a, b) => a - b);
    let result = parseInt(digits.concat(right).join(''), 10);

    return result;
}


// test cases
console.log(nextNumber(12));    // 21
console.log(nextNumber(513));   // 531
console.log(nextNumber(2017));  // 2071
console.log(nextNumber(9));     // -1
console.log(nextNumber(111));   // -1
console.log(nextNumber(531));   // -1
