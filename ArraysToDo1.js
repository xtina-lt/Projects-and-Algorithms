// swap first and last
const example = () => {
    let arr = [1,2,3,4,5];
    let temp = arr[0]
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    console.log(arr)
}

const shiftleft = ()=> {
    let arr = [1,2,3,4,5]
    let temp = arr[0]

    for (let i=1; i < arr.length; i++){
        arr[i-1] = arr[i]
    }

    arr[arr.length-1] = temp
    console.log(arr)
}

const shiftRight = () => {
    let arr = [1,2,3,4,5]
    let temp = arr[arr.length-1]

    for (let i=arr.length-1; i>0; i--){
        arr[i] = arr[i-1];
    }

    arr[0] = temp;
    console.log(arr)
}

// ADD FIRST
const push = (arr, num) => {
    // 1) initialization
    let last = arr[arr.length-1]

    // 2) execution
    // shift right
    for (let i=arr.length-1; i > 0; i--){
        arr[i] = arr[i-1]
    }
    // add first
    arr[0]=num
    // make last last
    arr[arr.length]=last;

    // 3) evaluation
    console.log(arr)
}

// REMOVE FIRST
const pop = (arr) =>{
    // 1) shift left
    for (let i=1; i<arr.length; i++){
        arr[i-1] = arr[i]
    }
    // 2) decrease arr length
    arr.length = arr.length-1

    // evaluation
    console.log(arr)
    return removed
}

const insertAt = (arr, index, num) => {
    // 1) shift right
    for (let i=arr.length; i >= index; i--){
        arr[i] = arr[i-1];
    }
    // 2) insert num
    arr[index] = num

    // 2) evaluation - return/read
    console.log(arr)
}

const swapPairs = (arr) => {
    if (arr.length % 2 ==0){
        // save last half to temp
        let temp = arr.splice(arr.length / 2)
        // save first half
        let x = arr.splice(0, arr.length / 2 + 1)
        // set last half to temp
        let y = temp;
        
        // log values
        console.log("start: " + x)
        console.log("end: " + y)
        console.log("temp:" + temp)
        // swap
        return y.concat(x)
    } else {
        let last = arr[arr.length-1]
        // save last half to temp
        // Math.ceil for odd!
        let temp = arr.splice(Math.ceil(arr.length/2), arr.length-2)
        // save first half
        let x = arr.splice(0, Math.ceil(arr.length / 2))
        // set last half to temp
        let y = temp;

        // log values
        console.log("start: " + x)
        console.log("end: " + y)
        console.log("temp: " + temp)

        // swap
        arr = y.concat(x)
        arr[arr.length] = last;
        return arr
    }
}

// equivalent to removeAt(arr,0)
const removeAt = (arr, index) => {
    for (let i=0; i < arr.length; i++){
        if (i===index){
            // shift left @ index to be removed
            for (let j=i; j < arr.length-1; j++){
                console.log(`J: arr[${j}]: ${arr[j]}`)
                console.log(`J+1: arr[${j+1}]: ${arr[j+1]}`)
                arr[j] = arr[j+1]
            }
        }
    }
    // shorten array
    arr.length = arr.length-1
    
    return arr
}

// remove dups in sorted array
var removeDupes = function (arr) {
    let same = 0;
    let different = 0;

    for (let i = 0; i < arr.length; i++) {
        // skip if current element is equal to next
        // add to the count of same elements
        if (arr[i] == arr[i + 1]) {
            same++
            continue;
        }
        // if different, add to front using diffent count
        arr[different] = arr[i];
        different++;
    }
    // change length
    arr.length = arr.length - same
    console.log(arr)
    console.log("same: " + same)
    console.log("different: " + different)
};



// removeDupes([-2,-2,3.14,5,5,10]) 
// removeDupes([9,19,19,19,19,19,29])
// console.log( removeAt([1000,3,204,77], 1) ) 
// console.log(swapPairs([1,2,3,4]))
// console.log(swapPairs([1,2,3,4, 5]))
// console.log(swapPairs(["Brendan",true,42]))
// example()
// shiftleft()
// shiftRight()
// push([5,7,2,3], 8)
// push([99], 7)
// console.log(pop([0,5,10,15]))
// insertAt([100,200,5], 2, 311)
