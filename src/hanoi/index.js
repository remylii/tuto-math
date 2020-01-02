const hanoi = (n, x, y, z) => {
  if (n === 0) return;

  hanoi(n - 1, x, z, y);
  console.log(`${x} -> ${y}`);
  hanoi(n -1, z, y, x);
}

const main = () => {
  hanoi(6, 'A', 'B', 'C');
}

main();
