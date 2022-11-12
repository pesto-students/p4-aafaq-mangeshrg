class Node 
{
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

export default class LinkedList 
{
    constructor() {
        this.head = null;
        this.size = 0;
    }
 
    addAtStart(data) {
        var node = new Node(data);
        if (this.head == null) {
            this.head = node;
            this.size = 1;
            return;
        }
        
        let curHead = this.head;
        let newNode = node;
        this.head = newNode;
        newNode.next = curHead;
        this.size++;
    }

    add(data) {
        var node = new Node(data);
        var current;

        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        this.size++;
    }

    delete(data) {
        var current = this.head;
        var prev = null;
    
        while (current != null) {
            if (current.data === data) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }
        
        return -1;
    }

    print() {
        var curr = this.head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }

    count() {
        return this.size;
    }

    reverse() {
        var prev = null,
		curr = this.head,
		next = null;
        while(curr){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
    
    rotate(k) {
        var current = this.head;

        for (let i = 0; i < k; i++) {
            let data = current.data;
            this.delete(current.data);
            this.add(data);
            current = current.next;
        }
    }

    checkLoop() {
        let current = this.head;
        for (let i = 0; i < this.size - 1; i++) {
            current = current.next;
        }

        return current.next != null;
    }
}