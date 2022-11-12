function isPaired(strInp) {
    let arr = [];
    for (var i = 0; i < strInp.length; i++) {
        switch (strInp[i]) {
            case "]":
                if(arr.length > 0 && arr[arr.length - 1] == "[")
                    arr.pop();
                else
                    arr.push(strInp[i]);
                break;
            case "}":
                if(arr.length > 0 && arr[arr.length - 1] == "{")
                    arr.pop();
                else
                    arr.push(strInp[i]);
                break;
            case ")":
                if(arr.length > 0 && arr[arr.length - 1] == "(")
                    arr.pop();
                else
                    arr.push(strInp[i]);
                break;
            default:
                arr.push(strInp[i]);
                break;
        }
    }

    return (arr.length === 0);
}

let input1 = "[()]{}{()()}";
console.log(isPaired(input1));

let input2 = "[(])";
console.log(isPaired(input2));

let input3 = "]";
console.log(isPaired(input3));
