import game from './stores/game';
import Timer from './utils/Timer';

function updateGame(delta: number) {
  game.actions.update(delta);
  // console.log('delta', +delta.toFixed(2));
}

export default new Timer(updateGame);
