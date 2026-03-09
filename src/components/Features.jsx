export default function Features() {

  return (
    <div className="py-24 bg-white flex flex-col gap-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Feature 1: Advanced Trader */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          {/* Left Dark Interface Image */}
          <div className="flex-1 w-full bg-[#050f19] rounded-[40px] aspect-[4/3] max-w-[600px] overflow-hidden relative shadow-2xl p-8 flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
             {/* Fake Trading UI Panel */}
             <div className="w-[110%] h-[90%] bg-[#0f1115] rounded-xl border border-white/10 shadow-lg flex flex-col overflow-hidden relative rotate-[-2deg] scale-105">
                {/* Header */}
                <div className="flex items-center gap-4 px-4 py-3 border-b border-white/5">
                   <div className="text-white text-xs font-medium flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-blue-500"></span> BTC-USD
                   </div>
                   <div className="text-white/40 text-[10px]">64,120.32</div>
                   <div className="text-green-500 text-[10px]">+1.24%</div>
                </div>
                {/* Body */}
                <div className="flex flex-1">
                   {/* Main Chart */}
                   <div className="flex-[3] border-r border-white/5 p-4 relative flex flex-col">
                      <div className="flex-1 flex items-end gap-1 mb-2">
                         <div className="w-[2%] h-[20%] bg-red-500"></div>
                         <div className="w-[2%] h-[30%] bg-green-500"></div>
                         <div className="w-[2%] h-[40%] bg-red-500"></div>
                         <div className="w-[2%] h-[35%] bg-green-500"></div>
                         <div className="w-[2%] h-[45%] bg-green-500"></div>
                         <div className="w-[2%] h-[60%] bg-red-500"></div>
                         <div className="w-[2%] h-[55%] bg-green-500"></div>
                         <div className="w-[2%] h-[70%] bg-green-500"></div>
                         <div className="w-[2%] h-[65%] bg-green-500"></div>
                         <div className="w-[2%] h-[80%] bg-green-500"></div>
                      </div>
                      <div className="h-10 border-t border-white/5 mt-auto flex gap-1 items-end">
                        {Array(30).fill(0).map((_, i) => (
                           <div key={i} className="flex-1 bg-white/10" style={{ height: `${Math.random() * 100}%` }}></div>
                        ))}
                      </div>
                   </div>
                   {/* Order Book */}
                   <div className="flex-1 p-3 flex flex-col gap-1">
                      {Array(5).fill(0).map((_, i) => (
                         <div key={`red-${i}`} className="flex justify-between text-[9px] text-white/80">
                            <span className="text-red-400">64,12{i}.{Math.floor(Math.random()*99)}</span>
                            <span>0.0{Math.floor(Math.random()*99)}</span>
                         </div>
                      ))}
                      <div className="my-2 text-[12px] text-white text-center font-bold">64,120.32</div>
                      {Array(5).fill(0).map((_, i) => (
                         <div key={`grn-${i}`} className="flex justify-between text-[9px] text-white/80">
                            <span className="text-green-400">64,11{9-i}.{Math.floor(Math.random()*99)}</span>
                            <span>0.0{Math.floor(Math.random()*99)}</span>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
             
             {/* Small mobile overlay */}
             <div className="absolute right-4 bottom-4 w-[25%] bg-[#0f1115] rounded-xl border border-white/10 shadow-2xl h-[60%] z-10 p-2 flex flex-col">
                <div className="text-[8px] text-white/50 mb-2">BTC-USD</div>
                <div className="text-[14px] text-white font-medium mb-1">64,120</div>
                <div className="text-[8px] text-green-400 mb-4">+1.24%</div>
                <button className="w-full bg-green-500 text-white text-[9px] py-1.5 rounded mb-1">Buy</button>
                <button className="w-full bg-red-500 text-white text-[9px] py-1.5 rounded">Sell</button>
             </div>
          </div>

          {/* Right Text */}
          <div className="flex-1 w-full max-w-[500px]">
            <h2 className="text-[44px] sm:text-[48px] font-medium text-[#050f19] leading-[1.1] mb-6 tracking-[-0.02em]">
               Powerful tools, designed for the advanced trader.
            </h2>
            <p className="text-[17px] text-gray-500 mb-8 leading-[1.6]">
               Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
            </p>
            <button className="bg-[#050f19] text-white px-6 py-3.5 rounded-full font-medium text-[15px] hover:bg-black transition-colors">
               Start trading
            </button>
          </div>
        </div>

        {/* Feature 2: Coinbase One */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          {/* Left Text */}
          <div className="flex-1 w-full max-w-[500px]">
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 text-xs font-bold text-gray-600 tracking-wider mb-6">
               O COINBASE ONE
            </div>
            <h2 className="text-[44px] sm:text-[48px] font-medium text-[#050f19] leading-[1.1] mb-6 tracking-[-0.02em]">
               Zero trading fees,<br/>more rewards.
            </h2>
            <p className="text-[17px] text-gray-500 mb-8 leading-[1.6]">
               Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
            </p>
            <button className="bg-[#050f19] text-white px-6 py-3.5 rounded-full font-medium text-[15px] hover:bg-black transition-colors">
               Claim free trial
            </button>
          </div>

          {/* Right Mobile App Image */}
          <div className="flex-1 w-full bg-[#f6f8f9] rounded-[40px] aspect-[4/3] max-w-[600px] overflow-hidden relative flex items-center justify-center pt-12">
             <div className="w-[50%] h-[120%] bg-white rounded-t-[32px] shadow-[0_0_40px_rgba(0,0,0,0.08)] border-x-4 border-t-4 border-white flex flex-col relative items-center pt-16">
                
                {/* Success Checkmark */}
                <div className="w-20 h-20 bg-[#0052FF] rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30">
                   <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                
                <div className="text-[20px] font-medium text-[#050f19] mb-1">Trade successful!</div>
                <div className="text-[13px] text-gray-500 mb-8">You got 0.012423 BTC</div>

                {/* Info Card */}
                <div className="w-[85%] bg-white rounded-xl shadow-md border border-gray-100 p-4 absolute top-[280px]">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0052FF]">
                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      </div>
                      <div className="flex flex-col">
                         <div className="text-[11px] font-bold text-[#050f19]">Exclusive member benefits</div>
                         <div className="text-[10px] text-gray-500">Coinbase One members get boosted staking rewards.</div>
                         <div className="text-[10px] text-[#0052FF] font-medium mt-1">Learn more</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Feature 3: Base App */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Social App Image */}
          <div className="flex-1 w-full bg-[#f6f8f9] rounded-[40px] aspect-[4/3] max-w-[600px] overflow-hidden relative flex items-center justify-center">
             <div className="w-[45%] h-[80%] bg-white rounded-[32px] shadow-[0_0_40px_rgba(0,0,0,0.08)] border-4 border-white flex flex-col relative overflow-hidden">
                {/* App Header */}
                <div className="h-12 border-b border-gray-100 flex items-center justify-between px-4">
                   <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                   <div className="flex gap-4 text-[11px] font-bold">
                     <span className="text-[#050f19]">Trade</span>
                     <span className="text-gray-400">Talk</span>
                   </div>
                   <div className="w-6 h-6 rounded bg-gray-100"></div>
                </div>

                {/* App Content */}
                <div className="flex-1 bg-gray-50 relative">
                   <div className="h-full w-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 opacity-80 mix-blend-multiply"></div>
                   
                   {/* Overlay card */}
                   <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-lg">
                      <div className="flex justify-between items-center mb-2">
                         <div className="flex items-center gap-2">
                           <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                           <div className="text-[10px] font-bold text-[#050f19]">Virtual Protocol</div>
                         </div>
                         <div className="text-[10px] font-bold text-[#050f19]">$742M</div>
                      </div>
                      
                      {/* Fake Chart */}
                      <svg className="w-full h-8" viewBox="0 0 100 20" preserveAspectRatio="none">
                         <path d="M0,15 L10,12 L20,18 L30,5 L40,8 L50,15 L60,10 L70,12 L80,2 L90,6 L100,5" fill="none" stroke="#22c55e" strokeWidth="1.5" />
                      </svg>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Text */}
          <div className="flex-1 w-full max-w-[500px]">
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 text-xs font-bold text-gray-600 tracking-wider mb-6">
               <span className="w-3 h-3 rounded-full bg-blue-500 border border-white inline-block"></span> BASE APP
            </div>
            <h2 className="text-[44px] sm:text-[48px] font-medium text-[#050f19] leading-[1.1] mb-6 tracking-[-0.02em]">
               Countless ways to earn crypto with the Base App.
            </h2>
            <p className="text-[17px] text-gray-500 mb-8 leading-[1.6]">
               An everything app to trade, create, discover, and chat, all in one place.
            </p>
            <button className="bg-[#050f19] text-white px-6 py-3.5 rounded-full font-medium text-[15px] hover:bg-black transition-colors">
               Learn more
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
