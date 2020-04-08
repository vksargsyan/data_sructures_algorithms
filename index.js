const twoNumbersOfSum = require('./01_two_numbers_of_sum');
const findClosestValueInBinarySearchTree = require('./02_find_closest_value_in_binary_search_tree');
const branchSums = require('./03_branch_sums');

const BST = require('./BST');

// --------------
const a1 = twoNumbersOfSum([3, 5, -4, 8, 11, -1, 6], 10);
console.log('Two numbers of sum: ', a1);

// --------------
const tree1 = new BST();
for (let n of [10, 5, 15, 2, 5, 13, 22, 1, 14]) {
  tree1.insert(n);
}

const a2 = findClosestValueInBinarySearchTree(tree1.root, 12);
console.log('Closest value in BST: ', a2);

// --------------
const tree2 = new BST();
for (let n of [8, 3, 10, 1, 6, 14, 4, 7, 13]) {
  tree2.insert(n);
}

console.log(JSON.stringify(tree2));

const a3 = branchSums(tree2.root);
console.log('Branch Sum in BST: ', a3);