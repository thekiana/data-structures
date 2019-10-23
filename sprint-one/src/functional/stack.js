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
    delete storage[count];
    count--;
    return storage[count];
  };

  // remove and return string on top of stack

  someInstance.size = function() {
    if (count < 0) {
      return 0;
    }

    return Object.keys(storage).length;
  };

  // return number of items on stack

  return someInstance;
};
