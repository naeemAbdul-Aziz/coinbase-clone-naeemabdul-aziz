import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SubscribePopup from '../components/SubscribePopup';
import LearnCard from '../components/sections/LearnCard';

const cryptoBasicsArticles = [
	{
		"description": "Bitcoin is the world's first widely adopted cryptocurrency — it allows for secure and seamless peer-to-peer transactions on the internet.",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-bitcoin",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/lUIdMeDm9tf33LZNjPqz8/a44f28b20bd9846efc62cf5a230d875a/Learn_Illustration_Ultimate_Guide_Bitcoin.webp?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What is Bitcoin?"
	},
	{
		"description": "Bitcoin, Ethereum, and other crypto are revolutionizing how we invest, bank, and use money. Learn more in this beginner's guide.",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-cryptocurrency",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/5FbQ4oiMCnZMZZ1udW3jYZ/fd738c69fc6508d3286163661713f684/Learn_Illustration_What_is_a_Crypto_Wallet.png?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What is cryptocurrency?"
	},
	{
		"description": "Ethereum is the second-biggest cryptocurrency by market cap after Bitcoin. It is also a decentralized computing platform that can run a wide variety of applications — including the...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-ethereum",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/3thWklmvu2WmAHJh0k1AcC/51521feeef170d94a446fbec6f262912/what-is-ethereum.png?w=768&fm=png",
		"label": "Beginner's guide",
		"title": "What is Ethereum?"
	},
	{
		"description": "Cryptocurrencies like Bitcoin and Ethereum are powered by a technology called the blockchain.",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-a-blockchain",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/70c1NBb3A7nvNpx38gSvtd/725e6c5da4960a5a17657c02b80dd596/Learn_Illustration_Ultimate_Guide_Blockchain.png?w=768&fm=png",
		"label": "Beginner's guide",
		"title": "What is a blockchain?"
	},
	{
		"description": "You can dramatically improve your digital security with just a few easy steps",
		"href": "https://www.coinbase.com/learn/crypto-basics/how-to-secure-crypto",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/37f7NyqHqbkE9804mlNSKf/8bcfbb2ca2e9c52298e68a8ea1c8059b/security-tips.png?w=768&fm=png",
		"label": "Beginner's guide",
		"title": "How to keep your crypto secure"
	},
	{
		"description": "Not sure if you owe taxes on your crypto? Learn how using crypto this year can affect your U.S. taxes.",
		"href": "https://www.coinbase.com/learn/crypto-basics/understanding-crypto-taxes",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/5ogcizqZViJ5gqC69bnyjL/d8c068d6bce2f3013df2223f1e71d041/taxes__1_.png?w=768&fm=png",
		"label": "Tax guide",
		"title": "Understanding your crypto taxes"
	},
	{
		"description": "Look at some of the biggest myths and misconceptions people tend to have about the world’s...",
		"href": "https://www.coinbase.com/learn/crypto-basics/7-biggest-bitcoin-myths",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/7o6bSmRzl5ioNgkhA8wLk6/1e6c85e0af47751399971c6d152e7f52/debunking-bitcoin-myths-1__2_.png?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "7 biggest Bitcoin myths"
	},
	{
		"description": "From diamond hands to the flippening, we break down 11 of the most popular pieces of crypt...",
		"href": "https://www.coinbase.com/learn/tip-and-tutorials/crypto-slang-guide",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/5fZ31B0CLFBDfIWK3DQPTN/b98e564a067cbb252995d654006cee09/Group_31612615.png?w=768&fm=png",
		"label": "Glossary",
		"title": "Don’t let FUD give you FOMO or you’ll end up REKT — crypto slang, explained"
	},
	{
		"description": "A crypto airdrop is a strategy used by blockchain startups to distribute tokens or coins t...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-a-crypto-airdrop",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/lLFQHO1I3mjMVuTwxFCK8/5dd1e6c22f8f4f098ac76ae923099443/Learn_Illustration_What_is_a_crypto_airdrop.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What is a crypto airdrop?"
	},
	{
		"description": "Gas fees are transaction costs on the Ethereum blockchain, paid in Ether (ETH) or its frac...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-are-gas-fees",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/SNCH65eZIhxslhJnoAKvs/e34ea028e4019fc640fec9b2697a04e3/Learn_Illustration_What_is_an_asset_swap.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What are gas fees?"
	},
	{
		"description": "TL;DR: Ethereum Layer-2 blockchains are solutions designed to enhance the scalability of t...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-are-ethereum-layer-2-blockchains-and-how-do-they-work",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/20br3n62hwNGwcOXcSuX84/7b807a7a8e5987a77a35425ab9071563/Learn_Illustration_What_are_Ethereum_Layer-2_blockchains_and_how_do_they_work.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What are Ethereum Layer-2 blockchains and how do they work?"
	},
	{
		"description": "Stablecoins are a type of cryptocurrency whose value is pegged to another asset, such as a...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-a-stablecoin",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/3hETt7h2hfvnOnVVrJIvlO/b7204c2b9a1a35d39d0dd396d2cf49bb/Learn_Illustration_What_is_a_stablecoin.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What is a stablecoin?"
	},
	{
		"description": "Forex and crypto trading are both popular financial options with their unique advantages a...",
		"href": "https://www.coinbase.com/learn/crypto-basics/forex-trading-vs-crypto-which-is-right-for-you",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/1nuRVsAC9h5p0pw75vY2EW/0aa7c11274bb746b6c5c953e890e0aa8/Learn_Illustration_Forex_trading_vs._crypto__which_is_right_for_you.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "Forex trading vs. crypto: which is right for you?"
	},
	{
		"description": "Digital assets are anything created and stored digitally that has or provides value. They...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-are-digital-assets",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/KHA64SnR5UTMn2fUbSQVu/83b9d4eb1bf6a152aeb7998a8e881642/Learn_Illustration_What_is_a_seed_phrase.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What are digital assets?"
	},
	{
		"description": "NFT art refers to digital assets stored on a blockchain that represent content or physical...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-nft-art",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/7yY6qY3byecEXAx5Ud1Vg1/950d0600b07e30970acdf30b81c6e50b/Learn_Illustration_What_is_NFT_art.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What is NFT art?"
	},
	{
		"description": "Cryptocurrency mining is a process that validates transactions and adds them to a blockcha...",
		"href": "https://www.coinbase.com/learn/crypto-basics/how-do-cryptocurrency-miners-work",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/7vBe4TnW3kAC9VV8OQ4dOo/35c1fb7d59413514f2c45f7c3aecb89f/Learn_Illustration_How_do_cryptocurrency_miners_work.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "How do cryptocurrency miners work?"
	},
	{
		"description": "Bitcoin and Ethereum are both digital assets, but they aim to serve different purposes and...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-are-the-differences-between-bitcoin-and-ethereum",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/5q6NTAbBY5wYRFX0Der5sR/01ffb5465c9e0fdcfd5217488e675b69/Learn_Illustration_What_are_the_differences_between_Bitcoin_and_Ethereum.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What are the differences between Bitcoin and Ethereum?"
	},
	{
		"description": "APY and APR are two key metrics used to measure compensation from crypto activities. Thoug...",
		"href": "https://www.coinbase.com/learn/crypto-basics/apy-vs-apr-what-is-the-difference",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/568mkCCTDcYdwvux3cRUBy/0f2096dfa44245367d90149d52a08877/Learn_Illustration_APY_vs._APR__What_s_the_difference.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "APY vs. APR: What’s the difference?"
	},
	{
		"description": "Spot trading in crypto refers to the process of buying and selling digital currencies at t...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-spot-trading-in-crypto-and-how-does-it-work",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/4Y8IMGU7bZJXBeGIQLIMqJ/ba9d0979bc6cfb82ea8f0618c5f09ba7/Learn_Illustration_What_is_spot_trading_in_crypto_and_how_does_it_work.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What is spot trading in crypto and how does it work?"
	},
	{
		"description": "Dollar-Cost Averaging (DCA) is a strategy that involves allocating a fixed amount of resou...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-dollar-cost-averaging-dca",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/2aLCq0LWUkPgWbhc1q6Duh/9a73074f4c244b23179fbb3bf7cc5cc4/Learn_Illustration_What_is_Dollar-Cost_Averaging__DCA_.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What is Dollar-Cost Averaging (DCA)?"
	},
	{
		"description": "Decentralized Autonomous Organizations (DAOs) are entities with no central leadership, gov...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-are-decentralized-autonomous-organizations",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/2YKo5eURNdMVcAM3bcRFAZ/0881bbe6202a9f7c80fc16a6729a9d02/Learn_Illustration_What_are_Decentralized_Autonomous_Organizations__DAOs_.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What are Decentralized Autonomous Organizations (DAO)?"
	},
	{
		"description": "Memecoins are cryptocurrencies often inspired by internet memes or trends. They are typica...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-a-memecoin",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/3t9anN0FkZLV3MDjSL1YLq/a811743d5cecb588f26ed3732a0c109c/Learn_Illustration_What_is_a_memecoin.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What is a memecoin?"
	},
	{
		"description": "PoW and PoS are consensus mechanisms used in cryptocurrency networks to validate transacti...",
		"href": "https://www.coinbase.com/learn/crypto-basics/proof-of-work-pow-vs-proof-of-stake-pos-what-is-the-difference",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/3NIO2Ks4xwhV2cTOkbnyHL/3b9f03eb9cad773a55d5c1e32390b379/Learn_Illustration_Proof_of_Work__PoW__vs._Proof_of_Stake__PoS__what-s_the_difference.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "Proof of Work (PoW) vs. Proof of Stake (PoS): what's the difference?"
	},
	{
		"description": "Decentralized Applications (DApps) are applications that run on blockchain networks, striv...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-are-decentralized-applications-dapps",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/6aTHGlx4Ib9FKaaZVYuDaJ/3561917f3cba81ceae0d764c3ae70a9f/Learn_Illustration_What_are_Decentralized_Applications__DApps_.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What are Decentralized Applications (DApps)?"
	},
	{
		"description": "Mining is the process that Bitcoin and several other cryptocurrencies use to mint new coin...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-mining",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/77UG0yFqYxqIlehK6snIEO/ae54bbb1ad0dcf55934959bc9ade74ab/Copy_of_Learn_Illustration_What_is_Mining.jpg?w=768&fm=png",
		"label": "Key term",
		"title": "What is mining?"
	},
	{
		"description": "Crypto whales are individuals or entities that hold large amounts of cryptocurrency. They...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-are-crypto-whales",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/HW5JMQaTLA9Hts8v3gWqC/b536ccfd500e79e2038dce1773a62e0a/Learn_Illustration_What_are_crypto_whales.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What are crypto whales?"
	},
	{
		"description": "NFT rarity ranking is associated with the uniqueness or scarcity of a nonfungible token in...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-an-nft-rarity-ranking",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/5UcsRcC2Gfh48rp0uxI9Dc/831a2314f1843e1f0ebe3bbf5fbbd829/Learn_Illustration_What_is_an_NFT_rarity_ranking.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What is an NFT rarity ranking?"
	},
	{
		"description": "Governance tokens are a type of cryptocurrency that allows holders to participate in on-ch...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-a-governance-token",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/36EglLJ9RxIcvLFZgWDL2i/327b6acdb1e71f377d72ab260f16b0ad/Learn_Illustration_What_is_a_governance_token.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What is a governance token?"
	},
	{
		"description": "Blockchain network congestion happens when the quantity of transactions surpasses the netw...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-blockchain-network-congestion",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/52jpRbtU960O5p8ArLu36O/617e2fb95ad9cc300ce244591c97eb4f/Learn_Illustration_What_is_blockchain_network_congestion.jpg?w=768&fm=png",
		"label": "Beginner's Guide",
		"title": "What is blockchain network congestion?"
	},
	{
		"description": "Cardano is one of the biggest cryptocurrencies by market cap. It’s designed to a flexible,...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-cardano",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/5NB8iqoXkdgB5g34dwVXL6/47553e5526c7bdc7b981e1e4623ae2d3/Cardano.png?w=768&fm=png",
		"label": "Key term",
		"title": "What is Cardano?"
	},
	{
		"description": "Learn how to earn interest on your savings or take out a loan using crypto as collateral",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-cefi",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/5eUtgqyjyMWucoq39lnEus/c71d7398eb231c578245626019196596/coinbase-lend.png?w=768&fm=png",
		"label": "Key term",
		"title": "What is CeFi?"
	},
	{
		"description": "Cryptography is the study and practice of sending secure and encrypted messages between tw...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-cryptography",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/45C1odjw8K5KVxCwrfTQVl/07288951be22123c4d637be398823975/Learn_Illustration_What_is_Cryptography.jpg?w=768&fm=png",
		"label": "Key term",
		"title": "What is cryptography?"
	},
	{
		"description": "Markets experiencing sustained and/or substantial growth are called bull markets. Markets...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-a-bull-or-bear-market",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/1J2O4eqoQPMfojojw3AWuG/08ff8d4481ca16ff5781f1f935466713/what-are-a-bull-and-bear-market-2_2.png?w=768&fm=png",
		"label": "Key term",
		"title": "What is a bull or bear market?"
	},
	{
		"description": "A fork happens whenever a community makes a change to the blockchain’s protocol, or basic...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-a-fork",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/7p2bRaTZ4zasc2Y0fDuzKR/4b8a2d04fb65f3521037123d7bb4fa07/Learn_Illustration_What_is_a_Fork.jpg?w=768&fm=png",
		"label": "Key term",
		"title": "What is a fork?"
	},
	{
		"description": "Inflation is the process by which a currency like the dollar or Euro loses value over time...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-inflation",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/2CFJhuC1DSgSw141airmBC/041687320813f879d81d9cac3692808b/Learn_Illustration_What_is_Inflation_Rate.png?w=768&fm=png",
		"label": "Key term",
		"title": "What is inflation?"
	},
	{
		"description": "DOGE was created as a lighthearted alternative to traditional cryptocurrencies, but it's b...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-dogecoin",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/1LDVxSjVgfH1VD6joLl7wb/6dfacb073e0e0d7a522e5d741c7ac15f/what-is-dogecoin.png?w=768&fm=png",
		"label": "Key term",
		"title": "What is Dogecoin?"
	},
	{
		"description": "Market capitalization is the total value of all the coins that have been mined.",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-market-cap",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/013uy2S4YVqndmwXz9GzCS/93b78728cd2a6d057ab2441e7d3cc127/Learn_Illustration_What_is_Marketcap.jpg?w=768&fm=png",
		"label": "Key term",
		"title": "What is market cap?"
	},
	{
		"description": "A beginner's guide to the Polkadot protocol",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-polkadot",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/5Dhk0rBQjluyfM7qXWuXC4/d3be5bb4b28724813348f9d8f2de8d56/Learn_Illustration_What_is_a_Token.jpg?w=768&fm=png",
		"label": "Key term",
		"title": "What is Polkadot (DOT)?"
	},
	{
		"description": "A beginner's guide to the Polygon network",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-polygon",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/1aBFBdxayO1qNBrSYkfcWq/a79b59b1469e2d7f22d78f6334375bd1/polygon.png?w=768&fm=png",
		"label": "Key term",
		"title": "What is Polygon (MATIC)?"
	},
	{
		"description": "Technically, “token” is just another word for “cryptocurrency” or “cryptoasset.” But incre...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-a-token",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/5Dhk0rBQjluyfM7qXWuXC4/d3be5bb4b28724813348f9d8f2de8d56/Learn_Illustration_What_is_a_Token.jpg?w=768&fm=png",
		"label": "Key term",
		"title": "What is a token?"
	},
	{
		"description": "Exchange-traded funds — better known as an ETFs — are similar in many ways to mutual fund...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-an-etf",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/2KMunGBT3csZVThKzma6kQ/80ae2a9eb32fa2bff647b2c94762ea13/what-is-an-etf.png?w=768&fm=png",
		"label": "Key Term",
		"title": "What is an ETF?"
	},
	{
		"description": "Our guide to the best and smartest crypto articles, podcasts, and YouTube videos.",
		"href": "https://www.coinbase.com/learn/crypto-basics/essential-reading",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/4sZT4Y1rKxu07bFTxvt6EF/f3de7aeda6e217cf6acebd2541ef3067/Learn_Illustration_Ultimate_Guide_Essential_Reading.png?w=768&fm=png",
		"label": "Crypto resources",
		"title": "What to read, watch, and stream"
	},
	{
		"description": "Fiat on-ramps and off-ramps are services that facilitate the exchange of fiat currencies f...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-are-fiat-on-ramps-and-off-ramps",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/67DI41OK0g4ZN996lANUHq/b989fd78833d93d279f9b2330862e2ed/Learn_Illustration_How_to_calculate_Return_On_Investment__ROI_.jpg?w=768&fm=png",
		"label": "Key Term",
		"title": "What are fiat “on-ramps” and “off-ramps?”"
	},
	{
		"description": "Generative art NFTs are unique digital artworks created through a blend of human creativit...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-are-generative-art-nfts-and-why-are-they-fascinating",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/3oTSCyX3CwlNa6STFKruWk/4c9c105c9b0c75f1edd77c3da958ba3f/Learn_Illustration_What_is_an_NFT_rarity_ranking.jpg?w=768&fm=png",
		"label": "Beginner's guide",
		"title": "What are generative art NFTs and why are they fascinating?"
	},
	{
		"description": "This article provides a glossary of terms related to Non-Fungible Tokens (NFTs). It covers...",
		"href": "https://www.coinbase.com/learn/crypto-basics/the-ultimate-nft-glossary-all-the-terms-any-collectors-should-know",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/78XYjEj6oWnplWauDWmCKh/2d9b5aec366dc5be2281e38626d97bfe/Learn_Illustration_What_are_Real-World_Assets__RWA_.jpg?w=768&fm=png",
		"label": "Glossary",
		"title": "The ultimate NFT glossary: all the terms any collectors should know"
	},
	{
		"description": "Decentralized Autonomous Organizations (DAOs) are entities that pool and allocate resource...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-are-investment-daos-and-why-are-they-important-for-investors",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/7uOuoOLbQZ6nURPH8Tooss/2283df9080d50c26d440c1ed4a1b05a3/Learn_Illustration_What_is_a_governance_token.jpg?w=768&fm=png",
		"label": "Glossary",
		"title": "What are investment DAOs, and why are they important for investors?"
	},
	{
		"description": "Social tokens are digital assets issued by creators to monetize their content and engage w...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-are-social-tokens-and-how-do-they-redefine-value-in-the-creator-economy",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/23JeID2jyjAIGC5tyUHp3D/cacc30dcbde6597aabb4a54ce7f5a863/Learn_Illustration_What_is_an_Automated_Market_Maker__AMM_.jpg?w=768&fm=png",
		"label": "Key Term",
		"title": "What are social tokens and how do they redefine value in the creator economy?"
	},
	{
		"description": "NFT sniping is the practice of swiftly identifying and acquiring newly listed or undervalu...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-nft-sniping-and-how-does-it-work",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/3CPW1sVBNRF6zarcsFXBxk/25037e262d6eacc8ecc542d5d785d8cd/Learn_Illustration_What_is_a_node_in_cryptocurrency.jpg?w=768&fm=png",
		"label": "Key Term",
		"title": "What is NFT sniping and how does it work?"
	},
	{
		"description": "NFT Fashion refers to the creation and distribution of unique digital fashion items on the...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-nft-fashion-and-will-it-transform-the-industry",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/50Xdr3yxxSyAslucJlyIyU/a56854a3542e97cad6224412d8839d05/Learn_Illustration_What_is_ERC-20.jpg?w=768&fm=png",
		"label": "Glossary",
		"title": "What is NFT Fashion and will it transform the industry?"
	},
	{
		"description": "Token gating is a method that Web3 communities use to provide token holders with access to...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-is-token-gating-and-what-are-the-benefits-of-doing-it",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/6iNy9MRmqkqS9j0PWdy6zk/fde95554ba5da4ae6cc3d9afd1abb132/Learn_Illustration_What_are_initial_coin_offerings__ICOs__and_how_do_they_work.jpg?w=768&fm=png",
		"label": "Key Term",
		"title": "What is token gating and what are the benefits of doing it?"
	},
	{
		"description": "NFTs present unique ownership and potential for royalties, but they also come with risks s...",
		"href": "https://www.coinbase.com/learn/crypto-basics/what-are-the-pros-and-cons-of-investing-in-nfts",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/58DijjwGadDCzHDRAfxe0c/7e2ad1e7eec48a32e98abc7646cf7b8e/Learn_Illustration_What_are_NFT_royalties.jpg?w=768&fm=png",
		"label": "Beginner's guide",
		"title": "What are the pros and cons of investing in NFTs?"
	},
	{
		"description": "Utility tokens provide access to a product or service within a specific blockchain ecosyst...",
		"href": "https://www.coinbase.com/learn/crypto-basics/utility-tokens-vs-security-tokens-what-are-the-differences",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/18STfujRZMBKCfd5hoLEEP/f011c693da28df01f71764b9237aba8e/Learn_Illustration_What_is_a_DeFi_aggregator_.jpg?w=768&fm=png",
		"label": "Glossary",
		"title": "Utility tokens vs. security tokens: what are the differences?"
	},
	{
		"description": "Audius is a decentralized music streaming platform that aims to provide a more equitable m...",
		"href": "https://www.coinbase.com/learn/crypto-basics/how-is-audius-decentralizing-the-music-industry",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/3Bj992XaKV01EhUeqjveJ/e6c3c867d68f7da4e874efff61d1c340/Learn_Illustration_What_is_a_hardware_wallet.jpg?w=768&fm=png",
		"label": "Glossary",
		"title": "How is audius decentralizing the music industry?"
	},
	{
		"description": "Virtual real estate refers to digital properties in the metaverse, which can be acquired,...",
		"href": "https://www.coinbase.com/learn/crypto-basics/all-you-need-to-know-about-virtual-real-estate-and-how-to-buy-land-in-the-metaverse",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/2FaCvTPfFoDc0RKEwo72FK/46844a13adb096ac794c065dc5a9c2ae/Learn_Illustration_What_is_a_flash_loan.jpg?w=768&fm=png",
		"label": "Glossary",
		"title": "All you need to know about virtual real estate and how to buy land in the metaverse"
	},
	{
		"description": "Blockchain technology aims to increase transparency and trust in the supply chain industry...",
		"href": "https://www.coinbase.com/learn/crypto-basics/five-applications-of-blockchain-in-the-supply-chain-industry",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/1FBR3BwsDPKvHWpSLV78CI/50a84a3d6ccf0b1e23d2a10529a09ad0/Learn_Illustration_What_is_a_governance_token.jpg?w=768&fm=png",
		"label": "Beginner's guide",
		"title": "5 applications of blockchain in the supply chain industry"
	},
	{
		"description": "Bitcoin block reward, block size, and block time are integral aspects of Bitcoin's blockch...",
		"href": "https://www.coinbase.com/learn/crypto-basics/bitcoin-block-reward-block-size-block-time-whats-the-difference",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/6QAkp5yV9cDgzOx7I37z4Y/4bac6692ba238ea70dcba88190841814/Learn_Illustration_What_are_BRC-20_tokens.jpg?w=768&fm=png",
		"label": "Beginner's guide",
		"title": "Bitcoin block reward, block size, block time: what's the difference?"
	},
	{
		"description": "Fractional NFTs allow for shared ownership of a single, unique NFT, making it more accessi...",
		"href": "https://www.coinbase.com/learn/crypto-basics/understanding-the-benefits-of-fractional-ownership-in-nfts",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/4plWGRgnNP3QIe8hVH3Mi3/cf111f2c83fe036933508e98bafaf812/Learn_Illustration_How_to_use_AI_for_crypto_trading.jpg?w=768&fm=png",
		"label": "Advanced Guide",
		"title": "Understanding the benefits of fractional ownership in NFTs"
	},
	{
		"description": "Ethereum Pectra Upgrade: More scalability, lower fees & enhanced security. Discover the ke...",
		"href": "https://www.coinbase.com/learn/crypto-basics/ethereum-pectra-upgrade",
		"image": "https://images.ctfassets.net/q5ulk4bp65r7/5JnLNNMRLRDxgqTp6Sve0g/1e8d023ea3010daa9cd60bd12c08ea10/ETH_logo.jpg?w=768&fm=png",
		"label": "Advanced Guide",
		"title": "Ethereum Pectra Upgrade"
	}
];

