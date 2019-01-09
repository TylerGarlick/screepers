// Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Harvester!')

/**
 * Clean up stale memory predicted upon the game's creeps
 *
 * @public
 * @example cleanUp()
 */
export const cleanUp = () => {
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name]
    }
  }
}
