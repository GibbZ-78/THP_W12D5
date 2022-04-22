class BinaryTree {

  // Instantiate a new binary tree with the "myContent" as the root content (or "null" if empty)
  constructor(myContent = null) {
    this.root = new BinaryTreeNode();
    this.root.insert(myContent);
  }

  // fill a binary tree with the given array (if not empty / null / undefined)
  fillWithArray(myInitArray) {
    if (myInitArray !== null && myInitArray !== undefined && myInitArray.length != 0) {
      for (let i = 0; i < myInitArray.length; i++) {
        this.root.insert(myInitArray[i]);
      }
    }
  }

  // Function returning an ascendant sorted array of the whole binary tree content
  // NB: it uses "returnSortedNode", a recursive function benefiting from the left/middle/right logic
  //     to have the content returned in the correct and expected order
  returnSortedArrayFromTree() {
    if (this.root === null) {
      return [];
    } else {
      let myResultArray = [];
      const returnSortedNode = (myNode) => {
        myNode.leftNode && returnSortedNode(myNode.leftNode);
        myResultArray.push(myNode.content);
        myNode.rightNode && returnSortedNode(myNode.rightNode);
      }
      returnSortedNode(this.root);
      return myResultArray;
    }
  }

}