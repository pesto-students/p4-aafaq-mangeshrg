function closestSumOfThree(inpArray, sum)
{
    let closestSumOfThree = Number.MAX_SAFE_INTEGER;

    if(inpArray.length < 3) {
        throw Error ('Array too short!');
    }

    inpArray = inpArray.sort(function(a,b){return a - b});

    for (let i = 0; i < inpArray.length - 2; i++) {

        let newClosestSumOfThree = inpArray[i] + inpArray[i + 1] + inpArray[i + 2];

        if(Math.abs(sum - closestSumOfThree) > Math.abs(sum - newClosestSumOfThree)) {
            closestSumOfThree = newClosestSumOfThree;
        }
    }

    return closestSumOfThree;
}

let input1 = [-1, 2, 1, -4];
console.log(closestSumOfThree(input1, 1));
