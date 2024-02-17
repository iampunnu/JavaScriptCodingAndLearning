class StackNode {
    constructor(data) {
        this.data = data
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null
    }

    push(data) {
        const node = new StackNode(data)
        if (this.top == null) {
            this.top = node;
            return
        }
        node.next = this.top
        this.top = node
    }

    pop() {
        if (this.top == null) {
            return
        }
        const n = this.top.data;
        this.top = this.top.next
        return n;
    }

}

const stack = new Stack()
stack.push(10);
stack.push(20)
console.log(stack.pop())
stack.push(30)
console.log(stack.pop())