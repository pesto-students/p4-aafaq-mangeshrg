import LinkedList from '../Resources/LinkedList.js';

var list1 = new LinkedList();
 
for(var i = 0; i < 6;i++){
	list1.add(Math.floor(Math.random()*100));
}

console.log('Original List');
list1.print();
list1.reverse();
console.log('Reversed List');
list1.print();
