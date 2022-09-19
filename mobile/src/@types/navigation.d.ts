import { Game } from './game';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: Game;
    }
  }
}