export default function CryptoBasicsPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="flex-ff5rfy6 flex-direction-f1ltdvd9">
			<Header />

			<main className="flex-ff5rfy6 flex-direction-f1ltdvd9 width-ws51euf flex-grow-f1kx1jup" style={{ paddingBottom: '96px', '--width': '100%', '--flex-grow': 1 }}>
				<div className="flex-ff5rfy6" style={{ width: '100%', margin: '0px auto', boxSizing: 'border-box', maxWidth: '1440px', padding: '0 24px' }}>

					<div className="flex-ff5rfy6 flex-direction-f1ltdvd9" style={{ width: '100%' }}>
						{/* Header Area */}
						<div className="flex-ff5rfy6 align-items-a1myc2e" style={{ marginTop: '48px', marginBottom: '24px', alignItems: 'center' }}>
							<h1 className="margin-m1p1g5w text-t1u3h85y" style={{ '--color': 'var(--cds-core-color-display)', '--font-family': 'var(--cds-fontFamily-display)', '--font-size': '2em', '--font-weight': '500', '--line-height': 1.2 }}>
								Crypto basics
							</h1>
						</div>

						<p className="margin-m1p1g5w text-t1u3h85y" style={{ '--color': 'var(--cds-core-color-foregroundMuted)', '--font-family': 'var(--cds-fontFamily-text)', '--font-size': '1.125em', '--font-weight': '400', '--line-height': 1.4, marginBottom: '48px', maxWidth: '800px' }}>
							New to crypto? Not for long — start with these guides and explainers
						</p>

						{/* Grid Area */}
						<div className="grid-gsn3qwe" style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
							gap: '24px',
							width: '100%'
						}}>
							{cryptoBasicsArticles.map((article, idx) => (
								<LearnCard key={idx} {...article} />
							))}
						</div>

					</div>
				</div>
			</main>

			<Footer />
			<SubscribePopup />
		</div>
	);
}
