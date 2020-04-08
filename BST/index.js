class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let n = new Node(value);

    if (this.root === null) {
      this.root = n;
    } else {
      this.insertNode(this.root, n);
    }
  }

  insertNode(root, n) {
    if (n.value < root.value) {
      if (root.left === null) {
        root.left = n;
      } else {
        this.insertNode(root.left, n);
      }
    } else {
      if (root.right === null) {
        root.right = n;
      } else {
        this.insertNode(root.right, n);
      }
    }
  }

  remove(value) {
    if (this.root === null) {
      throw new Error('BST is empty');
    } else {
      this.removeNode(this.root, value);
    }
  }

  removeNode(root, value) {
    if (!root) {
      return null;
    }

    if (value < root.value) {
      root.left = this.removeNode(root.left, value);
      return root;
    } else if (value > root.value) {
      root.right = this.removeNode(root.right, value);
      return root;
    } else {
      if (!root.left && !root.right) {
        root = null;
        return root;
      }

      if (root.left) {
        root = root.left;
        return root;
      } else if (root.right) {
        root = root.right;
        return root;
      }

      let minRight = this.findMinNode(root.right);
      root.value = minRight.value;

      root.right = this.removeNode(root.right, minRight.value);
      return root;
    }
  }

  findMinNode(root) {
    if (!root.left) {
      return root;
    }

    return this.findMinNode(root.left);
  }

  search(value) {
    if (!this.root) {
      throw new Error('BST is empty');
    }

    return Boolean(this.searchNode(this.root, value));
  }

  searchNode(root, value) {
    if (!root) {
      return null;
    }

    if (value < root.value) {
      return this.searchNode(root.left, value);
    } else if (value > root.value) {
      return this.searchNode(root.right, value);
    }

    return root;
  }
}

module.exports = BST;
