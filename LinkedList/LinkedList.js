class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let prevNode = {};
    let actualNode = this.head;

    for (let i = 0; i < this.length; i++) {
      if (actualNode.next) {
        prevNode = actualNode;
        actualNode = actualNode.next;
      }
    }
    this.tail = prevNode;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
      this.head = null;
    }
    return actualNode;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) {
      return undefined;
    } else {
      const newHead = this.head.next;
      const oldHead = this.head;
      oldHead.next = null;
      this.head = newHead;
      this.length--;
      if (this.length == 0) {
        this.head = null;
        this.tail = null;
      }
      return oldHead;
    }
  }
  get(index) {
    if (index > this.length || index < 0) {
      return null;
    }
    let temp = this.head;
    // const pre = this.head
    for (let i = 0; i < index; i++) {
      if (temp.next) {
        temp = temp.next;
      }
    }
    return temp;
  }
  set(index, value) {
    const temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    } else {
      return false;
    }
  }
  insert(index, value) {
    if (index == this.length) {
      return this.push(value);
    }
    if (index == 0) {
      return this.unshift(value);
    }
    if (index > this.length || index < 0) {
      return false;
    }

    const newNode = new Node(value);
    let temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    // console.log(temp);
    this.length++;
    return true;
  }
  remove(index) {
    if (index == this.length) {
      return this.pop;
    }
    if (index == 0) {
      return this.shift();
    }
    const oneBefore = this.get(index - 1);
    const toRemove = this.get(index);
    oneBefore.next = toRemove.next;
    toRemove.next = null;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
  // findMiddleNode(){
  //   let length = 0
  //   let temp = this.head
  //   let temp2 = this.head
  //   while(temp !== null){
  //     temp = temp.next
  //     length ++
  //   }
  //   length = (Math.floor(length / 2))
  //   for (let i = 0; i < length; i++) {
  //     temp2 = temp2.next
  //   }
  //   return temp2
  // }
  findMiddleNode() {
    if (!this.head) {
      return null; // Empty list, no middle node.
    }

    let slowPointer = this.head;
    let fastPointer = this.head;

    while (fastPointer !== null && fastPointer.next !== null) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }
  }
  hasLoop(){
    if(!this.head){
      return false
    }
    if(this.length == 1){
      return false
    }
    let temp = this.head
    let tempLength = 0
    while(temp != null){
      temp = temp.next
      tempLength++
      if(tempLength > this.length){
        return true
      }
    }
    return false
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
// myLinkedList.push(6)
// myLinkedList.push(12)
// myLinkedList.unshift(3);
// console.log(myLinkedList.pop());
// myLinkedList.pop();
// myLinkedList.shift()
// myLinkedList.set(2,100)
// myLinkedList.insert(0,100)
// console.log(myLinkedList.get(1))
// myLinkedList.findMiddleNode();
// myLinkedList.tail.next = myLinkedList.head.next;
console.log(myLinkedList.hasLoop());

console.log(myLinkedList);
