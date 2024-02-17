class Node{
    constructor(data) {
        this.data=data;
        this.left=null;
        this.right=null
    }
}
class Tree{
    constructor() {
        this.root=null;
    }

    insert(temp,data){
        const nod=new Node(data)
        if(this.root==null){
            this.root=nod;
            return
        }
        if ( temp.data>data){
            if(temp.left===null){
                temp.left=nod
                return;
            }
            else this.insert(temp.left,data)
        }
        else {
            if(temp.right==null){
                temp.right=nod
                return;
            }
            else this.insert(temp.right,data)
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

const  tree=new Tree();
console.log("creating tree")

tree.insert(tree.root,15);
console.log(tree.root.data)
const  root=tree.root;

tree.insert(root,10)
tree.insert(root,25)
tree.insert(root,7)
tree.insert(root,13)

tree.insert(root,22)
tree.insert(root,27)
tree.insert(root,9)
tree.insert(root,17)
console.log(tree.root.data, tree.root.left.data, tree.root.right.data)
printLevelOrder()

