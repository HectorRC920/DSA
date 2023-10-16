class Node{
  constructor(value){
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList{
  constructor(value){
    const newNode = new Node(value)
    this.head = newNode
    this.tail = newNode
    this.length = 1
  }
  push(value){
    const newNode = new Node(value)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }
    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
    this.length++
    return this
  }
  pop(){
    if(!this.head){
      return undefined
    }
    let temp = this.head
    let prev = this.head
    while(temp.next != null){
      prev = temp
      temp = temp.next
    }
    prev.next = null
    this.tail = prev
    this.length--
    if(this.length == 0){
      this.head = null
      this.tail = null
    }
    return temp
  }
  unshift(value){
    let newNode = new Node(value)
    if(this.length == 0){
      this.head = newNode
      this.tail = newNode
    }

    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    this.length++
    return this
  }
}

const doublyLinkedList = new DoublyLinkedList(1)
doublyLinkedList.push(2)
doublyLinkedList.push(3)
doublyLinkedList.push(4)
// console.log(doublyLinkedList.pop());
doublyLinkedList.unshift(0)
console.log(doublyLinkedList);
