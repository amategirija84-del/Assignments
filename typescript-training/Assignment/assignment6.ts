// Function to check whether the number is prime or not
function isPrime(n: number): boolean {
    // Prime numbers must be greater than 1
    if (n <= 1) {
        return false;
    }

    // Check divisibility from 2 to n
    for (let i = 2; i <n; i++) {
        if (n % i === 0) {
            return false; // Not prime
        }
    }

    return true; // Prime
}

// call function isprime()
let num: number = 1;
console.log(isPrime(num)); 