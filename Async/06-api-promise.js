function timeout(delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delayMs);
    }, delayMs);
  });
}

/*
(async () => {
  const delay1 = await timeout(Math.floor(Math.random() * 1001));
  console.log(delay1 + 'ms');
  const delay2 = await timeout(Math.floor(Math.random() * 1001));
  console.log(delay1 + delay2 + 'ms');
})();
*/
(async () => {
  const delays = await Promise.all([
    timeout(Math.floor(Math.random() * 1001)),
    timeout(Math.floor(Math.random() * 1001)),
  ]);

  console.log(Math.max(delays[0], delays[1]) + 'ms');
})();
