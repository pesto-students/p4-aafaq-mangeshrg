function isPairWithDifference(inpArray, difference)
{
    for (let i = 0; i < inpArray.length; i++) {
        for (let j = i + 1; j < inpArray.length; j++) {
            if(inpArray[j] - inpArray[i] == difference) {
                console.log(inpArray[j] + ' - ' + inpArray[i]);
                return true;
            }
        }
    }

    return false;
}

let input1 = [5, 10, 3, 2, 50, 80];
console.log(isPairWithDifference(input1, 78));

let input2 = [-10, 20];
console.log(isPairWithDifference(input2, 30));
