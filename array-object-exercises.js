/* ============================
   🔹 ARRAY QUESTIONS
   ============================ */

// 1. Print array elements using a for loop
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArray([10, 20, 30, 40]);


// 2. Find array length without using .length directly
function getArrayLength(arr) {
  let count = 0;
  for (const _ of arr) {
    count++;
  }
  return count;
}
console.log(getArrayLength([1, 2, 3, 4, 5])); // 5


// 3. Reverse an array without using .reverse()
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]


// 4. Sum of all numbers in an array
function sumArray(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15


// 5. Filter only even numbers from an array
function filterEvens(arr) {
  const evens = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
console.log(filterEvens([1, 2, 3, 4, 5, 6])); // [2, 4, 6]


/* ============================
   🔹 OBJECT QUESTIONS
   ============================ */

// 1. Access object properties
const student = {
  name: "Alex",
  age: 21,
  grade: "A"
};
console.log(student.name);
console.log(student.age);
console.log(student.grade);


// 2. Loop through all keys and values of an object using for...in
function printObject(obj) {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
printObject(student);


// 3. Object with methods: calculator
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => b !== 0 ? a / b : "Cannot divide by zero"
};
console.log(calculator.add(5, 3));       // 8
console.log(calculator.subtract(5, 3));  // 2
console.log(calculator.multiply(5, 3));  // 15
console.log(calculator.divide(6, 3));    // 2


// 4. Nested objects - accessing values inside nested objects
const studentWithAddress = {
  name: "Priya",
  age: 22,
  address: {
    city: "Mumbai",
    zip: "400001"
  }
};
console.log(studentWithAddress.address.city); // Mumbai
console.log(studentWithAddress.address.zip);  // 400001


// 5. Convert object's keys and values into separate arrays
function objectToArrays(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return { keys, values };
}
console.log(objectToArrays(student));
// { keys: ['name', 'age', 'grade'], values: ['Alex', 21, 'A'] }
