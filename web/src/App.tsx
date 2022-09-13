import { MagnifyingGlassPlus } from 'phosphor-react'
import './styles/main.css';
import logo from './assets/logo-nlw-esports.svg';

function App() {
  return (
    <div className="max-w-[1334px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>
      
      <div className='grid grid-cols-6 gap-6 mt-16'>
        {[1,2,3,4,5,6].map((_, i) => (
          <a key={i} href="" className='relative rounded-lg overflow-hidden'>
            <img src={`/game-${i+1}.png`} alt="" />
            <div className='bg-game-gradient absolute w-full pt-16 pb-4 px-4 bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>Jogo mais assistido</strong>
              <span className='text-zinc-300 text-sm block'>{i} anúncios</span>
            </div>
          </a>
        ))}
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='flex items-center gap-3 bg-violet-500 text-white rounded py-3 px-4 hover:bg-violet-600'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>

  );
}

export default App;
