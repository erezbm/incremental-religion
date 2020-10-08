/* eslint-disable import/prefer-default-export */
export function getLooper(handler: (delta: number) => void) {
  let intervalId: number;

  return function startOrRestart(timeout: number) {
    clearInterval(intervalId);

    let lastRun: number;
    intervalId = setInterval(() => {
      const delta = performance.now() - lastRun;
      handler(delta);
      lastRun += delta;
    }, timeout);
    lastRun = performance.now();
  };
}
