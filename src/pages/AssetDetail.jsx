import { useParams, Link } from 'react-router-dom';

export default function AssetDetail() {
  const { id } = useParams(); // e.g., 'bitcoin' from the URL
  const name = id ? id.charAt(0).toUpperCase() + id.slice(1) : 'Bitcoin';
  const symbol = name === 'Ethereum' ? 'ETH' : 'BTC';

  return (
    <div className="w-full bg-white min-h-[calc(100vh-80px)] py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left Column: Asset Info & Data */}
        <div className="lg:col-span-2 space-y-12">
          
          <div className="flex items-center gap-2 text-sm font-bold text-gray-500 mb-6">
            <Link to="/explore" className="hover:text-[#0052FF] transition-colors">Explore</Link>
            <span>›</span>
            <span className="text-[#050f19]">{name} price</span>
          </div>

          <div className="flex items-center justify-between">
             <div className="flex items-center gap-6">
               <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-3xl">
                 {symbol[0]}
               </div>
               <div>
                 <h1 className="text-[40px] font-bold text-[#050f19] leading-tight flex items-center gap-3 tracking-tight">
                   {name} <span className="text-gray-400 text-[24px] font-medium">{symbol}</span>
                 </h1>
               </div>
             </div>
          </div>

          <div className="pt-2">
             <div className="text-[48px] font-medium text-[#050f19] tracking-tight">$65,886.70</div>
             <div className="text-[#d94a4e] font-semibold text-[18px] mt-1">↘$1,341.35 (-2.00%) <span className="text-gray-400 text-[14px]">1D</span></div>
          </div>

          {/* Large mock chart */}
          <div className="w-full h-[300px] border-b border-gray-100 relative mt-8">
             <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,80 Q10,75 20,80 T40,60 T60,65 T80,45 T100,50" fill="none" stroke="#d94a4e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0,80 Q10,75 20,80 T40,60 T60,65 T80,45 T100,50 L100,100 L0,100 Z" fill="url(#main-chart-gradient-red)" opacity="0.1" />
                <defs>
                  <linearGradient id="main-chart-gradient-red" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d94a4e"/>
                    <stop offset="100%" stopColor="transparent"/>
                  </linearGradient>
                </defs>
             </svg>
          </div>
          
          <div className="flex gap-6 border-b border-gray-100 pb-4">
             {['1H', '1D', '1W', '1M', '1Y', 'ALL'].map(t => (
                <button key={t} className={`font-bold text-[14px] ${t === '1D' ? 'text-[#0052FF]' : 'text-gray-500 hover:text-gray-900'}`}>{t}</button>
             ))}
          </div>

          <div className="pt-8">
             <h3 className="text-[20px] font-bold text-[#050f19] mb-4">About {name}</h3>
             <p className="text-[16px] text-gray-600 leading-relaxed max-w-2xl">
                The world's first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis — each satoshi is worth 0.00000001 bitcoin.
             </p>
          </div>

          {/* Trading Insights */}
          <div className="pt-8 border-t border-gray-100">
             <h3 className="text-[20px] font-bold text-[#050f19] mb-6">Trading Insights</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                   <div className="text-gray-500 font-bold mb-1 text-[13px] uppercase tracking-wide">Buyer Ratio</div>
                   <div className="text-[24px] font-medium text-[#050f19]">75%</div>
                </div>
                <div>
                   <div className="text-gray-500 font-bold mb-1 text-[13px] uppercase tracking-wide">Traders</div>
                   <div className="text-[24px] font-medium text-[#050f19]">47K</div>
                </div>
                <div>
                   <div className="text-gray-500 font-bold mb-1 text-[13px] uppercase tracking-wide">Buyers</div>
                   <div className="text-[24px] font-medium text-[#050f19]">35K</div>
                </div>
                <div>
                   <div className="text-gray-500 font-bold mb-1 text-[13px] uppercase tracking-wide">Sellers</div>
                   <div className="text-[24px] font-medium text-[#050f19]">13K</div>
                </div>
             </div>
          </div>

          {/* Market Stats */}
          <div className="pt-8 border-t border-gray-100">
             <h3 className="text-[20px] font-bold text-[#050f19] mb-6">Market Stats</h3>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6">
                <div>
                   <div className="text-gray-500 font-bold mb-1 text-[13px] uppercase tracking-wide">Market Cap</div>
                   <div className="text-[20px] font-medium text-[#050f19]">$1.31T</div>
                </div>
                <div>
                   <div className="text-gray-500 font-bold mb-1 text-[13px] uppercase tracking-wide">Volume (24H)</div>
                   <div className="text-[20px] font-medium text-[#050f19]">$31.53B</div>
                </div>
                <div>
                   <div className="text-gray-500 font-bold mb-1 text-[13px] uppercase tracking-wide">Circ. Supply</div>
                   <div className="text-[20px] font-medium text-[#050f19]">20M {symbol}</div>
                </div>
                <div>
                   <div className="text-gray-500 font-bold mb-1 text-[13px] uppercase tracking-wide">Popularity</div>
                   <div className="text-[20px] font-medium text-[#050f19]">#1</div>
                </div>
                <div>
                   <div className="text-gray-500 font-bold mb-1 text-[13px] uppercase tracking-wide">All time high</div>
                   <div className="text-[20px] font-medium text-[#050f19]">$126.21K</div>
                </div>
             </div>
          </div>

        </div>

        {/* Right Column: Buy Panel */}
        <div className="lg:pl-8">
           <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6 sticky top-[100px]">
              
              <div className="flex gap-2 bg-gray-100 p-1 rounded-lg mb-6">
                 <button className="flex-1 bg-white shadow-sm rounded-md py-2.5 font-bold text-[15px] text-[#050f19]">Buy</button>
                 <button className="flex-1 text-gray-500 rounded-md py-2.5 font-bold text-[15px] hover:bg-gray-200 transition-colors">Sell</button>
                 <button className="flex-1 text-gray-500 rounded-md py-2.5 font-bold text-[15px] hover:bg-gray-200 transition-colors">Convert</button>
              </div>

              <div className="border border-gray-200 rounded-xl p-4 flex justify-between items-center mb-6 cursor-pointer hover:border-[#0052FF] transition-colors group">
                 <div>
                    <div className="text-gray-500 text-[14px] font-bold mb-1">Buy</div>
                    <div className="text-[28px] font-medium text-[#050f19]">$0</div>
                 </div>
                 <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 group-hover:bg-blue-50 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">{symbol[0]}</div>
                    <span className="font-bold text-[15px]">{symbol}</span>
                 </div>
              </div>

              <button className="w-full bg-[#0052FF] text-white py-4 rounded-full font-bold text-[16px] hover:bg-[#0045d8] transition-colors mb-4">
                 Sign up to buy
              </button>
              
              <div className="text-center">
                 <p className="text-[13px] text-gray-500 font-medium">Earn up to $2,000 when you buy $50 in crypto.</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
