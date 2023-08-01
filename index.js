//! Q.1 : Sum of all natural numbers from 1 to n

function sumOfNaturalNumbers(num) {
    // method 1
    let sum = 0;
    for (i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;

    // method 2 (using math formula)
    // return (num * (num + 1)) / 2;
}

console.log(sumOfNaturalNumbers(10));

//! Q.2 : Sum of digits of a number
// hint: 1234 - 1+2+3+4 = 10

function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(sumOfDigits(12));

//! Q.3 Count the number of digits of a number
// hint 32454 = 5

function countDigits(num) {
    num = Math.abs(num);
    let count = 0;
    do {
        count++;
        num = Math.floor(num / 10);
    } while (num > 0);
    return count;
}

console.log(countDigits(5432));

//! Q.4 Given an interger `x`, return `true` if it is a palindrome, and `false` otherwise
// hint: 121 = true (palindrome because its same from both the sides, ltr and rtl)
//       10 = false (ltr 10, rtl 01)
//      -121 = flase (ltr -121, rtl 121-)

const isPalindrome = (x) => {
    let copyNum = x,
        reverseNum = 0;
    while (copyNum > 0) {
        const lastDigit = copyNum % 10;
        reverseNum = reverseNum * 10 + lastDigit;
        copyNum = Math.floor(copyNum / 10);
    }
    return x === reverseNum;
};
console.log(isPalindrome(121));

//! Q.5 Find Fibonacci number
// hint: Fibonacci number is a sequence in which each number is the sum of the two preceding ones starting from 0 and 1.
// i.e. 0 1 1 2 3 5 8 ....
// 0+1, 1+1, 1+2, 2+3, 3+5, ...
// F(n)= F(n-1) + F(n-2), for n>1

function fibonacciNum(n) {
    if (n < 2) {
        return n;
    }
    let prev1 = 0,
        prev2 = 1,
        curr;

    for (let i = 2; i <= n; i++) {
        curr = prev1 + prev2;
        prev1 = prev2;
        prev2 = curr;
    }
    return curr;
}

console.log(fibonacciNum(8));

//! Q.6 Find Missing number from an array of range [0,n]
// hint: [3,0,1] = 2 (there are three numbers present, so the range should be 1,2,3)
// [0,1] = 2 ( there are two numbers present, so the range must be 1,2 )

function missingNum(nums) {
    // [3,0,1] = 2
    // find the sum of all elements in the array; 3+0+1 = 4
    // find sum of n elements n(n-1)/2; 3(3-1)/2 = 6
    // 6 - 4 = 2 (missing number)

    let sum = 0;

    nums.forEach((e) => (sum += e));
    console.log(nums.length);

    // n * (n-1) / 2, here (nums.length+1)=n
    return ((nums.length + 1) * nums.length)/2 - sum;
}

console.log(missingNum([3, 0, 1]));
