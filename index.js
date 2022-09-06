//This is a set up for a redo of a old project, saw other ways to do it and I want to do it again but differently 
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//The above is one way to create an array

//Another way is to set up the array and then populate it with push 
let ages2 = [];
ages2.push([3, 9, 23, 64, 2, 8, 28, 93]);

//To see that they have the same values you can console.log it 
console.log(ages);
console.log(ages2);

// Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last 
//element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
//Arrays start off with 0s
//the length of an array is the amount of elements (which would be 8 elements, while the 0 based index system makes it so -1 is needed to get the last part)
console.log(ages[ages.length - 1] - ages[0]);

//This can also be made into a function 
function subFirstEleLastEleConsole(array) {
    console.log(array[array.length - 1] - array[0]);
}
//In the above one we have console.log being put to output the data, that works however return can build upon and be called within other functions 

//This is how you call function that already outputs the data to the console.log
subFirstEleLastEleConsole(ages);

//Return 
function subFirstEleLastEleReturn(array) {
    return array[array.length - 1] - array[0];
}
//In this example this is how we would return the data we would like, a return when it is simple like this can be compared to a question you ask someone
//The return will provide that answer. 


// Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

// Use a loop to iterate through the array and calculate the average age. Print the result to the console.


//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

// Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

// How do you access the last element of any array?

// How do you access the first element of any array?
