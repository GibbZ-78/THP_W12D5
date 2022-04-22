class TicTacToeTree {

  constructor() {
    this.root = new TicTacToeTreeNode();
  }

  loadGridIntoTree(myValues) {
    this.root.loadGridIntoNode(myValues)
  }

  displayTree() {
    this.root.displayNode();
  }

  findInTree(myTabXY) {
    this.root.findInNode(myTabXY);
  }
}