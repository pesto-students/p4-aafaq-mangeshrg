export default class Queue
{
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(data) {
        this.stack1.push(data);
    }

    dequeue() {
        if (this.stack1.length === 0 && this.stack2.length === 0) {
            return -1;
        } else {
            while(!this.stack1.length == 0)  {
                this.stack2.push(this.stack1.pop())  
            }
            
            let item = this.stack2.pop()
            
            while(!this.stack2.length == 0)  {
                this.stack1.push(this.stack2.pop())  
            }

            return item;
        }
    }

    print() {
        console.log(this.stack1);
    }
}