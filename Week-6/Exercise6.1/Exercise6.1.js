function maxSubArraySum(inpArray) {
    let maxSoFar = Number.MIN_SAFE_INTEGER;
    let maxEndingHere = 0;
       
    for (let i = 0; i < inpArray.length; i++)
    {
        maxEndingHere = maxEndingHere + inpArray[i]
        if (maxSoFar < maxEndingHere)
            maxSoFar = maxEndingHere;
  
        if (maxEndingHere < 0)
            maxEndingHere = 0
    }
    return maxSoFar;
}

let input1 = [1, 2, 3, 4, -10];
console.log(maxSubArraySum(input1));// OUTPUT : 10

let input2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArraySum(input2));// OUTPUT : 6