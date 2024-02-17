class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

}

class Linkedlist {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data) {
        const newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }

    size() {
        if (this.head == null) {
            return 0;
        }
        let current = this.head;
        var size = 1;
        while (current.next != null) {
            current = current.next;
            size = size + 1;
        }
        return size;
    }

    insertAt(index, data) {
        const newNode = new Node(data);

        var size = this.size();
        if (index > size || index < 0) {
            console.log("can not isert")
            return;
        }
        if (index == 0) {

            //  const cur=this.head;
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (index > 1) {
            current = current.next;
            index--;
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    removeAt(index) {
        const size = this.size()
        if (index < 0 || index >= size) {
            return;
        }
        if (index == 0) {
            const cur = this.head;
            this.head = cur.next
            return;
        }
        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            console.log(current.data)
            current = current.next
        }
        if (current.next)
            current.next = current.next.next

    }

    print() {
        let current = this.head;
        while (current.next != null) {
            console.log(current)
            current = current.next
        }
        console.log(current)
    }
}

var s = function (s) {
    console.log(this.size() + " " + s);
}

const link = new Linkedlist();
link.addFirst(10);
link.addFirst(20);
link.addFirst(30);
link.addLast(40)
link.addLast("sohan")
link.insertAt(5, "singh")
link.removeAt(1)
console.log(link.size())
console.log(link.head.next.data)
link.print()
s.call(link, 9)
s.call(link, "k")
var t = s.bind(link)
t("lj")