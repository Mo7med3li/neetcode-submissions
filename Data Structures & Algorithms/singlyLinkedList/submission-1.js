class Node {
    constructor(val, next = null) {
       this.val=val
       this.next=next
    }
}
class LinkedList {
    
    constructor() {
     this.head = null;

    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {

        let curr=this.head
        let counter=0
        while(curr!== null){
           if(counter === index){
            return curr.val
           }
            counter++
            curr = curr.next;
        }
        return -1
       
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
       const node= new Node(val,this.head)
       this.head=node
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
    const newNode = new Node(val);

    if (this.head === null) {
        this.head = newNode;
        return;
    }
    let curr = this.head;
    while (curr.next !== null) {
        curr = curr.next;
    }
    curr.next = newNode;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
       // index سالب أو قائمة فاضية
    if (index < 0 || this.head === null) {
        return false;
    }

    // حذف الـ head
    if (index === 0) {
        this.head = this.head.next;
        return true;
    }
    let curr = this.head;
    let counter = 0;
    while (curr !== null && counter < index - 1) {
        curr = curr.next;
        counter++;
    }

  
    if (curr === null || curr.next === null) {
        return false;
    }

    
    curr.next = curr.next.next;
    return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let values=[]
        let curr=this.head
        while(curr!== null){
            values.push(curr.val)
            curr = curr.next;
        }
        return values
    }
}
