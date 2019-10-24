class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.head = 0;
  }

  enqueue(value) {
    this[this.count] = value;
    this.count++;
  }

  dequeue() {
    var front = this[this.head];
    delete this[this.head];
    this.head++;
    return front;
  }

  size() {
    if (this.head > this.count) {
      return 0;
    } else if (this.count > this.head) {
      return this.count - this.head;
    }

    return this.count;
  }

}
