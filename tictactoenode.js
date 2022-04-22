class TicTacToeTreeNode {

  nodeDebug = false;

  // Initialises a new "Node" with a given (or empty) tab of children "Nodes"
  constructor(myContent = null, myNodeTab = []) {
    this.content = myContent;
    this.nodeTab = myNodeTab;
  }

  insertNode(myNode) {
    this.nodeTab.push(myNode);
  }

  insertValue(myValue) {
    this.content = myValue;
  }

  loadGridIntoNode(myValues) {
    for (let i = 0; i < myValues.length; i++) {
      this.nodeDebug ? console.log(`    > Index ${i} -- myTree = ${this} -- myValues = ${myValues}`) : null;
      let myTmpTab1 = myValues.slice(i + 1);
      let myTmpTab2 = myValues.slice(0, i);
      let myNextTab = myTmpTab2.concat(myTmpTab1);
      this.nodeDebug ? console.log(`      > my current value = ${myValues[i]}.`) : null;
      this.nodeDebug ? console.log(`      > myTmpTab1 = [${myTmpTab1}].`) : null;
      this.nodeDebug ? console.log(`      > myTmpTab2 = [${myTmpTab2}].`) : null;
      this.nodeDebug ? console.log(`      > myTmpTab (Tab1 + Tab2) = [${myNextTab}].`) : null;
      let myNextNode = new TicTacToeTreeNode(myValues[i]);
      this.insertNode(myNextNode);
      this.nodeDebug ? console.log(`      > myNextNode = ${myNextNode.content} -- [${myNextNode.nodeTab}].`) : null;
      myNextNode.loadGridIntoNode(myNextTab);
    }
  }

  displayNode(myLevel = 0) {
    if (this.nodeTab.length > 0) {
      for (let i = 0; i < this.nodeTab.length; i++) {
        console.log(`      > Level = ${myLevel} -- Index = ${i} -- Content = [${this.content}].`);
        this.nodeTab[i].displayNode(myLevel + 1);
      }
    } else {
      this.nodeDebug ? console.log("      > 'nodeTab' est vide.") : null;
    }
  }

  findInNode(myCoords) {
    if (this.nodeTab.length > 0) {
      for (let i = 0; i < this.nodeTab.length; i++) {
        if (this.content == myCoords) {
          return this;
        } else {
          this.nodeTab[i].findInNode(myCoords);
        }
      }
    }
  }

}