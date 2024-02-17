class QNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    add(data) {
        const node = new QNode(data);
        if (this.front == null) {
            this.front = node;
            this.rear = node
            return
        }
        this.rear.next = node;
        this.rear = node;
    }

    remove() {
        if (this.front == null) {
            return
        }
        this.front = this.front.next

    }

    print() {
        const size = this.size()
        var cur = this.front
        for (let i = 0; i < size; i++) {
            console.log(cur.data)
            cur = cur.next
        }
    }

    size() {
        if (this.front == null) {
            return 0;
        }
        let size = 1;
        let cur = this.front;
        while (cur.next != null) {
            cur = cur.next;
            size = size + 1;
        }
        return size;
    }
}

const queue = new Queue();
queue.add(10);
queue.add(20)
queue.add(30)
queue.add(40)
console.log(queue.size())
console.log(queue.front)
console.log(queue.rear)
queue.print()
queue.remove()
console.log(queue.size())
console.log(queue.front)
console.log(queue.rear)
queue.print()