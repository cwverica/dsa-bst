class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let current = this.root;

    while (current) {
      if (val < current.val) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(val);
          break;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(val);
          break;
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    function recursiveSearch(node, val) {
      if (val < node.val) {
        if (!node.left) {
          node.left = new Node(val);
          return;
        } else {
          return recursiveSearch(node.left, val);
        }
      } else {
        if (!node.right) {
          node.right = new Node(val);
          return;
        } else {
          return recursiveSearch(node.right, val);
        }
      }
    }
    recursiveSearch(this.root, val);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined;

    let current = this.root;
    while (current) {
      if (val === current.val) return current;
      if (!current.left && !current.right) return undefined;
      if (val < current.val) {
        if (!current.left) return undefined;
        current = current.left;
      } else {
        if (!current.right) return undefined;
        current = current.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return undefined;

    function recursiveSearch(node, val) {
      if (node.val === val) return node;
      if (!node.left && !node.right) return undefined;
      if (val < node.val) {
        if (!node.left) return undefined;
        return recursiveSearch(node.left, val);
      } else {
        if (!node.right) return undefined;
        return recursiveSearch(node.right, val);
      }
    }

    return recursiveSearch(this.root, val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

    if (!this.root) return [];

    let nodes = [];
    let current = this.root;

    function traversePre(node) {
      nodes.push(node.val);
      if (node.left) traversePre(node.left);
      if (node.right) traversePre(node.right);
    }

    traversePre(current);
    return nodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

    if (!this.root) return [];

    let nodes = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      nodes.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return nodes;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

    if (!this.root) return [];

    let nodes = [];
    let current = this.root;

    function traversePost(node) {
      if (node.left) traversePost(node.left);
      if (node.right) traversePost(node.right);
      nodes.push(node.val);
    }

    traversePost(current);
    return nodes;

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

    if (!this.root) return [];

    let nodes = [];
    let toVisitQueue = [this.root];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      nodes.push(current.val);
      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }

    return nodes;

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
