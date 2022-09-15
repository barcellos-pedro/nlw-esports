import './styles/main.css';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import logo from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { GameController } from 'phosphor-react';
import { Input } from './components/form/Input';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then((response) => (response.ok ? response.json() : []))
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="max-w-[1334px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            adsCount={game._count.ads}
            title={game.title}
            bannerUrl={game.bannerUrl}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25">
            <Dialog.Title className="text-2xl font-black">
              Publique um anúncio
            </Dialog.Title>

            <form className="py-8">
              <div className="mb-4">
                <label htmlFor="game" className="font-semibold">
                  Qual o Game
                </label>
                <Input
                  id="game"
                  type="text"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>

              <div className="pb-4">
                <label className="font-semibold" htmlFor="name">
                  Seu nome (ou nickname)
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Como te chamam dentro do game?"
                />
              </div>

              <div className="flex justify-between pb-4">
                <div>
                  <label className="font-semibold" htmlFor="yearsPlaying">
                    Joga há quantos anos?
                  </label>
                  <Input
                    id="yearsPlaying"
                    type="number"
                    placeholder="Tudo bem ser zero"
                  />
                </div>
                <div>
                  <label className="font-semibold" htmlFor="discord">
                    Qual seu Discord?
                  </label>
                  <Input id="discord" type="text" placeholder="Usuario#0000" />
                </div>
              </div>

              <div className="flex justify-between gap-6">
                <div>
                  <label className="font-semibold" htmlFor="weekDays">
                    Quando costuma jogar?
                    {/* TODO: Criar component diferente de Input */}
                  </label>
                  <input
                    id="weekDays"
                    type="text"
                    className="block text-sm rounded py-3 px-4 mt-2 bg-zinc-900 placeholder:text-zinc-500"
                  />
                </div>
                <div>
                  <label className="font-semibold" htmlFor="hourStart">
                    Qual horário do dia?
                  </label>
                  <div className="flex gap-2">
                    <Input type="time" id="hourStart" />
                    <Input type="time" id="hourEnd" />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label className="font-semibold" htmlFor="useVoiceChannel">
                  <input
                    type="checkbox"
                    name="useVoiceChannel"
                    id="useVoiceChannel"
                    className="mr-2"
                  />
                  Costumo me conectar ao chat de voz
                </label>
              </div>
            </form>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="bg-zinc-500 rounded-lg py-4 px-5 hover:bg-zinc-600"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex items-center gap-3 bg-violet-500 rounded-lg py-4 px-5 hover:bg-violet-600"
              >
                <GameController size={24} /> Encontrar duo
              </button>
            </div>
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
