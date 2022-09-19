import { Ad } from '../@types/ad';
import { Game } from '../@types/game';
import { handleResponse } from './handle-response';
import { sleep } from './sleep';

// Get IP from WSL 2 distro => wsl hostname -I
const IP = '172.23.159.244';
const PORT = '3000';
const BASE_URL = `http://${IP}:${PORT}`;

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
  async getAds(id: string) {
    try {
      const response = await fetch(`${BASE_URL}/games/${id}/ads`);
      const data = await handleResponse<Ad[]>(
        response,
        'Failed to fetch game Ads'
      );
      await sleep();
      return data;
    } catch (error) {
      throw error;
    }
  },
};
