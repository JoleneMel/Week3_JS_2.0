//This is a set up for a redo of a old project, saw other ways to do it and I want to do it again but differently 
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
/*The above is one way to create an array */

/*Another way is to set up the array and then populate it with push */ 
let ages2 = [];
ages2.push([3, 9, 23, 64, 2, 8, 28, 93]);

/* To see that they have the same values you can console.log it */ 
console.log("ages array below");
console.log(ages);
console.log("ages2 array below");
console.log(ages2);

// Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last 
//element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

/*Arrays start off with 0s
the length of an array is the amount of elements (which would be 8 elements, while the 0 based index system makes it so -1 is needed to get the last part)
As you can see below we can use this logic to make a function */
console.log(ages[ages.length - 1] - ages[0]);

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
subFirstEleLastEleConsole(ages);

/*Return utilizing ES6 rules */
let subFirstEleLastEleReturn = (array) => {
    return array[array.length - 1] - array[0];
}
/*In this example this is how we would return the data we would like, a return when it is simple like this can be compared to a question you ask someone
The return will provide that answer. 

This is how you call a function without a console.log
*/
console.log(subFirstEleLastEleReturn(ages2));


// Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push([33]);
ages2.push([78]);

//Since I had made this into a function I do not need to restate the logic but rather call the functions again below
console.log("After I added numbers to the arrays")
subFirstEleLastEleConsole(ages);
console.log(subFirstEleLastEleReturn(ages2));

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
console.log('Average is: ' + ' ' + total / ages.length, + "using the .forEach"); 

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

// Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

// How do you access the last element of any array?

// How do you access the first element of any array?
