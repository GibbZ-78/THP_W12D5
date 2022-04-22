class TicTacToeTree {

  constructor() {
    this.root = new TicTacToeTreeNode();
  }

  initTTTTree(myValues) {
    for (let i = 0; i < myValues.length - 1; i++) {
      console.log("    > Tour " + i + " - myTree = " + myTree + " - myValues = " + myValues);
      let myTmpTab1 = myValues.slice(i + 1);
      let myTmpTab2 = myValues.slice(0, i);
      let myTmpTab = myTmpTab2.concat(myTmpTab1);
      myNode
    }
  }

}