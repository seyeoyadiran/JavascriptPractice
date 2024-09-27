// The initial numbers that must be verified.
const n1 = 10;
const n2 = 14;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.



//Here we are checking if all the numbers are divisible by 5
//Using the modulus operator to check if each number is divisible by 
const isDiv5 = (n1 % 5 == 0)  && (n2 % 5 == 0) && (n3 % 5 == 0) && (n4 % 5 == 0) 


//Checking if the first number(n1) is bigger than the last number(n2)
const largerThanLast = n1 > n4;


//The arithmetic chain  
//Subtractign the first number from the second number
//Multiply the result by the third number
//then divide the result by the fourth
let ArithChain = (((n2 - n1) * n3) % n4)

const isOver25part2 = !(n1 > 25 && n2 > 25 || n3 > 25 || n4 > 25)
const isValid = isSum50 && isTwoOdd && isOver25part2 && isUnique;

// Finally, log the results.

console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`)
console.log(isOver25);
console.log(isTwoOdd);
console.log( `Checking if the all the numbers are divisible by 5: ` + isDiv5);
console.log(`Checking if the first number(n1):` + n1 + ` is larger than the last number(n4):`+ n4 + ` The result is...` + largerThanLast);
console.log(`If we subtract n1 from n2, then multiply that result by the third number. Then finally we divide that number and return the remainder... we get the number` + ArithChain);
console.log(`Are the numbers under 25: ` + isOver25part2);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);