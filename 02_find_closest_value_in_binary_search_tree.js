// AVG:     Time    = O(log(N))
//          Space   = O(log(N)) or O(D), where D is the depth of the BST if recursive
//                    O(1) if iterative
// WORST:   Time    = O(N)
function logMemory() {
  console.log(
    'Memory Usage: ',
    (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2),
    'MB'
  );
}

function findClosestValueInBSTHelperR(tree, target, closest) {
  // logMemory();
  if (!tree) {
    return closest;
  }

  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  if (target < tree.value) {
    return findClosestValueInBSTHelperR(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBSTHelperR(tree.right, target, closest);
  } else {
    return closest;
  }
}

function findClosestValueInBSTHelperI(tree, target, closest) {
  let currentNode = tree;

  while (currentNode) {
    // logMemory();

    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }

    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }

  return closest;
}

module.exports = (tree, target) => {
  const closest = Infinity;

  const res = findClosestValueInBSTHelperR(tree, target, closest);
  return res;
};
