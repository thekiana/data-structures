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
    var first = storage[head];
    delete storage[head];
    head++;
    return first;
  };
  // remove and return the string at the front of the queue

  someInstance.size = function() {
    return Object.keys(storage).length;
  };
  // return the number of items in the queue

  return someInstance;
};