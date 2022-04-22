class BinaryTreeNode {

  // Initialises a new Node with a given content (or "null") and "null" children Nodes
  constructor(myContent = null) {
    this.content = myContent;
    this.leftNode = null;
    this.rightNode = null;
  }

  // Ajoute, demanière triée par "compare()" la valeur "myValue" : (i) dans le noeud depuis lequel est appelé 
  // la fonction si le contenu de ce noeud est "null" OU (ii) sous ce dernier, selon la valeur de son contenu 
  // et sa comparaison avec la valeur à ajouter
  insert(myValue) {
    if (this.content === null) {
      this.content = myValue;
    } else if (this.compare(myValue)) {
      if (this.leftNode === null) {
        this.leftNode = new BinaryTreeNode();
      }
      this.leftNode.insert(myValue);
    } else {
      if (this.rightNode === null) {
        this.rightNode = new BinaryTreeNode();
      }
      this.rightNode.insert(myValue);
    }
  }

  // Function comparing the current node content with the value to be inserted to then enable 
  // recursive call of the "insert()" method.
  // NB: should be modified according to the ordering logic (here, lowest numbers are 
  //     on the left part of the tree, highest on the right side) but "compare()" should be 
  //     able to be modified to work with other types than "numbers" and other comparison logic
  //     than ">", "<", etc.
  compare(myTmpValue) {
    if (this.content >= myTmpValue) {
      return true;
    } else {
      return false;
    }
  }

}