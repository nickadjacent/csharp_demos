/* 
  w2d1
    - A stack is a LIFO (Last in First Out) data structure
    - create a class to represent a stack using an array & another class for a stack using a singly linked list
      - create methods for each: push, pop, isEmpty, size, peek (return top item without removing)

  w2d2
    - A queue is a FIFO (First in First Out) data structure
    - create a class to represent a queue using an array & another class for a queue using a singly linked list
    - create methods for each classes: enqueue (add item), dequeue (remove and return item), isEmpty, size, front (return first item without removing)
*/

class Stack {
  constructor(items = []) {
    this.items = items;
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }

    return this.items.pop();
  }

  peek() {
    // aka top
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    const str = this.items.join(" ");
    console.log(str);
    return str;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// can add to back and remove from back to maintain a LIFO pattern
// OR can add to front and remove from front, still maintains a LIFO pattern but is faster
// because it requires no looping to the end of the linked list
class SLStack {
  constructor() {
    this.head = null;
  }

  // add to top (add new head)
  push(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // remove from top, (remove head)
  pop() {
    if (this.head === null) {
      return null;
    }

    const removed = this.head;
    this.head = this.head.next;

    return removed.data;
  }

  // aka top
  peek() {
    if (this.head === null) {
      return null;
    }
    return this.head.data;
  }

  contains(val) {
    let runner = this.head;

    while (runner) {
      if (runner.data === val) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  isEmpty() {
    return this.head === null;
  }

  size() {
    let len = 0;
    let runner = this.head;

    while (runner) {
      len += 1;
      runner = runner.next;
    }
    return len;
  }

  print() {
    let runner = this.head;
    let vals = "";

    while (runner) {
      vals += `${runner.data}${runner.next ? ", " : ""}`;
      runner = runner.next;
    }
    console.log(vals);
    return vals;
  }
}