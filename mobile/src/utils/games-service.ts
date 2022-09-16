import { Game } from '../@types/game';
import { handleResponse } from './handle-response';
import { sleep } from './sleep';

const BASE_URL = 'http://172.21.72.171:3000';

export const gamesService = {
  async getGames() {
    return fetch(`${BASE_URL}/games`)
      .then(handleResponse<Game[]>)
      .then(async (data) => {
        await sleep(); // simulate delay
        return data;
      })
      .catch((error) => {
        throw error;
      });
  },
};
