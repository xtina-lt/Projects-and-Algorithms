/************
 * (S)INGLY *
 * (L)INKED *
 * (L)IST   *
 *   Node   *  
 ************/
class SLLNode{
    constructor(val) {
        // hold value for this node
        this.val = val
        this.next = null
    }

    getInfo(){ return `Val: ${this.val}, Next: ${this.next}` }
}

// var yo = new SLLNode('yo')
// console.log( yo )

class SLL {
    constructor(){
        this.head = null;
    }
    /******************************************
     *            1) ADD FRONT                *
     *  Write a method that accepts a value   *
     *           create a new node,           *
     *       assign it to the list head,      *
     * return a pointer to the new head node. *
     ******************************************/
    addFront(val) {
        // instantiate new node
        var n = new SLLNode(val)
        // new nodes's next set to current head
        n.next = this.head
        // update the head with the new node
        this.head = n
        // return updated linked list with added node
        return this
    }

    /******************************************
     *           2) REMOVE FRONT              *
     * Write a method to remove the head node *
     *     return the new list head node.     *
     *   If the list is empty->return null.   *
     ******************************************/
    removeFront(){
        // save the one we want to change
        var remove = this.head
        // shift left
        this.head = remove.next
        // return updated linked list with removed node
        return this
    }

    /*****************************************************
     *                 3) FRONT                          *
     * Write a method to return the value (not the node) * 
     *             at the head of the list.              *
     *       If the list is empty, return null.          *
     ******************************************************/
    getFront(){
        return (this.head.val !== null) ? this.head.val : null
    }
}

// ADD
SLL1 = new SLL()
console.log(SLL1)
console.log( SLL1.addFront(18).head )
console.log( SLL1.addFront(5).head )
console.log( SLL1.addFront(73) )  
console.log(SLL1.head)

// // REMOVE
console.log( SLL1.removeFront() )  
console.log( SLL1.getFront() )