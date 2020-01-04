const check = (a, b, c) => {
  if (!a) return true;
  if (c) return true;

  return false;
};

module.exports = check;
