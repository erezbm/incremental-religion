export default class Timer {
  private intervalId: number | undefined;

  constructor(private handler: (delta: number) => void) { }

  startOrRestart(timesPerSecond: number) {
    this.stop();
    let prevTime = performance.now();

    this.intervalId = setInterval(() => {
      const delta = performance.now() - prevTime;
      this.handler(delta);
      prevTime += delta;
    }, 1000 / timesPerSecond);
  }

  stop() {
    clearInterval(this.intervalId);
  }
}
