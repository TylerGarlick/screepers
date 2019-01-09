/**
 * Get the known flags from the game
 *
 * @public
 * @example getFlags()
 *
 * @return Array<object>
 */
export const getFlags = async () => Game.flags

/**
 * Gets all the rooms in the game
 *
 * @public
 * @example await getRooms()
 *
 * @return Promise<<string, object>>
 */
export const getRooms = async () => Game.rooms

/**
 * Get a single room by name
 *
 * @param {String} name - the name of the room
 */
export const getRoom = async (name: string) => {
  const rooms = await getRooms()
  if (!Object.keys(rooms).includes(name)) {
    throw new Error(`Room (${name}) not found`)
  }

  return rooms[name]
}

export const getSpawns = async () => Game.spawns

export const getStructures = async () => Game.structures

export const getById = async (id: string) => Game.getObjectById(id)

export const getExitsInRoom = async (roomName: string) => Game.map.describeExits(roomName)

export const findExit = async (fromRoom: string, toRoom: string, settings?: RouteOptions) => Game.map.findExit(fromRoom, toRoom, settings)

export const findRoute = async (fromRoom: string, toRoom: string, settings?: RouteOptions) => Game.map.findRoute(fromRoom, toRoom, settings)

export const getDistance = async (fromRoom: string, toRoom: string, continuous?: boolean) => Game.map.getRoomLinearDistance(fromRoom, toRoom, continuous)

export const getRoomTerrain = async (roomName: string) => Game.map.getRoomTerrain(roomName)

export const isAvailable = async (roomName: string) => Game.map.isRoomAvailable(roomName)


