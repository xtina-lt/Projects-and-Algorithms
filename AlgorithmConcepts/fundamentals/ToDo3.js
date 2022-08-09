/**
 * ARRAYS AND LOOPS
 */


// Given an array,
// write a function that changes all positive numbers in the array to “big”. 
// Example: makeItBig([-1,3,5,-5]) 
// returns that same array, changed to [-1,"big","big",-5].
biggieSize = arr => {
    for (i=0; i < arr.length; i++){
        if (arr[i] > 0) arr[i] ='big'
    }
    return arr
}
// console.log( biggieSize([-1,3,5,-5]) )



// Create a function that takes an array of numbers. 
// The function should print the lowest value in the array, 
// and return the highest value in the array.
printReturn = arr => {
    var min = arr[0]
    var max = arr[0]
    for (e of arr) {
        if (e > max) max = e;
        if (e < min) min = e;
    }
    console.log('min:', min)
    return `max: ${max}`
} 
// console.log( printReturn([5,4,3,2,1]) )



/* STUDY ME */
/******************
 *    ARR.PUSH()  *
 *  - ADDS TO END *
 *  - SAME ORDER  *
 *****************/
// Given an array, 
// create a function to return a new array 
// where each value in the original has been doubled. 
//Calling double([1,2,3]) should return [2,4,6] without changing original.
doubleVision = arr => {
    var arrNew = []
    for (e of arr) {
        arrNew.push(e*2)
    }
    return arrNew
}
// console.log( doubleVision([1,2,3]) )



// Given an array of numbers, 
// create a function to replace last value 
// with the number of positive values. 
//Example,  countPositives([-1,1,1,1]) 
// changes array to [-1,1,1,3] and returns it. 
countPos = arr => {
    var last = 0;
    var count = 0;
    for (i=0; i<arr.length; i++){
        if (arr[i] > 0){
            count++
            last = i
        }
    }
    arr[last] = count;
    return arr
}
// console.log( countPos([-1,1,1,1]) )




// Create a function that accepts an array. 
// Every time that array has three odd values in a row, 
// print "That’s odd!" 
// Every time the array has three evens in a row, 
// print "Even more so!"
evensOdds = arr => {
    var evens = 0
    var odds = 0
    for (e of arr) {
        if (e % 2 === 0) {
            evens++
            if (evens === 3) {
                console.log('Even more so!');
                evens = 0;
            }
        } else {
            odds++
            if (odds === 3) {
                console.log('That’s odd!');
                odds = 0;
            }
        }
    }
}
// evensOdds([2,2,2,3,3,3,2,2,2,3,3,3])




// Given arr, 
// add 1 to odd elements ([1], [3], etc.), 
// console.log all values and return arr.
incrementSeconds = arr => {
    for (i=0; i < arr.length; i++){
        if (i % 2 !== 0) arr[i] = arr[i] + i
    }
    return arr
}
// console.log( incrementSeconds([0,1,2,3,4]) ) 




/* STUDY ME */
// You are passed an array containing strings. 
// Working within that same array, 
// replace each string with a number – 
// the length of the string at previous array index – and return the array. 
previousLengths = arr => {
    var save = arr[arr.length-1]
    for (i = arr.length-1; i >= 0; i--){
        arr[i] = (i !== 0) ? arr[i-1].length :  save.length
    }
    return arr
}
// console.log( previousLengths(['xtina', 'codes', 'is', 'awesome']) ) 




// Build a function that accepts an array. 
// Return a new array with all values except first, 
// adding 7 to each. 
// Do not alter the original array. 
sevenAndSeven = arr => {
    arrNew = []
    for (e of arr) arrNew.push(e+7)

    return arrNew
}
// console.log( sevenAndSeven([1,1,1,1]) )



/* STUDY ME */
// Given array, write a function to reverse values, in-place. 
// Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].
reverse = arr => {
    for (let i=0;  i < arr.length / 2; i++) {
        temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp;
    }

    return arr
}
// console.log( reverse([1,2,3,4,5]) )



// Given an array, 
// create and return a new one 
// containing all the values of the provided array, 
// made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
makeNegative = arr => {
    for (i=arr.length-1; i >=0; i--){
        arr[i] = -Math.abs(arr[i])
    }

    return arr
}
// console.log( makeNegative([1,2,3,4,5]) )




// Create a function that accepts an array, 
// and prints "yummy" each time one of the values is equal to "food". 
// If no array elements are "food", then print "I'm hungry" once. 
alwaysHungry = arr => {
    var result = false;
    for (i=arr.length-1; i >= 0; i--){
        if (arr[i] === 'food') {
            console.log('yummy');
            result = true;
        }
    }
    if (!result) console.log("I'M HUNGRY")
}
// alwaysHungry(['food', 1, 2, 'food'])
// alwaysHungry([1, 1, 2, 2])




// Given array, swap first and last, third and third-tolast, etc. 
// Input[true,42,"Ada",2,"pizza"] 
// becomes ["pizza",42,"Ada",2,true].  
// Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
swap = arr => {
    for (i=0; i<arr.length/2; i++){
        temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }

    return arr
}
// console.log( swap([1,2,3,4,5]) )





// Given array arr and number num, 
// multiply each arr value by num, 
// and return the changed arr.
scale = (arr, num) => {
    for (i = arr.length-1; i >= 0; i--){
        arr[i] = arr[i] * num
    }

    return arr
}
console.log( scale([1,2,3,4], 2) )