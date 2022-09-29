import Queue from '../Resources/Queue.js';

function funcQueue(inpArr) {
    var queue = new Queue();
    let output = [];
    for (let i = 0; i < inpArr.length; i++) {
        if(inpArr[i] == 1) {
            i++;
            queue.enqueue(inpArr[i]);
        } else {
            output.push(queue.dequeue());
        }
    }

    return output;
}

let input1 = [1,2,1,3,2,1,4,2];
console.log(funcQueue(input1)); //Output [2, 3]

let input2 = [1,2,2,2,1,4];
console.log(funcQueue(input2)); //Output [2, -1]

//Time Complexity: for push O(1) for pop O(n)
//Space Complexity : O(1)