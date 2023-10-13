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
    this.length++
    return this;
  }
  shift(){
    if(!this.head){
      return undefined
    }else {
      const newHead = this.head.next
      const oldHead = this.head
      oldHead.next = null
      this.head = newHead
      this.length--
      if(this.length == 0){
        this.head = null
        this.tail = null
      }
      return oldHead
    }
  }
  get(index){
    if(index > this.length || index < 0){
      return null
    }
    let temp = this.head
    // const pre = this.head
    for (let i = 0; i < index; i++) {
      if(temp.next){
        temp = temp.next
      }
    }
    return temp
  }
  set(index,value){
    const temp = this.get(index)
    if(temp){
      temp.value = value
      return true
    }else {
      return false
    }
  }
  insert(index, value){
    if(index == this.length){
      return this.push(value)
    }
    if(index == 0){
      return this.unshift(value)
    }
    if(index > this.length || index < 0){
      return false
    }
    
    const newNode = new Node(value)
    let temp = this.get(index - 1)
    newNode.next = temp.next
    temp.next = newNode
    // console.log(temp);
    this.length++
    return true
  }
  remove(index){
    if(index == this.length){
      return this.pop
    }
    if(index == 0){
      return this.shift()
    }
    const oneBefore = this.get(index - 1)
    const toRemove = this.get(index)
    oneBefore.next = toRemove.next
    toRemove.next = null
  }
  reverse(){
    let temp = this.head
    this.head = this.tail
    this.tail = temp

    let next = temp.next
    let prev = null
    for (let i = 0; i < this.length; i++) {
      
      next = temp.next
      temp.next = prev
      prev = temp
      temp = next
      
      
    }
    return this
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const ola = new LinkedList(1);
ola.push(2);
ola.push(16)
// ola.push(12)
// ola.unshift(3);
// console.log(ola.pop());
// ola.pop();
// ola.shift()
// ola.set(2,100)
ola.insert(0,100)
// console.log(ola.get(1))
console.log(ola);
