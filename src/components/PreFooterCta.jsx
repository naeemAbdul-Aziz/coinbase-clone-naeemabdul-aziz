export default function PreFooterCta() {
  return (
    <div className="bg-white py-32 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Text & Input Column */}
          <div className="flex-1 w-full max-w-[500px]">
             <h2 className="text-[44px] sm:text-[56px] font-medium text-[#050f19] leading-[1.05] tracking-[-0.02em] mb-4">
                Take control of your money
             </h2>
             <p className="text-[17px] text-[#050f19] font-medium mb-10">
                Start your portfolio today and discover crypto
             </p>

             <div className="flex flex-col sm:flex-row gap-4 w-full">
                <input 
                  type="email" 
                  placeholder="satoshi@nakamoto.com" 
                  className="flex-[2] px-[18px] py-[14px] border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#0052FF] focus:border-[#0052FF] text-[17px] placeholder-gray-400 shadow-sm"
                />
                <button className="flex-1 bg-[#0052FF] text-white px-8 py-[14px] rounded-full font-medium text-[17px] hover:bg-[#0045d8] transition-colors whitespace-nowrap cursor-pointer shadow-sm">
                  Sign up
                </button>
             </div>
          </div>

          {/* Right Circular Icons Graphic */}
          <div className="flex-[1.2] w-full flex justify-center lg:justify-end relative min-h-[500px]">
             <div className="relative w-[400px] h-[400px]">
                
                {/* Center Bitcoin */}
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] bg-[#F7931A] rounded-full flex items-center justify-center text-white text-[70px] font-bold shadow-2xl z-10 transition-transform hover:scale-105 cursor-pointer">
                   ₿
                </div>

                {/* Top Algorand (A) */}
                <div className="absolute top-[5%] left-[50%] -translate-x-1/2 w-[130px] h-[130px] bg-[#0f1115] rounded-full flex items-center justify-center text-white text-[50px] font-bold shadow-xl transition-transform hover:scale-105 cursor-pointer">
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.8828 2L10.0078 15.6523L6.87891 10.3711L8.33203 5.25391L4.85156 5.25391L2 15.1953L4.99219 20L9.44531 20L11.5312 12.6094L16.4883 21H21.5L13.8828 2Z" />
                   </svg>
                </div>

                {/* Top Right Arrow */}
                <div className="absolute top-[35%] right-[0%] w-[130px] h-[130px] bg-[#FFD700] rounded-full flex items-center justify-center text-[#111] text-[40px] font-bold shadow-xl transition-transform hover:scale-105 cursor-pointer">
                   →
                </div>

                {/* Bottom Right Cardano */}
                <div className="absolute top-[65%] right-[5%] w-[130px] h-[130px] bg-[#0033AD] rounded-full flex items-center justify-center text-white text-[50px] font-bold shadow-xl transition-transform hover:scale-105 cursor-pointer">
                   <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg> {/* Simplified cardano dot representation placeholder */}
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="grid grid-cols-4 gap-1 w-8 h-8 opacity-90">
                       {[...Array(12)].map((_, i) => <div key={i} className="w-[3px] h-[3px] bg-white rounded-full m-auto"></div>)}
                     </div>
                   </div>
                </div>

                {/* Bottom Center Ethereum */}
                <div className="absolute bottom-[0%] left-[50%] -translate-x-1/2 w-[130px] h-[130px] bg-[#627EEA] rounded-full flex items-center justify-center text-white text-[60px] font-bold shadow-xl transition-transform hover:scale-105 cursor-pointer">
                   Ξ
                </div>

                {/* Bottom Left Dogecoin */}
                <div className="absolute top-[65%] left-[5%] w-[130px] h-[130px] bg-[#C2A633] rounded-full flex items-center justify-center text-white text-[60px] font-bold shadow-xl transition-transform hover:scale-105 cursor-pointer">
                   Ð
                </div>

                {/* Left Center Coinbase Logo */}
                <div className="absolute top-[35%] left-[0%] w-[130px] h-[130px] bg-[#0052FF] rounded-full flex items-center justify-center text-white text-[60px] font-bold shadow-xl transition-transform hover:scale-105 cursor-pointer">
                   C
                </div>

             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
