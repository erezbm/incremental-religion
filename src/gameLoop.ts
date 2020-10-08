import game from './stores/game';
import { getLooper } from './utils';

function updateGame(delta: number) {
  game.actions.updateFromDelta(delta);
  // console.log('delta', +delta.toFixed(2));
}

const updateGameLooper = getLooper(updateGame);
export default (updatesPerSecond: number) => updateGameLooper(1000 / updatesPerSecond);
