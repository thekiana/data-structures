var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // this.value = value;
  // Tree(this.children.push(this));
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var hasNode = this.value === target;

  this.children.forEach(function(child) {
    if (!hasNode) {
      hasNode = child.contains(target);
    }
  });

  return hasNode;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */