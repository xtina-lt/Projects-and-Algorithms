/*********************
*   1) GENERAL LOOP  *
* can also use index *
**********************/ 
removeBlanks = str => {
    let result = ''

    for (let i of str)
        if (i !== ' ') result += i

    console.log(result)
}
// removeBlanks(" Pl ayTha tF u nkyM usi c ");
// removeBlanks("I can not BELIEVE it's not BUTTER") 

/****************
 * 2) GET DIGITS *
 *   isNan(str)  *
 *   Number(str) *
 * **************/
getDigits = str => {
    // initalize empty array and counter
    let result = ''
    let count = 0;

    // forward loop
    for (let i of str){
        // if element is a number
        if (!isNaN(i)){
            let equ= Number(i)
            console.log(`${equ}: ${count+equ}`)
            // add to variables
            count += equ
            result += equ
        }
    }
    console.log(`Total of numbers ${Number(result)}:  ${count}`)
}
// getDigits("abc8c0d1ngd0j0!8")
// getDigits("0s1a3y5w7h9a2t4?6!8?0")

/*************************
 *   3) MAKE AN ACRYNOM  *
*   str.toUpperCase()    *
*   str = str.trim()     *
*  arr = str.split(', ') *
*************************/
acronym = str =>{
    var result = ''

    // trim whitespace
    str = str.trim()
    // split each word
    var arr = str.split(' ')
    // get the first letter of every word, make it uppercase, add to result
    arr.map( e => result += e[0].toUpperCase() )
    
    return result
}
// console.log( acronym(" there's no free lunch - gotta pay yer way. ") )
// console.log( acronym("Live from New York, it's Saturday Night!") )

/*********************************
*   4) Create a function that    *
*  given a string, returns the   *
* number of non-space characters *
**********************************/
nonSpaceCount = str => {
    let count = 0

    // loop through string
    for (e of str) 
        // if it is not a space
        if (e !== ' ') 
            // add to count
            count++

    return count
}
// console.log( nonSpaceCount("Honey pie, you are driving me crazy") )
// console.log( nonSpaceCount("Hello world !") )


/***************************************************
*          5) REMOVE SHORTER STRINGS               *
*            Create a function that,               *
* given an array of strings and a numerical value, *
*   returns an array that only contains strings    *
*     longer than or equal to the given value.     *
*     arr = arr.filter( e => (keep condition) )    *
***************************************************/
removeShorter = (arr, num) => { 
    return arr.filter(e => e.length >= num ) 
}

console.log( removeShorter(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) )

