import LinkedList from '../Resources/LinkedList.js';

var list1 = new LinkedList();
 
for(var i = 0; i < 6;i++){
	list1.add(Math.floor(Math.random()*100));
}

console.log('Original List');
list1.print();
console.log(list1.checkLoop());
console.log('Creating loop');
list1.head.next.next.next.next.next.next = list1.head;
console.log(list1.checkLoop());