import * as Dialog from '@radix-ui/react-dialog';
import { GameController, MagnifyingGlassPlus } from 'phosphor-react';
import { getFirstLetter, WEEKDAYS } from '../../utils/week-days';
import { CreateAdBanner } from '../CreateAdBanner';
import { Input } from './Input';
import { Checkbox } from './Checkbox';
import { Game } from '../../utils/types/Game';

interface FormDialogProps {
  selectData: Game[];
}
export function FormDialog({ selectData }: FormDialogProps) {
  return (
    <Dialog.Root>
      <CreateAdBanner>
        <Dialog.Trigger className="flex items-center gap-3 bg-violet-500 text-white rounded py-3 px-4 hover:bg-violet-600">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </CreateAdBanner>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="fixed bg-[#2A2634] pt-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25">
          <Dialog.Title className="text-2xl font-black">
            Publique um anúncio
          </Dialog.Title>

          <form className="flex flex-col gap-4 py-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold">
                Qual o Game?
              </label>
              <select
                defaultValue={'default'}
                className="bg-zinc-900 py-3 px-4 text-sm appearance-none"
                onChange={(event) => console.log(event.target.value)}
              >
                <option disabled value="default">
                  Selecione o game que deseja jogar
                </option>
                {selectData.map((game) => (
                  <option key={game.id} value={game.id}>
                    {game.title}
                  </option>
                ))}
              </select>
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

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
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

            <div className="grid grid-cols-1 gap-4 lg:flex gap-x-20">
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="weekDays">
                  Quando costuma jogar?
                  <div className="grid grid-cols-4 gap-2 pt-2">
                    {WEEKDAYS.map((value, index) => (
                      <button
                        key={index}
                        type="button"
                        title={value}
                        className="w-10 h-10 py-2 px-4 bg-zinc-900 rounded hover:bg-zinc-700 active:bg-violet-500"
                      >
                        {getFirstLetter(value)}
                      </button>
                    ))}
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

            <div className="mt-2 flex items-center gap-2">
              <Checkbox
                id="useVoiceChannel"
                name="useVoiceChannel"
                label="Costumo me conectar ao chat de voz"
                containerColor="bg-zinc-900"
                indicatorColor="text-emerald-400"
                iconSize={20}
                onChange={(checked) => console.log(checked)}
              />
            </div>

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
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
