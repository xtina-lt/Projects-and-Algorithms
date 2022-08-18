// Implement function sigma(num) that given a number, 
// returns the sum of all positive integers up to number (inclusive). 
// Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5). 
sigma = e => {
    sum = 0;
    for (i=1;  i<=e; i++) {
        sum += i;
    }
    return sum
}
// console.log( sigma(5) )


factorial = e => {
    sum = 1
    for (i=1; i <= e; i++) sum*= i
    return sum
}
// console.log( factorial(5) )


starArt = (place, num) => {
    const EXACT = 5;
    result = ''
    switch (place) {
        case 'left':
            for (i=1; i <= EXACT; i++){
                if (i <= num) {
                    result += '*'
                } else {
                    result += ' '
                }
            }
            break;
        case 'right':
            for (i = EXACT; i > 0 ; i--){
                if (i < EXACT - num) {
                    result += "*"
                } else {
                    result += " "
                }
            }
            break;
        case 'center':
            leftover = EXACT - num
            center = Math.round(leftover/2)
            for (i=0; i < center; i++) result += " "
            for (i=0; i<num; i++) result += "*"
            for (i=0; i < center; i++) result += " "
            break;
    }
    return result
}
// console.log( starArt('center', 2) )

charArt = (place, num, char) => {
    const EXACT = 5;
    result = ''
    switch (place) {
        case 'left':
            for (i=1; i <= EXACT; i++){
                if (i <= num) {
                    result += char
                } else {
                    result += ' '
                }
            }
            break;
        case 'right':
            for (i = EXACT; i > 0 ; i--){
                if (i < EXACT - num) {
                    result += char
                } else {
                    result += " "
                }
            }
            break;
        case 'center':
            leftover = EXACT - num
            center = Math.round(leftover/2)
            for (i=0; i < center; i++) result += " "
            for (i=0; i<num; i++) result += char
            for (i=0; i < center; i++) result += " "
            break;
    }
    return result
}
// console.log( charArt('center', 2, 'C') )