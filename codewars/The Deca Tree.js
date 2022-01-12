function tree(trunks) {
  this.trunks = trunks;
  this.branches = trunks * 10;
  this.twigs = trunks * 100;
  this.leaves = trunks * 1000;

  this.describe = function() {
    return (`This tree has ${this.trunks} trunks, ${this.branches} branches, ${this.twigs} twigs and ${this.leaves} leaves.`);
  }

  this.chopTrunk = function(n) {
    this.trunks -= n;
    if (this.trunks < 0) this.trunks = 0;
    this.chopBranch(n * 10);
  }

  this.chopBranch = function(n) {
    this.branches -= n;
    if (this.branches < 0) this.branches = 0;
    this.chopTwig(n * 10);
  }

  this.chopTwig = function(n) {
    this.twigs -= n;
    if (this.twigs < 0) this.twigs = 0;
    this.chopLeaf(n * 10);

  }

  this.chopLeaf = function(n) {
    this.leaves -= n;
    if (this.leaves < 0) this.leaves = 0;
  }
}

var myTree = new tree(10);

myTree.chopLeaf(1);
console.log(myTree.describe()) // myTree.leaves, 9999

myTree.chopTwig(1);
console.log(myTree.describe())
// myTree.twigs, 999
// myTree.leaves, 9989

myTree.chopBranch(1);
console.log(myTree.describe())
// myTree.branches, 99
// myTree.twigs, 989
// Test.assertEquals(myTree.leaves, 9889

myTree.chopTrunk(1);
console.log(myTree.describe())
// myTree.trunks, 9);
// myTree.branches, 89
// myTree.twigs, 889
// myTree.leaves, 8889

// This tree has 9 trunks, 89 branches, 889 twigs and 8889 leaves
