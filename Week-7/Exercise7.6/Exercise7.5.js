import Queue from '../Resources/Queue.js';

var queue = new Queue();
 
for(var i = 0; i < 6;i++){
	queue.enqueue(Math.floor(Math.random()*100));
}

console.log('Original Queue');
queue.print();

queue.dequeue();
queue.print();

queue.dequeue();
queue.print();

queue.dequeue();
queue.print();

//Time Complexity: for push O(n) for pop O(1)
//Space Complexity : O(n)