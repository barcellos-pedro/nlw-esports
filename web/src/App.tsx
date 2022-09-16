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

            <form className="flex flex-col gap-4 py-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual o Game?
                </label>
                <Input
                  id="game"
                  type="text"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="name">
                  Seu nome (ou nickname)
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Como te chamam dentro do game?"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="yearsPlaying">
                    Joga há quantos anos?
                  </label>
                  <Input
                    id="yearsPlaying"
                    type="number"
                    placeholder="Tudo bem ser zero"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="discord">
                    Qual seu Discord?
                  </label>
                  <Input id="discord" type="text" placeholder="Usuario#0000" />
                </div>
              </div>

              <div className="flex gap-x-20">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="weekDays">
                    Quando costuma jogar?
                    <div className='grid grid-cols-4 gap-2 pt-2'>
                      <button type='button' title="Domingo" className='w-10 h-10 py-2 px-4 bg-zinc-900 rounded hover:bg-zinc-700 active:bg-violet-500'>D</button>
                      <button type='button' title="Segunda" className='w-10 h-10 py-2 px-4 bg-zinc-900 rounded hover:bg-zinc-700 active:bg-violet-500'>S</button>
                      <button type='button' title="Terça" className='w-10 h-10 py-2 px-4 bg-zinc-900 rounded hover:bg-zinc-700 active:bg-violet-500'>T</button>
                      <button type='button' title="Quarta" className='w-10 h-10 py-2 px-4 bg-zinc-900 rounded hover:bg-zinc-700 active:bg-violet-500'>Q</button>
                      <button type='button' title="Quinta" className='w-10 h-10 py-2 px-4 bg-zinc-900 rounded hover:bg-zinc-700 active:bg-violet-500'>Q</button>
                      <button type='button' title="Sexta" className='w-10 h-10 py-2 px-4 bg-zinc-900 rounded hover:bg-zinc-700 active:bg-violet-500'>S</button>
                      <button type='button' title="Sábado" className='w-10 h-10 py-2 px-4 bg-zinc-900 rounded hover:bg-zinc-700 active:bg-violet-500'>S</button>
                    </div>
                  </label>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label className="font-semibold" htmlFor="hourStart">
                    Qual horário do dia?
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    <Input type="time" id="hourStart" />
                    <Input type="time" id="hourEnd" />
                  </div>
                </div>
              </div>

              <div className="mt-2 text-sm">
                <label htmlFor="useVoiceChannel">
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
              <Dialog.Close
                type="button"
                className="bg-zinc-500 rounded-md px-5 h-12 hover:bg-zinc-600"
              >
                Cancelar
              </Dialog.Close>
              <button
                type="submit"
                className="flex items-center gap-3 bg-violet-500 rounded-md h-12 px-5 hover:bg-violet-600"
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
