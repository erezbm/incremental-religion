import Converters from '@/models/Converters';

const state = {
  religionName: 'Your Super Awesome Religion',
  money: 0,
  get moneyPerSecond() { return Math.floor(this.followers) * 0.5; },
  followers: 0,
  get followersPerSecond() { return this.convertersTiers[0].convertsPerSecond; },
  convertersTiers: Array.from({ length: 3 }, (_, i) => new Converters(i + 1)),
  achievements: [],
};

const actions = {
  update(delta: number) {
    const deltaInSeconds = delta / 1000;
    // update in this order because the getters are changing
    state.money += state.moneyPerSecond * deltaInSeconds;
    state.followers += state.followersPerSecond * deltaInSeconds;
    for (let i = 1; i < state.convertersTiers.length; i++) {
      const tier = state.convertersTiers[i];
      state.convertersTiers[i - 1].count += tier.convertsPerSecond * deltaInSeconds;
    }
  },
};

export default { state, actions };
