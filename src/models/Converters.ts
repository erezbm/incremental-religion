export default class Converters {
  count = 0;

  // eslint-disable-next-line no-useless-constructor
  constructor(public tier: number) { }

  get convertsPerSecond() {
    return this.count * 0.5;
  }

  get costForOne() {
    return 10 ** this.tier * (this.count + 1);
  }
}
