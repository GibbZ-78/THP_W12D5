class TicTacToeTreeNode {

  // Initialises a new "Node" with a given (or empty) tab of children "Nodes"
  constructor(myContent = null, myNodeTab = []) {
    this.content = myContent;
    this.nodeTab = myNodeTab;
  }

  insertNode(myNode) {
    this.nodeTab.push(myNode);
  }

  insertValue() {

  }

}