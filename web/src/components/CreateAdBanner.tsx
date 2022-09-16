interface CreateAdBannerPros {
  children: React.ReactNode;
}

export function CreateAdBanner({ children }: CreateAdBannerPros) {
  return (
    <div className="p-1 bg-nlw-gradient self-stretch rounded-lg mt-8">
      <div className="bg-[#2A2634] px-8 py-6 grid grid-col-1 gap-4 md:flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        {/* Call to action Button */}
        {children}
      </div>
    </div>
  );
}
