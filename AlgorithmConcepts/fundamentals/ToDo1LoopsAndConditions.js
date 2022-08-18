/*****************************************
*               VARIABLES                
* - specific spot in memory with a label 
*             VAR: more global           
*             LET : more local           
*       CONST: CONSTANT, IMMUTABLE       
******************************************/
const variable = () => {
    for (let i = 0; i < 3; i++){
        console.log(i)
        {
            // DEFINED
            var x = 'foo'
        }
        console.log(`${i}: ${x}`)
    }
    
    for (let i = 0; i < 3; i++){
        console.log(i)
        {
            let x = 'foo'
        }
        // UNDEFINED
        console.log(`${i}: ${x}`) 
    }
}

/****************************************************************************************
*   DATA TYPES
* built in data structures used to build
* Primitive Types:
* 1) Boolean
* 2) Null
* 3) Undefined
* 4) Number
* 6) Big Int
* 7) String
* 8) Symbol
* Other:
* 9) Objects: object is a value in memory which is possibly referenced by an identifier
****************************************************************************************/
// read console.log(`${variable}`)
/******************************
*   OPERATORS
*   ==  'equals'
*   ||  'or'    one or the other can be true
*   &&  'and'   both must be true
*   !   'not'
*   ++  'increment'
*   --  'decrement'
*   /=  'divide and set'
*   *=  'multiply and set'
*   == truthy/falsy === exact
******************************/

/******************************
*   FUNCTIONS
* function func(){}
* const func = () => {}
* const func = param => {}
* const func = (x, y) => {}
* func(arg)
******************************/

const ternary = () =>{
    // BACKWARDS LOOP
    // for (var i= 15; i > 0; i--){
    //     if (i % 3 === 0 && i % 5 === 0) {
    //         console.log('fizzbuzz')
    //     } else if (i % 5 === 0) {
    //         console.log('fizz')
    //     } else if (i % 3 === 0) {
    //         console.log('fizz')
    //     } else{
    //         console.log(i)
    //     }
    // }
    for (var i=15; i>0; i--){
        console.log((i % 3 === 0 && i % 5 === 0) ? 'fizzbuzz' : (i % 5 === 0) ? 'fizz' : (i % 3 === 0) ? 'buzz' : i )
    }
}
// ternary()


/* no conditonals */
const switcheroo = () => {
    const month = 1
    const result = ''

    switch (month) {
        case 1: result = 'jan'; break;
        case 2: result = 'feb'; break;
        case 3: result = 'mar'; break;
        case 4: result = 'apr'; break;
        case 5: result = 'may'; break;
        case 6: result = 'jun'; break;
        case 7: result = 'jul'; break;
        case 8: result = 'aug'; break;
        case 9: result = 'sep'; break;
        case 10: result = 'oct'; break;
        case 11: result = 'nov'; break;
        case 12: result = 'dec'; break;
    }
}


/***********************************
 *  LOOPS
 *  - for (var i=-12; i<1; i=i+3)
 *  - while
 *  - lst.map(e=>e)
 *  - lst.filter(e=> e % 3 === 0)
 ************************************/

/* BREAK; STOP
 * CONTINUE; SKIP 
*/
const whilee = () => {
    var num = 1;
    while(num < 5) {
        if(num == 3) break;
        console.log("I'm counting! The number is ", num);
        num++
    }
}
// whilee()





/*************************
 * FUNDAMENTALS PRACTICE *
 *************************/
// 1) for loop
const print52to1066 = () =>{
    for (var i =-52; i <= 1066; i++) console.log(i)
}
// print52to1066()

// 2) callback functions
// create a CALLBACK FUNCTION. 
// Within it, console.log string "good morning!" 
// Call it 98 times. 
const beHappy = () => console.log("don't worry be happy")
const dontWorry = () => {
    for (var i=0; i < 98; i++) beHappy()
}
// dontWorry()

// 3) BREAK;
// Using FOR, print multiples of 3 from -12 to 0. 
// Skip -3 and -6. 
const breakk = () => {
    for (var i=-12; i<1; i=i+3){
        if (i !== -6 && i !== -3) console.log(i)
    }
}
// breakk()

// 4) WHILE
const printNumsWhile = () => {
    var num = 3;
    while(num <= 15){
        console.log(num);
        num += 3;
    }
}
// printNumsWhile()

// 5) OR ||
// If 2 given numbers represent your birth month and day in either order, 
// log "How did you know?", else log "Just another day...." 
const validateBday = (x, y) => {
    console.log( ((x === 12 || y === 12) && (x === 26 || y === 26)) ? "How did you know?" : "Just another day....")
}
// validateBday(26, 12)

// 6) SUM
const sum = (e) => {
    result = 0;
    for (var i=0; i < e; i++) result += i
    console.log(result)
}
// sum(15)

//  7 ) leap year is divisible by 4 unless divisible by 100
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
const isLeapYear = (e) => {
    var result = false
    if (e % 4 === 0) {
        result = true;
        if  (e % 100 === 0 &&  e % 400 !== 0) {
            result = false;
        }
    }
    return result
}

// console.log( isLeapYear(400) )


// 8)
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were. 
const multiplesOf5=()=>{
    var count = 0;
    for (var i=5; i<=20; i++) if (i%5===0) count++
    console.log(count)
}
// multiplesOf5()

// 9) Print multiples of 6 up to 60,000, using a WHILE. 
const multiplesOf6=()=>{
    var count = 0;
    var stop = 1;
    while (stop <= 20) {
        if (stop % 6 === 0) count++
        stop++
    }
    console.log(count)
}
// multiplesOf6()

// 10 ) Countdown by 4's
const downByFour=(e)=>{
    for (var i=e; i >= 1; i-=4) console.log(i)
}
// downByFour(5)

// 11 ) Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3),
const flexCountDown=(low, high, mult)=>{
    for (var i = high; i >= low; i--) {
        if ( i % mult === 0) console.log(i)
    }
}
// flexCountDown(2,9,3)


// 12 ) Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9). 
const finalCountDown=(param1, param2, param3, param4)=>{
    for (var i = param3; i >= param2; i--){
        if ( i % param1 === 0) {
            if ( i === param4) continue;
            console.log(i);
        }
    }
}
finalCountDown(3,5,17,9)

