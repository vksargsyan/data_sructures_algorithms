function branchSums(tree, acc, sums) {
  if (!tree) return false;

  const newAcc = tree.value + acc;

  if (!tree.left && !tree.rigth) {
    sums.push(newAcc);
    return;
  }

  branchSums(tree.left, newAcc, sums);
  branchSums(tree.right, newAcc, sums);
}
module.exports = (tree) => {
  const sums = [];
  branchSums(tree, 0, sums);

  return sums;
};
