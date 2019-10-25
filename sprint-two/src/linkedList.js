var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var node = Node(value);

    if (!this.head) {
      this.head = node;
    }

    if (!this.tail) {
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function () {
    // set node to head
    var oldHead = this.head.value;
    this.head = this.head.next;
    return oldHead;
  };

  list.contains = function (target) {
    var hasNode = false;
    if (this.head.value === target || this.tail.value === target) {
      hasNode = true;
    }

    return hasNode;
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// O(1) constant time

