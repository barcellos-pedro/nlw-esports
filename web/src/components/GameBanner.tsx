interface GameBannerProps {
  title: string;
  bannerUrl: string;
  adsCount: number;
}

export function GameBanner({ title, bannerUrl, adsCount }: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden md:hover:-translate-y-4 duration-300">
      <img src={bannerUrl} alt={`${title} game image`} />
      <div className="bg-game-gradient absolute w-full pt-16 pb-4 px-4 bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">
          {adsCount} anúncios(s)
        </span>
      </div>
    </a>
  );
}
