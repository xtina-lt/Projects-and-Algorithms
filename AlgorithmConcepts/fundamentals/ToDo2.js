/**********************************************
 * ARRAYS:
 * object 
 * that enables storing a collection of items 
 * under a single variable name.
 */
arrPlay = ()=>{
    var arr = [1,2,3,4,5]
    // access element arr[index]
    console.log( arr[0] )
    // update element arr[index]
    arr[0] = 'AWESOME'
    // LOOP
    for (e of arr) {
        console.log(e) 
    }

    /*************************
     * METHODS
     */
    // get length arr.length
    console.log( arr.length )

    // add to end
    arr.push('xtina')
    // console.log(arr)

    // remove from end
    arr.pop()
    // console.log(arr)
}




/*************************
 * FUNDAMENTALS PRACTICE *
 *************************/
// Create a function that accepts a number as an input. 
// Return a new array that counts down by one, 
// from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). 
// How long is this array? 
countdown = (num) =>{
    var newArr = []
    var count = 0;
    for (var i=num; i >= 0; i--){
        newArr.push(i);
        count++
    }
    return count;
}
// console.log(countdown(5))


//Given an array, 
// return the sum of the first value in the array, 
// plus the array’s length. 
// What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false). 
firstPlusLength = (arr) =>{
    return (isNaN(arr[0])) ? 'Not A Number' : arr.length+arr[0];
}
// console.log(firstPlusLength(['xtina',2,3]))
// console.log(firstPlusLength([1,2,3]))

valsGreaterThanSecond = () => {
    arr = [1,3,5,7,9,13]
    count = 0;
    for (e of arr) {
        if (e > arr[1]) count++
    }
    return count
}
// console.log( valsGreaterThanSecond() )

// generalize 
// can be the same name as long as different params
valsGreaterThanSecond = (arr) => {
    count = 0;
    for (e of arr) {
        if (e > arr[1]) count++
    }
    return count
}
// console.log( valsGreaterThanSecond([1,2,3]) )


// Given two numbers, 
// return array of length num1 with each value num2. 
// Print "Jinx!" if they are same. 
lengthVal = (num1, num2) =>{
    arr = [];
    for (i=0; i < num1; i++) arr.push(num2)
    return (num1 === num2) ? 'Jinx!' : arr
}
// console.log( lengthVal(2,1) )
// console.log( lengthVal(2,2) )


// Kelvin wants to convert between temperature scales. 
// Create fahrenheitToCelsius(fDegrees) 
// that accepts a number of degrees in Fahrenheit 
// and returns the equivalent temperature  Celsius degrees. 
// For review, Fahrenheit = (9/5 * Celsius) + 32.
fahrToCels = (f) =>{
    return (5 / 9) * (f - 32)
}
// same at -40
console.log(fahrToCels(-40))

celsToFahr = (c) => {
    return 9/5 * c + 32
}
console.log( celsToFahr(-40) )











