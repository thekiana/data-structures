

// Instantiate a new graph
var Graph = function () {

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  var keys = Object.keys(this);

  var result = false;
  keys.forEach(key => {
    if (key === node.toString()) {
      result = true;
    }
  });

  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  delete this[node];

  for (var key in this) {
    var edges = this[key];
    for (var i = 0; i < edges.length; i++) {
      if (node === edges[i]) {
        edges.splice(i, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  var result = false;
  for (var prop in this) {
    for (var i = 0; i < this[prop].length; i++) {
      if (this[prop][i] === toNode || this[prop][i === fromNode]) { //explain
        result = true;
      }
    }
  }

  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  this[fromNode].splice(this[fromNode].indexOf(toNode), 1); //explain
  this[toNode].splice(this[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  var keysArr = Object.keys(this);
  
  for (var i = 0; i < keysArr.length; i++) {
    for (var key in this) {
      if (key === keysArr[i]) {
        cb(key, this[key]);
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var graph = new Graph();
graph.addNode(5);
graph.addNode(2);
graph.addNode(1);
graph.addNode(3);