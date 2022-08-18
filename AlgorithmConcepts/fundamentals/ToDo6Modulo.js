// messyMath(num) that will return the following sum: 
// add all integers from 0 up to the given num, 
// except for the following special cases of our count value
// if current count (not num) is evenly divisible by 3, 
// -> don’t add to the sum; skip to the next count;
// if the current count is evenly divisible by 7, 
// -> include it twice in sum instead of once;
// Regardless of the above, 
// if the current count is exactly 1/3 of num, 
// -> return -1 immediately. 

messyMath = num => {
    sum = 0;
    count = 0;
    third = num * (1/3)

    while (count <= num){
        if (count === third){
            sum = -1;
            break;
        } else if (count %  7 === 0) {
            sum += (count*2)
            console.log(`%7, count: ${count}, sum: ${sum}`)
        } else if (count % 3 === 0){
            console.log(`%3, count: ${count}, sum: ${sum}`)
        } else {
            sum++
            console.log(`count: ${count}, sum: ${sum}`)
        }
        count++
    }
    return sum
}
// console.log( messyMath(8) )


// Write a function that console.logs the number 1, 
// -> then "chick", then "boom", then "chick", 
// then 2, then "chick", "boom", "chick" – 
// continuing the same cycle for each number up to (including) 12.
twelveBarBlues = () => {
    arr = ['chick', 'boom', 'chick']
    for (i = 1; i <= 12; i++){
        console.log(i)
        for (e of arr) console.log(e)
    }
}
// twelveBarBlues()

/**************************
 *        RECURSION       *
 *  using the same method *
 *   inside a the method  *
***************************/

// each number is the sum of the previous two, starting with values 0 and 1
// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), 
// fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
// fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), 
// fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), 
// fibonacci(7) = 13 (5+8), etc. 
fibonacci = num => {
    if (num < 2) {
        return num
    } else {
        return fibonacci(num-1) + fibonacci(num-2)
    }
    // return (num < 2) ? num : fibonacci(num-1) + fibonacci(num-2)
}
// console.log( fibonacci(7) )


sumToOne = str => {
    sum = 0;
    for ( i of str.toString() ) {
        sum += Number(i)
    }
    while (sum.toString().length > 1){
        sum = sumToOne(sum)
    }
    return sum
}

// console.log( sumToOne(928) )


// https://www.pinterest.com/pin/567172146822809864/
// paramseconds past 0000
clockAngle = num => {
    sec = Math.floor(num % 60)
    min = Math.floor( (num / 60) % 60 )
    hr = Math.floor( (num /(60*60)) % 12 )

    circle = 360
    anglePerHr = circle / 12
    anglePerMin = circle / 60

    hrHand = hr * anglePerHr
    minHand = min * anglePerMin

return `Seconds pased 0000: ${num}
Time: ${hr}:${sec}:${min}
Hour hand: ${hrHand}
Minute hand: ${minHand}
`
}

console.log( clockAngle( 119730 ) )
console.log( clockAngle( 3600 ) )



isPrime = num => {
    result = false
    // prime is divisibale by itself and one only
    if( (num % num === 0) && (num % 1===0)
    // if divisible by anything lese it is false
    // hence if it is divisbly by 2 or 3 it is not prime 
    && !((num % 2===0) || (num % 3===0))) {
        result = true;
    }
    return result
}

console.log( isPrime(6) )