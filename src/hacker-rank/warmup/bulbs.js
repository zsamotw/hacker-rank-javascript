function solution(A) {
  if (A !== null && A !== undefined) {
    let bulbs = Array.from('0'.repeat(A.length));
    return A.reduce((result, bulbNumber) => {
      bulbs[bulbNumber - 1] = 1;
      const currentBulbs = bulbs.slice(0, bulbNumber)
      const isShining = currentBulbs.every(b => b === 1);
      return isShining ? result + 1 : result;
    }, 0)
  } else {
    return 0;
  }
}
