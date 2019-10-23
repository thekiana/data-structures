var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.count = 0;
  storage.head = 0;

  extend(storage, queueMethods);

  return storage;
};

var extend = function(dest, sources) {
  for (var key in sources) {
    dest[key] = sources[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  var front = this[this.head];
  delete this[this.head];
  this.head++;
  return front;
};

queueMethods.size = function() {
  if (this.head > this.count) {
    return 0;
  } else if (this.count > this.head) {
    return this.count - this.head;
  }

  return this.count;
};