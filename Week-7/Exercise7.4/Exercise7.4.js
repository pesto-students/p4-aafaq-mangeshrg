function isPaired(strInp) {
    let arr = [];
    for (var i = 0; i < strInp.length; i++) {
        switch (strInp[i]) {
            case "]":
                if(arr[arr.length - 1] == "[")
                    arr.pop();
                break;
            case "}":
                if(arr[arr.length - 1] == "{")
                    arr.pop();
                break;
            case ")":
                if(arr[arr.length - 1] == "(")
                    arr.pop();
                break;
            default:
                arr.push(strInp[i]);
                break;
        }
    }
    return (arr.length == 0);
}

let input1 = "[()]{}{()()}";
console.log(isPaired(input1));

let input2 = "[(])";
console.log(isPaired(input2));

let input3 = "([]";
console.log(isPaired(input3));
