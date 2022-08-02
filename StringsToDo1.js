/*********************
*    GENERAL LOOP    *
* can also use index *
**********************/ 
const removeBlanks = (str) => {
    let result = ''
    for (let i of str){
        if (i !== ' ') {
            result+=i
        }
    } 
    console.log(result)
}
// removeBlanks(" Pl ayTha tF u nkyM usi c ");
// removeBlanks("I can not BELIEVE it's not BUTTER") 

/***************
 * isNan(str)  *
 * Number(str) 
 * *************/
const getDigits = (str) => {
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
    console.log(`Total of numbers ${result}:  ${count}`)
}
// getDigits("abc8c0d1ngd0j0!8")
// getDigits("0s1a3y5w7h9a2t4?6!8?0")

/*************************
* str.split('delimeter') *
*   str.toUpperCase()    *
*************************/
const acronyms = (str) =>{
    let result = ''
    
}
// acronym(" there's no free lunch - gotta pay yer way. ")




const play = () => {
    
}

