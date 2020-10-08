import MissionaryTier from '@/models/MissionaryTier';

const state = {
  money: 0,
  get moneyPerSecond() { return this.followers; },
  followers: 0,
  get followersPerSecond() { return this.missionaryTiers[0].productionPerSecond; },
  missionaryTiers: Array.from({ length: 3 }, () => new MissionaryTier()),
};

const actions = {
  updateFromDelta(delta: number) {
    const deltaInSeconds = delta / 1000;
    // order matters unless we save getter values before the assignments
    state.money += state.moneyPerSecond * deltaInSeconds;
    state.followers += state.followersPerSecond * deltaInSeconds;
    for (let i = 1; i < state.missionaryTiers.length; i++) {
      const tier = state.missionaryTiers[i];
      state.missionaryTiers[i - 1].count += tier.productionPerSecond * deltaInSeconds;
    }
  },
};

export default { state, actions };
