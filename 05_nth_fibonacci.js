// Time: O(2^n)
// Space: O(n)

function fibR(n) {
  if (n === 1) {
    return 1;
  } else if (n === 0) {
    return 0;
  } else {
    return fibR(n - 1) + fibR(n - 2);
  }
}

// Time: O(n)
// Space: O(n)
function fibRMemo(n, memo = { 1: 0, 2: 1 }) {
  if (n in memo) {
    return memo(n);
  }
  memo[n] = fibRMemo(n - 1, memo) + fibRMemo(n - 2, memo);
  return memo[n];
}

// Time: O(n)
// Space: O(1)
function fibI(n) {
  const lastTwo = [0, 1];
  let cnt = 3;

  while (cnt <= n) {
    let nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    cnt++;
  }

  if (n == 1) {
    return lastTwo[0];
  }

  return lastTwo[0] + lastTwo[1];
}

module.exports = (n) => {
  return fibR(n);
};
