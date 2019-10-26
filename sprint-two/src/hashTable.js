

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log('val ', v);
  // console.log('-----');
  // console.log('key ', k);
  // console.log('-----');
  // console.log('-----');
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var toDelete = this._storage.get(index);
  this._storage.set(index, toDelete = undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// O(1) constant