class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        var newNode = new Node(data);
        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }
}

function printLevelOrder() {
    var queue = [];
    queue.push(tree.root);
    while (queue.length != 0) {
        var tempNode = queue.shift();
        console.log(tempNode.data + " ");
        if (tempNode.left != null) {
            queue.push(tempNode.left);
        }
        if (tempNode.right != null) {
            queue.push(tempNode.right);
        }
    }
}

function printLeftView() {
    var queue = [];
    var flag=true;
    queue.push(tree.root);
    queue.push(null)
    while (queue.length != 0) {
        var tempNode = queue.shift();
        if (tempNode==null){
            if (queue.length == 0){
                return
            }
            queue.push(null)
            flag=true;
        }
        else {
            if (flag){
        console.log(tempNode.data + " ");
            }
            flag=false
        if (tempNode.left != null) {
            queue.push(tempNode.left);
        }
        if (tempNode.right != null) {
            queue.push(tempNode.right);
        }
        }
    }
}

function printRighttView() {
    var queue = [];
    var flag=true;
    queue.push(tree.root);
    queue.push(null)
    while (queue.length != 0) {
        var tempNode = queue.shift();
        if (tempNode==null){
            if (queue.length == 0){
                return
            }
            queue.push(null)
            flag=true;
        }
        else {
            if (flag){
                console.log(tempNode.data + " ");
            }
            flag=false
            if (tempNode.right != null) {
                queue.push(tempNode.right);
            }
            if (tempNode.left != null) {
                queue.push(tempNode.left);
            }

        }
    }
}
function topview(){
    class Pair {
        constructor(node,nodeValue) {
            this.node=node;
            this.nodeValue=nodeValue
        }
    }
    var pairs = [];
    pairs.push(new Pair(tree.root,0));
    var integerNodeHashMap = new Map();

    while (pairs.length != 0){
        const pair=pairs.shift();
        if (!integerNodeHashMap.has(pair.nodeValue)){
            integerNodeHashMap.set(pair.nodeValue,pair.node);
        }
        if(pair.node.left!=null){
            pairs.push(new Pair(pair.node.left,pair.nodeValue-1));
        }
        if(pair.node.right!=null){
            pairs.push(new Pair(pair.node.right,pair.nodeValue+1));
        }
    }
    for (var [key, value] of integerNodeHashMap) {
        console.log(key + " = " + value.data);
    }

}
function bottomview(){
    class Pair {
        constructor(node,nodeValue) {
            this.node=node;
            this.nodeValue=nodeValue
        }
    }
    var pairs = [];
    pairs.push(new Pair(tree.root,0));
    var integerNodeHashMap = new Map();

    while (pairs.length != 0){
        const pair=pairs.shift();
            integerNodeHashMap.set(pair.nodeValue,pair.node);

        if(pair.node.left!=null){
            pairs.push(new Pair(pair.node.left,pair.nodeValue-1));
        }
        if(pair.node.right!=null){
            pairs.push(new Pair(pair.node.right,pair.nodeValue+1));
        }
    }
    for (var [key, value] of integerNodeHashMap) {
        console.log(key + " = " + value.data);
    }

}
function inorder(root){
    if (root==null){
        return
    }
    inorder(root.left)
    console.log(root.data)
    inorder(root.right)
}

const tree = new Tree();
tree.insert(15)

tree.insert(10)
tree.insert(25)
tree.insert(7)
tree.insert(13)

tree.insert(22)
tree.insert(27)
tree.insert(9)
tree.insert(17)
console.log(tree.root.data, tree.root.left.data, tree.root.right.data)
//printLevelOrder()
//inorder(tree.root)
//printRighttView()

bottomview()
