class TicTacToeTree {

  constructor() {
    this.root = new TicTacToeTreeNode();
  }

  initTTTTree(myValues) {
    for (let i = 0; i < myValues.length - 1; i++) {
      console.log("    > Tour " + i + " -- myTree = " + this + " -- myValues = " + myValues);
      let myTmpTab1 = myValues.slice(i + 1);
      let myTmpTab2 = myValues.slice(0, i);
      let myTmpTab = myTmpTab2.concat(myTmpTab1);
      console.log("      > my current value = " + myValues[i] + ".");
      console.log("      > myTmpTab1 = " + myTmpTab1 + "].");
      console.log("      > myTmpTab2 = " + myTmpTab2 + "].");
      console.log("      > myTmpTab (Tab1 + Tab2) = " + myTmpTab + "].");
      let myNextNode = new TicTacToeTreeNode(myValues[i]);
      // this.nodeTab.push(myNextNode);
      console.log("      > myNextNode = " + myNextNode.content + " -- [" + myNextNode.nodeTab + "].");
      myNextNode.initTTTTree(myTmpTab);
    }
  }

}