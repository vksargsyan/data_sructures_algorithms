function productSum(arr, depth = 1) {
  return (
    depth *
    arr.reduce((a, e) => {
      if (Array.isArray(e)) {
        let d = depth + 1;
        a += productSum(e, d);
      } else {
        a += e;
      }

      return a;
    }, 0)
  );
}
module.exports = (arr) => {
  return productSum(arr);
};
