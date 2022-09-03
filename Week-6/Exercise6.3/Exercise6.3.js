function sort012(inpArray)
{
    let cnt0 = 0;
    let cnt1 = 0;
    let cnt2 = 0;

    for (let i = 0; i < inpArray.length; i++) {
        switch (inpArray[i]) {
            case 0:
                cnt0++;
                break;
            case 1:
                cnt1++;
                break;
            case 2:
                cnt2++;
        }
    }

    let output = new Array(cnt0).fill(0);
    output = output.concat(new Array(cnt1).fill(1));
    output = output.concat(new Array(cnt2).fill(2));

    return output;
}

let input1 = [0, 2, 1, 2, 0];
console.log(sort012(input1));
let input2 = [0, 1, 0];
console.log(sort012(input2));