// CONSTANT TIME
// nearly instant O(1)
getName = () => {return "xtina.codes"}

// CONSTANT TIME
// nearly instant O(1)
// primitive is constant, same steps each time
addNumbers = (a, b) => {return a+b}

// LINEAR TIME
// increasees with size of input
// 1 element = 1 second
// 100 elements =  100 seconds
// O(n)
findMin = (arr) => {
    let min = arr[0];
    for (let i of arr)
        if (i < min) min = i
    return min
}
// console.log( findMin([1,2,3,4,5]) )

// QUADRATIC TIME
// more data is slower
// O(n^2) => goes through loop twice
sum = (arr) => {
    let count =0;
    for (i of arr)
        for (j of arr){
            console.log(`i: ${i} + j: ${j} = ${i+j}`)
            count += (i+j)
        }
    return count
}
console.log( sum([1,2]) )
