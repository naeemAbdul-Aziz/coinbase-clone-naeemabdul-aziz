export default function Hero() {
  return (
    <div className="pt-[140px] pb-20 lg:pt-[180px] lg:pb-[100px] px-4 sm:px-[40px] lg:px-[60px] max-w-[1360px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-[120px]">
      
      {/* Left Image/Graphic Column */}
      <div className="flex-[1.1] w-full flex justify-center lg:justify-start relative">
         {/* Slightly wider and taller box to match the exact proportions in screenshot #2 */}
         <div className="relative w-full max-w-[540px] aspect-[4/4.8] bg-[#0052FF] rounded-[56px] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] flex justify-center pt-[72px]">
            
            {/* The white mock phone frame protruding out */}
            <div className="w-[82%] bg-white rounded-t-[48px] shadow-[0_-12px_40px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden relative border-x-[6px] border-t-[6px] border-[#e7efff]">
              
              {/* Fake top bar */}
              <div className="flex items-center justify-between p-8 px-8 pb-5">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col gap-[7px] w-6 cursor-pointer">
                    <span className="w-full h-[2.5px] bg-gray-700 rounded-full"></span>
                    <span className="w-full h-[2.5px] bg-gray-700 rounded-full"></span>
                    <span className="w-full h-[2.5px] bg-gray-700 rounded-full"></span>
                  </div>
                </div>
                {/* Search Bar */}
                <div className="bg-[#f2f4f7] rounded-full px-5 py-2.5 flex items-center gap-2 text-[16px] font-medium text-gray-500 w-full max-w-[200px] ml-4">
                  <svg className="w-[18px] h-[18px] text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search
                </div>
                {/* Right controls */}
                <div className="flex items-center gap-4">
                  <div className="bg-[#f2f4f7] px-3.5 py-2 rounded-full flex gap-2.5 items-center">
                    <span className="font-bold text-[15px] text-gray-500">☀</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#fbbc04]"></span>
                  </div>
                  <svg className="w-[26px] h-[26px] text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
              </div>

              {/* Portfolio Balance & Chart area */}
              <div className="p-8 pb-4 pt-4">
                 <div className="flex justify-between items-start mb-3">
                   <div className="text-[48px] font-medium text-[#050f19] tracking-[-0.03em] leading-none">$33,683.80</div>
                   <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center cursor-pointer shadow-sm border border-gray-100/50">
                     <svg className="w-[22px] h-[22px] text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                   </div>
                 </div>
                 <div className="text-[#098551] font-semibold text-[17px] flex items-center gap-1.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                    $131.36 (1.38%) <span className="text-gray-400 ml-1">1D &gt;</span>
                 </div>
                 
                 {/* Chart drawing */}
                 <div className="mt-10 mb-6 h-[100px] relative w-full overflow-visible">
                    <svg className="w-full h-full absolute bottom-[-16px] left-0 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {/* Grid lines */}
                      <line x1="0" y1="20" x2="100" y2="20" stroke="#f2f4f7" strokeWidth="1" strokeDasharray="3,3" />
                      <line x1="0" y1="45" x2="100" y2="45" stroke="#f2f4f7" strokeWidth="1" strokeDasharray="3,3" />
                      <line x1="0" y1="70" x2="100" y2="70" stroke="#f2f4f7" strokeWidth="1" strokeDasharray="3,3" />
                      <line x1="0" y1="95" x2="100" y2="95" stroke="#f2f4f7" strokeWidth="1" strokeDasharray="3,3" />
                      
                      {/* Trend line - matching the squiggly reference */}
                      <path d="M0,80 Q5,85 15,80 T30,70 T40,85 T50,60 T60,85 T70,55 T80,80 T90,45 L100,20" fill="none" stroke="#0052FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      {/* Fade gradient */}
                      <path d="M0,80 Q5,85 15,80 T30,70 T40,85 T50,60 T60,85 T70,55 T80,80 T90,45 L100,20 L100,100 L0,100 Z" fill="url(#blue-gradient)" opacity="0.12" />
                      <defs>
                        <linearGradient id="blue-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0052FF"/>
                          <stop offset="100%" stopColor="transparent"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* End point dot */}
                    <div className="absolute right-0 top-[-6px] w-[18px] h-[18px] rounded-full bg-[#0052FF] border-[3px] border-white shadow-[0_0_0_5px_rgba(0,82,255,0.15)]"></div>
                 </div>

                 <div className="flex justify-between text-[12px] text-gray-500 font-bold px-2 py-4 mb-2">
                    <span className="hover:text-gray-900 cursor-pointer">1H</span>
                    <span className="text-[#0052FF] bg-[#e7efff] px-2.5 py-1 rounded cursor-pointer">1D</span>
                    <span className="hover:text-gray-900 cursor-pointer">1W</span>
                    <span className="hover:text-gray-900 cursor-pointer">1M</span>
                    <span className="hover:text-gray-900 cursor-pointer">1Y</span>
                    <span className="hover:text-gray-900 cursor-pointer">ALL</span>
                 </div>
              </div>

              {/* Assets List */}
              <div className="flex-1 px-8 flex flex-col gap-7 w-full pb-10">
                 <div className="flex items-center justify-between group cursor-pointer w-full">
                    <div className="flex items-center gap-5">
                      <div className="w-[42px] h-[42px] bg-[#f2f4f7] rounded-full flex items-center justify-center text-[19px] font-bold text-gray-700 group-hover:bg-gray-200 transition-colors">₿</div>
                      <span className="font-bold text-[18px] text-[#050f19]">Crypto</span>
                    </div>
                    <span className="font-medium text-[#050f19] text-[18px]">$14,186.12</span>
                 </div>
                 
                 <div className="flex items-center justify-between group cursor-pointer w-full">
                    <div className="flex items-center gap-5">
                      <div className="w-[42px] h-[42px] bg-[#f2f4f7] rounded-full flex items-center justify-center text-[19px] font-bold text-gray-700 group-hover:bg-gray-200 transition-colors">📊</div>
                      <span className="font-bold text-[18px] text-[#050f19]">Stocks</span>
                    </div>
                    <span className="font-medium text-[#050f19] text-[18px]">$8,133.98</span>
                 </div>

                 <div className="flex items-center justify-between group cursor-pointer w-full">
                    <div className="flex items-center gap-5">
                      <div className="w-[42px] h-[42px] bg-[#f2f4f7] rounded-full flex items-center justify-center text-[19px] font-bold text-gray-700 group-hover:bg-gray-200 transition-colors">⚡</div>
                      <span className="font-bold text-[18px] text-[#050f19]">Derivatives</span>
                    </div>
                    <span className="font-semibold text-[#098551] text-[18px] flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                      $148.84
                    </span>
                 </div>

                 <div className="flex items-center justify-between group cursor-pointer w-full">
                    <div className="flex items-center gap-5">
                      <div className="w-[42px] h-[42px] bg-[#f2f4f7] rounded-full flex items-center justify-center text-[19px] font-bold text-gray-700 group-hover:bg-gray-200 transition-colors">🔮</div>
                      <span className="font-bold text-[18px] text-[#050f19]">Predictions</span>
                    </div>
                     <span className="font-semibold text-[#098551] text-[18px] flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                      $42.69
                    </span>
                 </div>

                 <div className="flex items-center justify-between group cursor-pointer w-full">
                    <div className="flex items-center gap-5">
                      <div className="w-[42px] h-[42px] bg-[#f2f4f7] rounded-full flex items-center justify-center text-[19px] font-bold text-gray-700 group-hover:bg-gray-200 transition-colors">💵</div>
                      <span className="font-bold text-[18px] text-[#050f19]">Cash</span>
                    </div>
                    <span className="font-medium text-[#050f19] text-[18px]">$10,124.22</span>
                 </div>
              </div>
            </div>
         </div>
         <div className="absolute -bottom-10 left-6 text-[11px] text-gray-400 font-medium tracking-wide">Stocks and prediction markets not available in your jurisdiction.</div>
      </div>

      {/* Right Text Column */}
      <div className="flex-1 w-full flex flex-col justify-center max-w-[580px]">
        <h1 className="text-[64px] lg:text-[76px] text-[#050f19] font-medium leading-[1.05] mb-6 tracking-[-0.03em]">
          The future of finance is here.
        </h1>
        
        <p className="text-[20px] lg:text-[22px] text-[#050f19] mb-12 font-normal">
          Trade crypto and more on a platform you can trust.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full border border-gray-200/80 p-1.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow bg-white items-center max-w-[540px]">
          <input 
            type="email" 
            placeholder="satoshi@nakamoto.com" 
            className="flex-[2] px-[24px] py-[16px] bg-transparent focus:outline-none text-[18px] text-[#050f19] placeholder-gray-400 w-full"
          />
          <button className="w-full sm:w-[160px] bg-[#0052FF] text-white py-[16px] rounded-full font-bold text-[17px] hover:bg-[#0045d8] transition-colors whitespace-nowrap cursor-pointer block">
            Sign up
          </button>
        </div>
      </div>

    </div>
  );
}
