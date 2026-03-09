export default function Learn() {
  const popularGuides = [
    { type: "Beginner's Guide", title: "What is cryptocurrency?" },
    { type: "Getting started", title: "How to earn crypto rewards" },
    { type: "Getting Started", title: "How to add crypto to your Coinbase Wallet" },
    { type: "Your crypto", title: "Tax forms, explained: A guide to U.S. tax forms and crypto reports" },
    { type: "Getting Started", title: "Beginner’s guide to dapps" },
    { type: "Market Update", title: "Everything you need to know about the first-ever U.S. Bitcoin ETF" }
  ];

  const cryptoBasics = [
    { type: "Beginner's Guide", title: "What is Bitcoin?", desc: "Bitcoin is the world's first widely adopted cryptocurrency — it allows for secure and seamless peer-to-peer transactions on the internet." },
    { type: "Beginner's Guide", title: "Guide to DeFi tokens and altcoins", desc: "From Aave to Zcash, decide what to trade with our beginner's guide" },
    { type: "Beginner's guide", title: "What is Ethereum?", desc: "Learn the fundamentals of the second largest cryptocurrency network." }
  ];

  const tags = [
    "Bitcoin", "Blockchain", "Cardano", "Crypto wallet", "DeFi", "Ethereum", "Fork", "Inflation", "Market cap", "NFT", "Private key", "Protocol", "Smart contract", "Token", "Volatility memecoin"
  ];

  return (
    <div className="w-full bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-[44px] sm:text-[56px] font-bold text-[#050f19] tracking-tight leading-tight mb-4">
            Crypto questions, answered
          </h1>
          <p className="text-[20px] text-gray-600 max-w-2xl mx-auto">
            Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
          </p>
        </div>

        {/* Featured Section */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-[24px] font-bold text-[#050f19]">Featured</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center gap-12 cursor-pointer hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all border border-gray-100">
             <div className="flex-1">
                <div className="text-[14px] font-bold text-[#0052FF] mb-4 uppercase tracking-wider">Video Tutorial</div>
                <h3 className="text-[32px] sm:text-[40px] font-bold text-[#050f19] leading-tight mb-6">When is the best time to invest in crypto?</h3>
                <p className="text-[18px] text-gray-500 mb-8 max-w-xl">
                  When prices are fluctuating, how do you know when to buy? Learn more about using dollar-cost averaging to weather price volatility.
                </p>
             </div>
             <div className="flex-1 w-full relative">
                <div className="aspect-video bg-[#0052FF] rounded-xl flex items-center justify-center text-white">
                   <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
             </div>
          </div>
        </div>

        {/* Popular Section */}
        <div className="mb-20">
           <h2 className="text-[24px] font-bold text-[#050f19] mb-6">Popular</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularGuides.map((guide, idx) => (
                 <div key={idx} className="border border-gray-100 rounded-xl p-6 hover:shadow-md cursor-pointer transition-all hover:border-[#0052FF] group">
                    <div className="text-[12px] font-bold text-gray-500 uppercase tracking-widest mb-3">{guide.type}</div>
                    <h3 className="text-[18px] font-bold text-[#050f19] group-hover:text-[#0052FF] transition-colors leading-snug">
                       {guide.title}
                    </h3>
                 </div>
              ))}
           </div>
        </div>

        {/* Crypto basics */}
        <div className="mb-20">
           <div className="mb-8">
              <h2 className="text-[32px] font-bold text-[#050f19] mb-2">Crypto basics</h2>
              <p className="text-[18px] text-gray-500">New to crypto? Not for long — start with these guides and explainers</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {cryptoBasics.map((article, idx) => (
                 <div key={idx} className="bg-white rounded-2xl group cursor-pointer flex flex-col h-full">
                    <div className="aspect-video bg-gray-100 rounded-xl mb-6 overflow-hidden">
                       <div className="w-full h-full bg-blue-50 group-hover:scale-105 transition-transform duration-500"></div>
                    </div>
                    <div className="text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-3">{article.type}</div>
                    <h3 className="text-[20px] font-bold text-[#050f19] mb-3 group-hover:text-[#0052FF] transition-colors">{article.title}</h3>
                    <p className="text-gray-500 text-[16px] leading-relaxed flex-1">{article.desc}</p>
                 </div>
              ))}
           </div>
           
           <a href="#" className="text-[#0052FF] font-bold text-[16px] hover:underline">See more crypto basics ›</a>
        </div>

        {/* What is... */}
        <div className="mb-12">
           <h2 className="text-[24px] font-bold text-[#050f19] mb-6">What is...</h2>
           <div className="flex flex-wrap gap-3">
              {tags.map((tag, idx) => (
                 <a key={idx} href="#" className="px-5 py-2.5 bg-gray-100 rounded-full font-bold text-[15px] text-[#050f19] hover:bg-gray-200 transition-colors">
                    {tag}
                 </a>
              ))}
              <a href="#" className="px-5 py-2.5 bg-white border border-gray-200 rounded-full font-bold text-[15px] text-[#0052FF] hover:bg-gray-50 transition-colors">
                 See more
              </a>
           </div>
        </div>

      </div>
    </div>
  );
}
