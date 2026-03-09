export default function Education() {
  const cards = [
    {
      title: "USDC: The digital dollar for the global crypto economy",
      desc: "Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more...",
      bgColor: "bg-black",
      graphic: (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
           {/* Abstract swirling circles */}
           <div className="absolute inset-4 rounded-full border border-blue-500/30"></div>
           <div className="absolute inset-8 rounded-full border border-green-500/40"></div>
           <div className="absolute inset-12 rounded-full border border-orange-500/50"></div>
           <div className="w-16 h-16 bg-[#0052FF] rounded-full flex items-center justify-center text-white text-3xl font-bold z-10">
              $
           </div>
           {/* Colored dots */}
           <div className="absolute top-8 left-1/4 w-2 h-2 rounded-full bg-green-400"></div>
           <div className="absolute bottom-8 right-1/4 w-2 h-2 rounded-full bg-orange-400"></div>
        </div>
      )
    },
    {
      title: "Can crypto really replace your bank account?",
      desc: "If you're a big enough fan of crypto, you've probably heard the phrase \"be your own bank\" or the term \"bankless\" — the idea being that...",
      bgColor: "bg-[#0052FF]",
      graphic: (
        <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
           {/* Bank Building Top */}
           <div className="absolute top-4 w-3/4 flex flex-col items-center opacity-80">
              <div className="w-4/5 h-4 bg-white/20 rounded-t"></div>
              <div className="flex gap-2 my-1">
                 <div className="w-2 h-8 bg-white/20"></div>
                 <div className="w-2 h-8 bg-white/20"></div>
                 <div className="w-2 h-8 bg-white/20"></div>
                 <div className="w-2 h-8 bg-white/20"></div>
              </div>
              <div className="w-full h-3 bg-white/20"></div>
           </div>
           {/* Phone device intersecting */}
           <div className="absolute -bottom-8 w-2/3 h-24 bg-white rounded-t-2xl shadow-lg border-2 border-white/10 flex flex-col p-2">
             <div className="w-1/3 h-1 bg-gray-200 rounded-full mx-auto mb-2"></div>
             <div className="flex-1 flex gap-2">
                <div className="flex-1 bg-orange-500 rounded"></div>
                <div className="flex-[2] bg-blue-500 rounded"></div>
             </div>
           </div>
           <div className="absolute left-6 top-8 w-6 h-6 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-[10px] font-bold">₿</div>
           <div className="absolute right-6 top-12 w-6 h-6 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-[10px] font-bold">₿</div>
        </div>
      )
    },
    {
      title: "When is the best time to invest in crypto?",
      desc: "Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause...",
      bgColor: "bg-[#e2e8f0]",
      graphic: (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
           {/* Hand catching coins */}
           <div className="absolute bottom-4 right-0 w-3/4 h-1/2 flex items-center">
              <svg viewBox="0 0 100 50" className="w-full h-full fill-[#fca5a5]">
                 <path d="M100,50 L50,50 C40,50 30,45 20,40 L0,30 L5,20 L25,30 C35,35 45,35 55,35 C65,35 80,45 100,45 Z" />
                 <path d="M40,30 Q30,25 20,15 L10,10 L15,5 L25,15 Q35,25 45,25 Z" fill="#f87171" opacity="0.5"/>
              </svg>
           </div>
           
           <div className="absolute w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-lg font-bold shadow-lg -translate-y-4">
              ₿
           </div>
           
           {/* Data Blocks */}
           <div className="absolute top-6 left-6 w-8 h-8 rounded bg-green-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="14" width="4" height="7"/><rect x="10" y="3" width="4" height="18"/><rect x="17" y="10" width="4" height="11"/></svg>
           </div>
           <div className="absolute bottom-8 left-10 w-8 h-8 rounded bg-orange-400 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="14" width="4" height="7"/><rect x="10" y="3" width="4" height="18"/><rect x="17" y="10" width="4" height="11"/></svg>
           </div>
           <div className="absolute top-8 right-8 w-8 h-8 rounded bg-blue-500 grid grid-cols-2 gap-0.5 p-1">
              <div className="bg-white"></div><div className="bg-white"></div><div className="bg-white"></div><div className="bg-white"></div>
           </div>
           <div className="absolute bottom-10 right-4 w-6 h-6 rounded bg-[#050f19] grid grid-cols-2 gap-0.5 p-0.5">
              <div className="bg-white"></div><div className="bg-white/50"></div><div className="bg-white/50"></div><div className="bg-white"></div>
           </div>
        </div>
      )
    }
  ];

  return (
    <div className="py-24 bg-[#f6f8f9]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <h2 className="text-[44px] sm:text-[56px] font-medium text-[#050f19] leading-[1.05] tracking-[-0.02em] max-w-[400px]">
            New to crypto?<br/>Learn some crypto basics
          </h2>
          <div className="max-w-[400px] flex flex-col md:items-start gap-6 pt-4">
             <p className="text-[17px] text-gray-500 leading-[1.6]">
               Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
             </p>
             <button className="bg-[#050f19] text-white px-6 py-3.5 rounded-full font-medium text-[15px] hover:bg-black transition-colors w-max">
               Read More
             </button>
          </div>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col gap-6">
              <div className={`w-full aspect-[1.6/1] ${card.bgColor} rounded-3xl overflow-hidden`}>
                 {card.graphic}
              </div>
              <div className="flex flex-col gap-3">
                 <h3 className="text-[22px] font-medium text-[#050f19] leading-[1.2] group-hover:text-[#0052FF] transition-colors">{card.title}</h3>
                 <p className="text-[15px] text-gray-500 leading-[1.6] line-clamp-3">{card.desc}</p>
                 <span className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider hidden group-hover:block">Read article</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
