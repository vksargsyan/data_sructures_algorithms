class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  set head(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;

      return;
    }

    this.insertBefore(this.head, node);
  }

  set tail(node) {
    if (this.tail === null) {
      this.head = node;

      return;
    }

    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }

    this.remove(nodeToInsert);

    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;

    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }

    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }

    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;

    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }

    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.head = nodeToInsert;

      return;
    }

    node = this.head;
    currentPosition = 1;

    while (node !== null && currentPosition != position) {
      node = node.next;
      currentPosition += 1;
    }

    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.tail = nodeToInsert;
    }
  }

  removeNodesWithValue(value) {
    node = this.head;

    while (node !== null) {
      nodeToRemove = node;
      node = node.next;
      if (node.value === value) {
        this.remove(node);
      }
    }
  }

  remove(node) {
    if (node === this.head) {
      this.head = this.head.next;
    }

    if (node === this.tail) {
      this.tail = this.tail.prev;
    }

    this._removeNodeBindings(node);
  }

  _removeNodeBindings(node) {
    if (node.prev !== null) {
      node.prev.next = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    }

    node.prev = null;
    node.prev = null;
  }

  containsNodeWithValue(value) {
    let node = this.head;

    while (node !== null && node.value !== value) {
      node = node.next;
    }

    return node !== null;
  }
}

class Node {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }

  get prev() {
    return this.prev;
  }

  get next() {
    return this.next;
  }

  set prev(node) {
    this.prev = node;
  }

  set next(node) {
    this.next = node;
  }
}
