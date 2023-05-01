function countdown(n) {

    if (n < 1) {
        return [];
    }
    else {
        let count = countdown(n - 1)
        count.push(n);

        return count
    }
}
console.log(countdown(500))




////////////////

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    }
    else {
        let countEnd = rangeOfNumbers(startNum, endNum - 1)
        countEnd.push(endNum)
        return countEnd
    }
};
console.log(rangeOfNumbers(6, 5))