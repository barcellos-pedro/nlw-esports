import './styles/main.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import logo from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { FormDialog } from './components/form/FormDialog';
import { Game } from './utils/types/Game';

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/games')
      .then(({ data }) => setGames(data))
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-[1334px] mx-auto flex flex-col items-center my-20 p-8">
      <img src={logo} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="flex flex-wrap justify-center md:grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            adsCount={game._count.ads}
            title={game.title}
            bannerUrl={game.bannerUrl}
          />
        ))}
      </div>

      <FormDialog selectData={games} />
    </div>
  );
}

export default App;
