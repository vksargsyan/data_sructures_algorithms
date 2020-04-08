module.exports = (arr = [], s) => {
  const o = {};
  const output = [];

  for (let n of arr) {
    const diff = s - n;
    if (o[`${diff}`]) {
      output.push([n, diff]);
    }

    o[n] = true;
  }

  return output;
};
