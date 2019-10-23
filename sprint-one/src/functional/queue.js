var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var head = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };
  // add a string to the back of the queue

  someInstance.dequeue = function() {
    var front = storage[head];
    delete storage[head];
    head++;
    return front;
  };
  // remove and return the string at the front of the queue

  someInstance.size = function() {
    if (head > count) {
      return 0;
    } else if (count > head) {
      return count - head;
    }

    return count;
  };
  // return the number of items in the queue

  return someInstance;
};