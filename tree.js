class Tree {

  constructor(myInitArray = []) {
    for (let i = 0; i < myInitArray.length; i++) {
      this.root = new TreeNode();
      this.root.insert(myInitArray[i]);
    }
  }

}