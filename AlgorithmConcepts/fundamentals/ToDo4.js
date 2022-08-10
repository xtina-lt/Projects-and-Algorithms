// Stan learned something today: 
// that directly decrementing an array’s .length immediately shortens it by that amount.
//  Given array arr and number X, 
// remove all except the last X elements,
// and return arr (changed and shorter). 
//Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it. 
onlyKeep = (arr,num) => {
    for (i=0; i < num; i++){
        arr[i] = arr[Math.round(arr.length/2)-1+i]
    }
    arr.length = num
    return arr
}
// console.log(onlyKeep([2,4,6,8,10],3))




// Cartman doesn’t really like math; he needs help. 
// You are given two numbers – coefficients 
// M and B in the equation Y = MX + B. 
//Build a function to return the X-intercept 
//(his older cousin Fiaz wisely reminds him that X-intercept 
//is the value of X where Y equals zero; 
// Cartman just snorts in his general direction). 
xInt = (m,b) => {
    // 0 = MX+B
    // -B = MX
    // -B/M = X
    return (-b)/m
}
// console.log( xInt(2,-4) )

yInt = (m,b) => {
    // Y = M(0) + B
    return m * 0 + b
}
// console.log( yInt(2,-4) )




// Kenny tries to stay safe, but somehow everyday something happens. 
// Out of the last 100 days, 
// there were 10 days with volcanos, 
// 15 others with tsunamis, 
// 20 earthquakes, 
// 25 blizzards and 
// 30 meteors (for 100 days total). 
// If these probabilities continue, write whatHappensToday() to print a day’s outcome. 
probability = () =>{
    console.log('?')
}


// Kyle (smarter than Kenny) notes that the chance of one disaster s
// hould be unrelated to the chance of another. 
// Change whatHappensToday() function to create whatReallyHappensToday(). 
// In this new function test for each disaster independently, 
// instead of assuming exactly one disaster will happen. 
// In other words, with this new function, all five might occur today – or none. 
// Maybe Kenny will survive! 
realProb = () => {

}




// Your time at the Dojo will definitely make you smarter! 
// Let’s say a new Dojo student, Bogdan entered with a modest IQ of 101. 
// Let’s say that during a 14-week bootcamp, his IQ rose by 
// .01 on the first day, 
// then went up by an additional .02 on the second day, then up by 
// .03 more on the third day, etc. all the way until increasing by 
// .98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ? 
soaringIQ = iq => {
    var summation = iq
    for (i=.01; i<=.03; i+=.01){
        console.log(i)
        summation += i
    }

    return summation
}
// console.log( soaringIQ(101) )




// Mr. Cerise teaches high school math. 
// Write a function that assigns and prints a letter grade, 
// given an integer representing a score from 0 to 100? 
// Those getting 90+ get an ‘A’, 
// 80-89 earn ‘B’, 70-79 is a ‘C’, 
// 60-69 should get a ‘D’, and lower than 60 receive ‘F’. 
// For example, given 88, you should log "Score: 88. Grade: B". 
// Given the score 61, log the string "Score: 61. Grade: D". 
letterGrade = num => { return (num >= 90) ? 'A' : (num>=80) ? 'B' : (num>=70) ? 'C' : (num >= 60) ? 'D' : 'F'; }
console.log( letterGrade(30) )




// For an additional challenge, 
// add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, 
// and “+” signs to the top 2 percent of B, C and D scores 
// (sorry, Mr. Cerise never gives an A+). 
// Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .
plusMinus = num => {
    return (num >= 100) ? null : (num % 10 === 9 || num % 10 === 8) ? '+' : (num % 10 === 1 || num % 10 === 0) ? '-' : null;  
}
accurateGrade = num => {
    // get the letter grade
    result = letterGrade(num)
    // get plus or minus
    // caste to string
    plusMin = String(plusMinus(num))
    if (plusMin !== 'null') result += String(plusMinus(num))
    
    return result
}
// console.log( accurateGrade(88) )
// console.log( accurateGrade(81) )
// console.log( accurateGrade(86) )





