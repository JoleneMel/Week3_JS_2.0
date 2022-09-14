//This is a set up for a redo of a old project, saw other ways to do it and I want to do it again but differently 
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
/*The above is one way to create an array */

/*Another way is to set up the array and then populate it with push */ 
let ages2 = [];
ages2.push(3, 9, 23, 64, 2, 8, 28, 93);

/* To see that they have the same values you can console.log it */ 
console.log("ages array below");
console.log(ages);
console.log("ages2 array below");
console.log(ages2);

// Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last 
//element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
console.log("");
//The above is just to add some spacing 
console.log("Programmatically subtract the value of the first element in the array from the value in the last element of the array");
/*Arrays start off with 0s
the length of an array is the amount of elements (which would be 8 elements, while the 0 based index system makes it so -1 is needed to get the last part)
As you can see below we can use this logic to make a function */

console.log("With just the logic", + ages[ages.length - 1] - ages[0]);

/* Functions use (parameters) a parameter is the named placeholder for whatever data you want to pass into the function. 

For that reason there are very few occasions where you want to define a parameter within a function, it makes the function which we want to be
reusable to now only output one time, which is not the optimal way to program. Makes the function not as useful as it could be. 

Console.logs used within functions also can hinder the power of a function, this can make it so it can not properly pass on information to 
another function and only output the data to the console. 

The code is exucuted within the {}, thats the point of the function to do what is within the function, Also when within {} that is within the function scope unlike 
ages and ages2 which are in the global scope of the project. 
*/

/*This can also be made into a function without ES6 you will need to declare it as a function */
function subFirstEleLastEleConsole(array) {
    console.log(array[array.length - 1] - array[0]);
}
/*In the above one we have console.log being put to output the data, that works however return can build upon and be called within other functions 

This is how you call function that already outputs the data to the console.log
*/
console.log("Console.log function")
subFirstEleLastEleConsole(ages);

/*Return utilizing ES6 rules */
let subFirstEleLastEleReturn = (array) => {
    return array[array.length - 1] - array[0];
}
/*In this example this is how we would return the data we would like, a return when it is simple like this can be compared to a question you ask someone
The return will provide that answer. 

This is how you call a function without a console.log
*/
console.log("With the return function", + subFirstEleLastEleReturn(ages2));


// Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(33);
ages2.push(78);
console.log("");
//Since I had made this into a function I do not need to restate the logic but rather call the functions again below
console.log("After I added numbers to the arrays");
console.log("Console.log function");
subFirstEleLastEleConsole(ages);

console.log("With the return function", +subFirstEleLastEleReturn(ages2));
console.log("");
// Use a loop to iterate through the array and calculate the average age. Print the result to the console.

/*There are a multitude of ways to accomplish this we will need something to hold our total for the calculations*/
let total = 0;
/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 https://www.w3schools.com/jsref/jsref_foreach.asp
 */
/*Simply the forEach is doing the same action on every item or element in the array, in this instance we are adding to the total 
*/
ages.forEach(item => total += item); 
//Then we take the total and divide by the amount of elements within the array aka array/length
console.log('Average is: ' + ' ' + total / ages.length + "using the .forEach"); 
console.log("");
/* Or a for loop or while loop */
let sum = 0; 
for(let i = 0; i < ages2.length; i++) {
    sum += ages2[i];
}//We need to do the average calulation outside of the loop 
console.log("Using a incrementing for loop to find the average", + sum/ ages2.length);
//Going backwards
let sum2 = 0; 
for(let i = ages2.length-1; i >= 0; i--) {
    sum2 += ages2[i];
}//We need to do the average calulation outside of the loop 
console.log("Using a decrementing for loop to find the average", + sum2/ ages2.length);
console.log("");

let sum3 = 0; 
let i = 0;
while(i < ages.length) {
    sum3 += ages[i];
    i++;
}
console.log("Using a incrementing while loop to find the average", + sum3/ ages.length);

let sum4 = 0; 
let j = ages.length - 1;
while(j >= 0) {
    sum4 += ages[j];
    j--;
}
console.log("Using a decrementing while loop to find the average", + sum4/ ages.length);
console.log("");

let sum5 = 0;
let x = 0;
do {
  sum5 += ages[x];
  x++;
}
while (x < ages.length); 
console.log("Using a incrementing do while loop to find the average", + sum5/ ages.length);

let sum6 = 0;
let y = ages.length - 1;
do {
  sum6 += ages[y];
  y--;
}
while (y >= 0); 
console.log("Using a decrementing do while loop to find the average", + sum6/ ages.length);
console.log("")

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

console.log("Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.");
//+= shorter way, => points to function 
let totesLetters = 0;
names.forEach(item => totesLetters += item.length); 

