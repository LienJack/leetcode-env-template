export class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
// 二叉搜索树
export class BinarySearchTree {
  constructor (arr = []) {
    this.root = null
    if (arr.length > 0) {
      arr.forEach(item => {
        this.insert(item)
      })
    }
  }
  insert(value) {
    let newNode = new TreeNode(value)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  inOrder(cb) {
    this._inOrder(this.root, cb)
  }
  _inOrder(node, cb) {
    if (node !== null) {
      this._inOrder(node.left, cb)
      cb(node.value)
      this._inOrder(node.right, cb)
    }
  }
  print () {
    this.inOrder(val => console.log(val))
  }
}

class BinaryTree {
  constructor () {
    this.root = null
  }
  insert(key) {
    let newNode = new TreeNode(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(node, newNode) {
    if (node.left === null) {
      node.left = newNode
    } else if (node.right === null) {
      node.right = newNode
    } 
  }
}