// stack class  :-

// 1- pop(): Remove the top item from the stack
// 2- push(item): Add an item to the top of the stack
// 3- peek(): Return the item at the top of the stack
// 4- isEmpty(): Returns true if the stack is empty

class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    return this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}

const stack = new Stack();
///////////////////

// Queue class  :-

// 1- enqueue(item): Add an item to the end of the queue
// 2- dequeue(): Remove item from the start of queue
// 3- Head(): Return the item at the top of the queue
// 4- Tail(): Return the item at the top of the queue
// 5- isEmpty(): Returns true if the queue is empty

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    return this.queue.push(item);
  }
  dequeue() {
    return this.queue.shift();
  }
  dequeueLast() {
    return this.queue.pop();
  }
  tail() {
    return this.queue[this.queue.length - 1];
  }
  head() {
    return this.queue[0];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}

const queue = new Queue();
