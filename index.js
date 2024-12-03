// Exercise 1
// <h3>Write a  which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>

const number = 33;

if (typeof number !== "number") {
  console.log("zovkhon too oruulna uu");
} else if (number % 3 == 0) {
  console.log("fizz");
} else if (number % 5 == 0) {
  console.log("Buzz");
} else if (number % 3 == 0 || number % 5 == 0) {
  console.log("FizzBuzz");
} else {
  console.log("Ali nd ch huvaagdahgui");
}
// Exercise 2

// Write a JavaScript conditional statement to find the largest of five numbers.
// check input numbers are the type of number, if not console.log('Invalid inputs

// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

const too5 = -5;
const too4 = -2;
const too3 = -6;
const too2 = 0;
const too1 = -1;
if (too1 > too2 && too1 > too3 && too1 > too4 && too1 > too5) {
  console.log("too 1");
} else if (too2 > too1 && too2 > too3 && too2 > too4 && too2 > too5) {
  console.log("too 2knvkbfklvrsbvhsdbv,jhbsd");
} else if (too3 > too1 && too3 > too2 && too3 > too4 && too3 > too5) {
  console.log("too 3");
} else if (too4 > too1 && too4 > too3 && too4 > too2 && too4 > too5) {
  console.log("too 4");
} else if (too5 > too1 && too5 > too3 && too5 > too4 && too5 > too2) {
  console.log("too 5");
}

// Exercise 3

// Write a JavaScript program that accept two integers and display the larger.

// check input numbers are the type of number, if not console.log('Invalid inputs)

// Sample numbers : 2,5
// Output : 5

// Exercise 4

// Write a JavaScript conditional statement to find the sign of product of three numbers.
// Display an console.log box with the specified sign.

// Sample numbers : 3, -7, 2
// Output : The sign is -

const a = 3;
const b = -7;
const c = 2;

if (a + b + c > 0) {
  console.log("+");
} else {
  console.log("-");
}
// if(typeof ){

// }

// Exercise 5

// Choose the correct comparison operator to console.log true, when x is greater than y.
// Choose the correct comparison operator to console.log false, when x is equal to y.
// Choose the correct comparison operator to console.log not sure, when x is NOT equal to y.

const x = 40;
const y = -10;

if (x > y) {
  console.log("true");
}
if (x != y) {
  console.log("false");
} else {
  console.log("zov haritsuulah too oruulna uu");
}
// Exercise 6

// The Grade Assigner
// - Write a if/else statement that:
//   - takes 1 variable, a number score.
//   - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that if/else statement for a few different scores and log the result to make sure it works.

const grade = 90;
if (grade === 100 || grade > 90) {
  console.log("A");
} else if (grade === 90 || grade > 80) {
  console.log("B");
} else if (grade === 80 || grade > 70) {
  console.log("C");
} else if (grade === 70 || grade > 60) {
  console.log("D");
} else if (grade === 60 || grade > -0) {
  console.log("F");
}
// Exercise 10 j
// Write If statement that takes string
//     if string length is more than 10 print the string  has more than 10 characters
//      if string length is more than 5 return the string has more than 5 characters
//       if string length is less than 1 return the string has nothing
//       if string length is equal to 1 return the string has 1 character

const bichver =
  "nad jbfv kjhnfke jerhifhei jhero erer erer erere e ere hgjdfgj hdfkhkj jfdhkjhdf jhfkhd hdkh";
if (bichver.length > 10) {
  console.log("10deesh bna");
}
// Exercise 7 j

//  3) Write conditional expressions to satisfy the following safety rules:

//  a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".

//  b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"

//  c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".

// Write If statement that takes number checks if the number is odd or even

//     if odd return "the number is odd"
//     if even return "the number is even"

const randomToo = 23;
if (randomToo % 2 === 0) {
  console.log("odd");
} else {
  console.log("even");
}

// Exercise 8 j

// Write if statement that takes role and return each role with greeting

//     if role is 'Employee' return 'Hello'
//     if role is 'Director' return 'Greetings'
//     if role is '' return 'Please provide role'
//     else return 'Hi'

const role = "Employee";
if (role == "Employee") {
  console.log("hello");
} else if (role == "Director") {
  console.log("Greetings");
}

// Exercise 8 j

// 0. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг,
// бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу.
// Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.
