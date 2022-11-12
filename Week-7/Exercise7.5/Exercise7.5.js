function nextGreater(inpArr) {
    let outArr = [];
    for (let i = 0; i < inpArr.length; i++) {
        if(i == inpArr.length - 1)
            outArr.push(-1);
        else {
            for (let j = i; j < inpArr.length; j++) {
                if(inpArr[j] > inpArr[i]) {
                    outArr.push(inpArr[j]);
                    j = inpArr.length;
                } else if(j == inpArr.length - 1)
                    outArr.push(-1);
            }
        }
    }
    return outArr;
}

let input1 = [1,3,2,4];
console.log(nextGreater(input1));

let input2 = [6,8,0,1,3];
console.log(nextGreater(input2));
