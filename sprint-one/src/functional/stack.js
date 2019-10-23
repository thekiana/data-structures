var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  // add string to top of stack

  someInstance.pop = function() {
    var top = storage[count - 1];
    delete storage[count - 1];
    count--;
    return top;
  };

  // remove and return string on top of stack

  someInstance.size = function() {
    if (count < 0) {
      return 0;
    }

    return count;
  };

  // return number of items on stack

  return someInstance;
};
