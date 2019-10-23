var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.count = 0;

  extend(storage, stackMethods);

  return storage;
};

var extend = function(dest, sources) {
  for (var key in sources) {
    dest[key] = sources[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  var top = this[this.count - 1];
  delete this[this.count];
  this.count--;
  return top;
};

stackMethods.size = function() {
  if (this.count < 0) {
    return 0;
  }

  return this.count;
};
