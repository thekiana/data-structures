var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.head = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var front = this[this.head];
  delete this[this.head];
  this.head++;
  return front;
};

Queue.prototype.size = function() {
  if (this.head > this.count) {
    return 0;
  } else if (this.count > this.head) {
    return this.count - this.head;
  }

  return this.count;
};
