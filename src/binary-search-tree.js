const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.myRoot = null;
  }

  root() {
    return this.myRoot;
  }

  add(data) {
    this.myRoot = addData(this.myRoot, data);

    function addData(node, data) {
      if (!node) {
        return new Node(data);
      } else {        
        if (node.data === data) {
          return node;
        } else if (node.data < data) {
          node.right = addData(node.right, data);
        } else {
          node.left = addData(node.left, data);
        }
        return node;
      }
    }
    
  }

  has(data) {    
    let node = this.myRoot;
    

    while (node) {
      if (node.data === data) {
        console.debug(data + ' - true');
        return true
      } else if (node.data < data) {
        node = node.right;
      } else {
        node = node.left;
      }
    }
    console.debug(data + ' - false');
    return false;
  }

  find(data) {
    let node = this.myRoot;

    while (node) {
      if (node.data === data) {
        return node
      } else if (node.data < data) {
        node = node.right;
      } else {
        node = node.left;
      }
    }
    return null;
  }

  remove(data) {
    this.myRoot = removeData(this.myRoot, data);

    function removeData(node, data) {
      if (!node) {
        return null
      }

      if (node.data === data) {
        
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }

        let minRight = node.right;
        while (minRight.left !== null) {
          minRight = minRight.left;
        }

        node.data = minRight.data;

        node.right = removeData(node.right, minRight.data);

        return node;



      } else if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        node.left = removeData(node.left, data);
        return node;
      }

    }
  }

  min() {
    let node = this.myRoot;

    while (node.left !== null) {
        node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.myRoot;

    while (node.right !== null) {
        node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};