console.log('Average letters is: ' + totesLetters / names.length); 

/* Or a for loop or while loop */
let sumLetters = 0; 
//need to use names[i].length since it is a string to convert it to a number 
for(let i = 0; i < names.length; i++) {
    sumLetters += names[i].length;
}//We need to do the average calulation outside of the loop 
console.log("Using a incrementing for loop to find the average", + sumLetters/ names.length);
//Going backwards
let sumLetters2 = 0; 
for(let i = names.length-1; i >= 0; i--) {
    sumLetters2 += names[i].length;
}//We need to do the average calulation outside of the loop 
console.log("Using a decrementing for loop to find the average", + sumLetters2/ names.length);
console.log("");

let sumLetters3 = 0; 
let a = 0;
while(a < names.length) {
    sumLetters3 += names[a].length;
    a++;
}
console.log("Using a incrementing while loop to find the average", + sumLetters3/ names.length);

let sumLetters4 = 0; 
let b = names.length - 1;
while(b >= 0) {
    sumLetters4 += names[b].length;
    b--;
}
console.log("Using a decrementing while loop to find the average", + sumLetters4/ names.length);
console.log("");

let sumLetters5 = 0;
let c = 0;
do {
    sumLetters5 += names[c].length;
  c++;
}
while (c < names.length); 
console.log("Using a incrementing do while loop to find the average", + sumLetters5/ names.length);

let sumLetters6 = 0;
let d = names.length - 1;
do {
    sumLetters6 += names[d].length;
  d--;
}
while (d >= 0); 
console.log("Using a decrementing do while loop to find the average", + sumLetters6/ names.length);
console.log("");

console.log("Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.");

let namesGoAround = '';
names.forEach(item => namesGoAround += item + ' '); 
console.log(namesGoAround);

/* Or a for loop or while loop */
let space = ""; 
//need to use names[i].length since it is a string to convert it to a number 
for(let i = 0; i < names.length; i++) {
    space += names[i] + " ";
}//We need to do the average calulation outside of the loop 
console.log("Using a incrementing for loop " + space);
//Going backwards
let space2 = ""; 
for(let i = names.length-1; i >= 0; i--) {
    space2 += names[i] + " ";
}//We need to do the average calulation outside of the loop 
console.log("Using a decrementing for loop " + space2);
console.log("");

let space3 = "";
let e = 0;
while(e < names.length) {
    space3 += names[e] + " ";
    e++;
}
console.log("Using a incrementing while loop " + space3);

let space4 = "";
let f = names.length - 1;
while(f >= 0) {
    space4 += names[f] + " ";
    f--;
}
console.log("Using a decrementing while loop " + space4);
console.log("");

let space5 = "";
let g = 0;
do {
    space5 += names[g] + " ";
  g++;
}
while (g < names.length); 
console.log("Using a incrementing do while loop " + space5);

let space6 = "";
let h = names.length - 1;
do {
    space6 += names[h] + " ";
  h--;
}
while (h >= 0); 
console.log("Using a decrementing do while loop " + space6);
console.log("");

//easy way to create an empty array
let nameLengths = [];

//Write a loop to iterate over the previously created names array 
 names.forEach(item => nameLengths.splice(nameLengths.length, 0, item.length));
 console.log(nameLengths);

 let nameTotal = 0;
 nameLengths.forEach(item => nameTotal += item.length);
 console.log(nameTotal);
 
// How do you access the last element of any array?
//https://flexiple.com/javascript/get-last-array-element-javascript/

//The usual way 
let arry = [2, 4, 6, 8, 10, 12, 14, 16];
console.time('array length property');
let lastElement = arry[arry.length - 1];
console.log(lastElement);
//this will prove which is the fastest, thus perfect performance times
console.timeEnd('array length property');

//The slice() method returns specific elements from an array, as a new array object. This method selects the elements 
// starting at the given start index and ends at the given end index excluding the element at the end index. 
// The slice() method does not modify the existing array. Providing one index value returns the element at that 
// position & a negative index value calculates the index from the end of the array.
console.time('array slice method');
let lastElement1 = arry.slice(-1);
console.log(lastElement1);
console.timeEnd('array slice method');


// The pop() method pops/removes the last element of an array, and returns it. This method changes the length of the array.
console.time('array pop method');
let lastElement2 = arry.pop();
console.log(lastElement2);
console.timeEnd('array pop method');

//While the first method is the slowest it tends to be what is first learned, and always works 
//.slice is slightly slower then pop BUT it does not alter your array while pop does, soooooo .slice is the most efficient way when you do not want
//alter the array
//.pop is the fastest way but alters the array if the array being altered is not a problem then it is best. 

// How do you access the first element of any array?
//