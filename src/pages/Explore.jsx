import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Explore() {
  const assets = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$66,933.51', change: '-1.31%', mktcap: '$1.3T', vol: '$29.0B' },
    { name: 'Ethereum', symbol: 'ETH', price: '$1,938.72', change: '-2.07%', mktcap: '$234.1B', vol: '$13.7B' },
    { name: 'Tether', symbol: 'USDT', price: '$1.00', change: '+0.01%', mktcap: '$184.0B', vol: '$57.4B' },
    { name: 'BNB', symbol: 'BNB', price: '$613.22', change: '-1.94%', mktcap: '$83.6B', vol: '$1.2B' },
    { name: 'XRP', symbol: 'XRP', price: '$1.34', change: '-1.52%', mktcap: '$82.1B', vol: '$1.4B' },
    { name: 'USDC', symbol: 'USDC', price: '$1.00', change: '0.00%', mktcap: '$77.2B', vol: '$5.3B' },
    { name: 'Solana', symbol: 'SOL', price: '$81.55', change: '-2.57%', mktcap: '$46.6B', vol: '$2.3B' },
    { name: 'TRON', symbol: 'TRX', price: '$0.29', change: '+1.11%', mktcap: '$27.3B', vol: '$435.7M' },
    { name: 'Dogecoin', symbol: 'DOGE', price: '$0.0885', change: '-2.05%', mktcap: '$13.6B', vol: '$738.3M' },
    { name: 'Cardano', symbol: 'ADA', price: '$0.25', change: '-2.48%', mktcap: '$9.0B', vol: '$351.4M' }
  ];

  return (
    <div className="w-full bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-[32px] font-bold text-[#050f19] mb-8">Explore crypto</h1>

        <div className="mb-12">
           <h2 className="text-[20px] font-bold text-[#050f19] mb-4">Market stats</h2>
           <p className="text-[16px] text-gray-600 mb-6 max-w-3xl leading-relaxed">
             The overall crypto market is shrinking this week. As of today, the total crypto market capitalization is 2.23 trillion, representing a 0.58% decrease from last week. The 24-hour crypto market trading volume has also seen a 1.38% decrease over the past day.
           </p>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="#" className="border border-gray-100 rounded-lg p-5 hover:border-[#0052FF] hover:shadow-sm transition-all block">
                 <div className="text-[14px] text-gray-500 font-medium mb-1">Total market cap</div>
                 <div className="text-[24px] font-medium text-[#050f19]">$2.23T</div>
                 <div className="text-[14px] font-bold text-[#d94a4e] mt-1">↘ 1.38%</div>
              </a>
              <a href="#" className="border border-gray-100 rounded-lg p-5 hover:border-[#0052FF] hover:shadow-sm transition-all block">
                 <div className="text-[14px] text-gray-500 font-medium mb-1">Trade volume</div>
                 <div className="text-[24px] font-medium text-[#050f19]">$117.40B</div>
                 <div className="text-[14px] font-bold text-[#098551] mt-1">↗ 4.81%</div>
              </a>
              <a href="#" className="border border-gray-100 rounded-lg p-5 hover:border-[#0052FF] hover:shadow-sm transition-all block">
                 <div className="text-[14px] text-gray-500 font-medium mb-1">Buy-sell ratio</div>
                 <div className="text-[24px] font-medium text-[#050f19]">0.76</div>
                 <div className="text-[14px] font-bold text-[#d94a4e] mt-1">↘ 2.51%</div>
              </a>
              <a href="#" className="border border-gray-100 rounded-lg p-5 hover:border-[#0052FF] hover:shadow-sm transition-all block">
                 <div className="text-[14px] text-gray-500 font-medium mb-1">BTC dominance</div>
                 <div className="text-[24px] font-medium text-[#050f19]">60.09%</div>
                 <div className="text-[14px] font-bold text-[#d94a4e] mt-1">↘ 0.19%</div>
              </a>
           </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-[20px] font-bold text-[#050f19]">Crypto market prices</h2>
              <p className="text-gray-500 text-sm mt-1">18,561 assets</p>
            </div>
            
            <div className="hidden md:flex gap-2">
               <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-bold">All assets</button>
               <button className="px-4 py-2 border border-gray-200 rounded-full text-sm font-bold hover:bg-gray-50">1D</button>
            </div>
          </div>

          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-gray-100 text-[12px] font-bold text-gray-500">
               <div className="col-span-4">Asset</div>
               <div className="col-span-2 text-right">Market price</div>
               <div className="col-span-2 text-right">Change</div>
               <div className="col-span-2 text-right">Mkt cap</div>
               <div className="col-span-2 text-right">Actions</div>
            </div>

            <div className="divide-y divide-gray-50">
                {assets.map((coin, idx) => (
                  <Link to={`/price/${coin.name.toLowerCase()}`} key={idx} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="col-span-4 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                         {coin.symbol[0]}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-[16px] text-[#050f19] group-hover:text-[#0052FF]">{coin.name}</span>
                        <span className="text-gray-500 text-[16px]">{coin.symbol}</span>
                      </div>
                    </div>

                    <div className="col-span-2 text-right text-[16px] text-[#050f19]">
                      {coin.price}
                    </div>

                    <div className={`col-span-2 text-right text-[16px] ${coin.change.startsWith('+') ? 'text-[#098551]' : coin.change === '0.00%' ? 'text-gray-500' : 'text-[#d94a4e]'}`}>
                      {coin.change}
                    </div>

                    <div className="col-span-2 text-right text-[16px] text-[#050f19]">
                      {coin.mktcap}
                    </div>

                    <div className="col-span-2 text-right">
                       <button className="bg-white border text-gray-900 border-gray-200 px-4 py-1.5 rounded-full font-bold text-[14px] hover:border-gray-300 shadow-sm transition-all" onClick={(e) => e.preventDefault()}>
                         Trade
                       </button>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm font-bold text-gray-500">
             1-10 of 18,561 assets &nbsp;&nbsp;&nbsp; <a href="#" className="text-[#0052FF]">Next page ›</a>
          </div>

        </div>

      </div>
    </div>
  );
}
