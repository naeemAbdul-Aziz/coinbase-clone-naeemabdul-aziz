import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChangeIndicator = ({ value, isPositive }) => {
	return (
		<div className={`flex items-center gap-1 ${isPositive ? 'text-green-60' : 'text-red-60'}`}>
			{isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
			<span className="font-medium text-[16px]">{Math.abs(value).toFixed(2)}%</span>
		</div>
	);
};

// Mini asset list component for the right column
const AssetListItem = ({ name, symbol, price, change, isPositive, iconColor }) => {
	return (
		<div className="flex items-center justify-between py-3">
			<div className="flex items-center gap-3">
				<div className={`w-8 h-8 rounded-full ${iconColor} flex items-center justify-center text-white font-bold text-xs`}>
					{symbol[0]}
				</div>
				<div>
					<h4 className="font-medium text-gray-100">{name}</h4>
					<p className="text-gray-60 text-sm">{symbol}</p>
				</div>
			</div>
			<div className="flex items-center gap-8">
				<div className="text-right">
					<p className="font-medium text-gray-100">GHS {price.toLocaleString()}</p>
					<div className="flex justify-end mt-0.5">
						<ChangeIndicator value={change} isPositive={isPositive} />
					</div>
				</div>
				<button className="bg-blue-60 hover:bg-[#0045D8] transition-colors text-white font-medium px-4 py-2 rounded-full text-sm">
					Trade
				</button>
			</div>
		</div>
	);
};

const TopAssetsList = ({ title }) => {
	const assets = [
		{ name: 'Bitcoin', symbol: 'BTC', price: 720734.65, change: -0.99, isPositive: false, color: 'bg-[#F7931A]' },
		{ name: 'Ethereum', symbol: 'ETH', price: 20861.20, change: -1.70, isPositive: false, color: 'bg-[#627EEA]' },
		{ name: 'Tether', symbol: 'USDT', price: 10.77, change: 0.01, isPositive: true, color: 'bg-[#26A17B]' },
	];

	return (
		<div className="flex flex-col h-full pl-8">
			<h3 className="text-[17px] font-semibold text-gray-100 mb-6">{title}</h3>
			<div className="flex flex-col gap-2">
				{assets.map((asset) => (
					<AssetListItem
						key={asset.symbol}
						name={asset.name}
						symbol={asset.symbol}
						price={asset.price}
						change={asset.change}
						isPositive={asset.isPositive}
						iconColor={asset.color}
					/>
				))}
			</div>
		</div>
	);
};

export default function MarketStatsPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const ChartSvgBlock = ({ isRed }) => {
		const [hoverX, setHoverX] = useState(null);
		const strokeColor = isRed ? "rgb(207,32,47)" : "rgb(9,133,81)";
		const gradientId = isRed ? "980ph1ijzl-red" : "980ph1ijzl-green";
		const clipId = isRed ? "clip-red" : "clip-green";

		return (
			<div className="w-full flex-col mt-8" style={{ width: '100%', height: '150px' }}>
				<div className="relative w-full h-[120px] max-w-[502px] overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
					<div
						className="min-w-[502px] h-full relative cursor-crosshair group"
						onMouseMove={(e) => {
							const rect = e.currentTarget.getBoundingClientRect();
							setHoverX(e.clientX - rect.left);
						}}
						onMouseLeave={() => setHoverX(null)}
					>
						<svg height="120" width="502" className="absolute top-0 left-0">
							<g transform="translate(0, 2)">
								<defs>
									<linearGradient gradientUnits="userSpaceOnUse" id={gradientId} x1="0" x2="0" y1="2" y2="118">
										<stop offset="0%" stopColor={strokeColor} stopOpacity="0.3"></stop>
										<stop offset="100%" stopColor={strokeColor} stopOpacity="0"></stop>
									</linearGradient>
									<clipPath id={clipId}>
										<rect x="0" y="0" width={hoverX !== null ? hoverX : 502} height="120" />
									</clipPath>
								</defs>

								{/* Provided exact SVG path */}
								<path fill="transparent" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2,28.825L3.735,27.668L5.47,23.504L7.206,24.392L8.941,24.133L10.676,23.184L12.411,17.688L14.146,18.307L15.881,19.157L17.617,19.447L19.352,19.018L21.087,19.076L22.822,19.721L24.558,24.244L26.293,30.663L28.028,42.306L29.763,41.541L31.498,36.622L33.233,39.596L34.969,40.189L36.704,40.942L38.439,46.433L40.174,42.044L41.909,40.484L43.644,43.298L45.38,42.363L47.115,45.47L48.85,47.701L50.585,45.6L52.321,46.551L54.056,52.876L55.791,68.671L57.526,68.25L60.996,65.287L62.732,66.064L64.467,81.908L66.202,79.798L67.937,75.776L69.672,66.85L71.408,63.777L73.143,64.555L74.878,68.09L76.613,64.347L78.348,65.763L80.083,61.125L81.819,56.212L83.554,56.607L85.289,58.045L87.024,55.211L88.759,58.672L90.495,55.378L92.23,51.63L93.965,51.343L95.7,52.422L97.436,50.056L99.171,56.113L100.906,62.462L102.641,60.244L104.376,61.824L106.111,58.881L109.582,52.456L111.317,52.739L113.052,56.205L114.787,58.614L116.522,62.493L118.258,63.642L119.993,63.578L121.728,70.097L123.463,64.602L125.198,62.486L126.934,63.46L128.669,68.377L130.404,69.436L132.139,59.83L133.874,60.497L135.61,59.885L137.345,57.365L139.08,58.211L140.815,56.344L142.55,56.344L144.285,59.349L146.021,62.458L147.756,63.536L149.491,62.964L151.226,57.762L152.962,54.255L154.697,50.746L156.432,51.032L158.167,48.127L159.902,58.223L161.637,59.346L163.373,64.118L165.108,63.252L166.843,65.168L168.578,69.144L170.314,68.561L172.049,69.526L173.784,65.675L175.519,66.116L177.254,62.599L178.989,64.38L180.725,64.303L182.46,75.659L184.195,69.056L185.93,67.827L187.665,61.504L189.4,59.139L191.136,62.078L192.871,64.433L194.606,63.775L196.341,67.232L198.076,60.569L199.812,64.015L201.547,66.808L203.282,75.624L205.017,75.141L206.752,70.682L208.488,74.171L210.223,94.539L211.958,96.269L213.693,98.335L215.428,91.993L217.164,93.565L218.899,88.319L220.634,90.77L222.369,90.105L224.104,93.117L225.84,90.826L227.575,90.377L229.31,88.555L231.045,89.382L232.78,88.02L234.515,93.125L236.251,87.398L237.986,91.011L239.721,89.388L241.456,86.687L243.191,88.31L244.927,91.166L246.662,95.629L248.397,95.838L250.132,100.217L251.867,101.739L253.603,118L255.338,111.091L257.073,100.469L258.808,97.819L260.543,90.943L262.278,81.988L264.014,79.077L265.749,81.644L267.484,80.594L269.219,79.37L270.954,77.116L272.69,79.208L274.425,79.362L277.895,78.472L281.366,83.357L283.101,84.485L284.836,86.322L286.571,88.594L290.042,84.277L291.777,82.727L293.512,85.021L295.247,81.346L296.982,81.739L298.718,66.121L300.453,63.019L302.188,62.427L303.923,63.462L305.658,67.758L307.393,64.864L309.129,67.286L310.864,66.2L312.599,67.535L314.334,67.553L316.07,69.909L317.805,71.041L319.54,67.855L321.275,65.829L323.01,74.308L324.745,69.928L326.481,70.292L328.216,69.348L329.951,66.195L331.686,57.459L333.421,50.621L335.156,55.4L336.892,49.61L338.627,54.482L340.362,53.177L342.097,46.902L343.832,31.242L345.568,33.559L347.303,32.703L349.038,30.069L350.773,34.364L352.508,34.24L354.244,35.552L355.979,36.269L357.714,35.653L359.449,32.427L361.184,30.505L362.92,28.892L364.655,25.548L366.39,15.944L368.125,2L369.86,7.802L371.595,12.978L373.331,19.686L375.066,20.749L376.801,22.494L378.536,23.217L380.271,26.337L382.007,48.695L383.742,47.485L385.477,44.793L387.212,40.252L388.947,39.23L390.683,34.971L392.418,52.143L394.153,56.404L395.888,55.773L397.623,55.222L399.359,51.325L401.094,50.944L402.829,52.16L404.564,75.965L406.299,89.628L408.034,70.116L409.77,67.345L411.505,61.239L413.24,66.534L414.975,63.479L416.71,67.738L418.446,64.762L420.181,68.503L421.916,65.607L423.651,73.867L425.386,86.964L427.122,91.092L428.857,89.541L430.592,89.541L432.327,91.883L434.062,92.925L435.798,102.133L437.533,86.281L439.268,79.902L441.003,73.044L442.738,77.882L444.473,70.286L446.209,74.426L447.944,72.535L449.679,69.767L451.414,76.442L453.149,74.158L454.885,78.838L456.62,88.677L458.355,89.557L460.09,80.019L461.826,75.811L463.561,74.536L465.296,78.532L467.031,78.532L468.766,72.657L470.501,78.174L472.237,78.731L473.972,81.27L475.707,83.663L477.442,80.573L479.177,80.606L480.912,83.941L482.648,81.143L484.383,79.727L486.118,79.592L487.853,83.597L489.588,87.739L491.323,86.413L493.059,85.424L494.794,91.529L496.529,103.139L498.264,100.244L500,103.971"></path>
								<path fill={`url(#${gradientId})`} d="M2,28.825L3.735,27.668L5.47,23.504L7.206,24.392L8.941,24.133L10.676,23.184L12.411,17.688L14.146,18.307L15.881,19.157L17.617,19.447L19.352,19.018L21.087,19.076L22.822,19.721L24.558,24.244L26.293,30.663L28.028,42.306L29.763,41.541L31.498,36.622L33.233,39.596L34.969,40.189L36.704,40.942L38.439,46.433L40.174,42.044L41.909,40.484L43.644,43.298L45.38,42.363L47.115,45.47L48.85,47.701L50.585,45.6L52.321,46.551L54.056,52.876L55.791,68.671L57.526,68.25L60.996,65.287L62.732,66.064L64.467,81.908L66.202,79.798L67.937,75.776L69.672,66.85L71.408,63.777L73.143,64.555L74.878,68.09L76.613,64.347L78.348,65.763L80.083,61.125L81.819,56.212L83.554,56.607L85.289,58.045L87.024,55.211L88.759,58.672L90.495,55.378L92.23,51.63L93.965,51.343L95.7,52.422L97.436,50.056L99.171,56.113L100.906,62.462L102.641,60.244L104.376,61.824L106.111,58.881L109.582,52.456L111.317,52.739L113.052,56.205L114.787,58.614L116.522,62.493L118.258,63.642L119.993,63.578L121.728,70.097L123.463,64.602L125.198,62.486L126.934,63.46L128.669,68.377L130.404,69.436L132.139,59.83L133.874,60.497L135.61,59.885L137.345,57.365L139.08,58.211L140.815,56.344L142.55,56.344L144.285,59.349L146.021,62.458L147.756,63.536L149.491,62.964L151.226,57.762L152.962,54.255L154.697,50.746L156.432,51.032L158.167,48.127L159.902,58.223L161.637,59.346L163.373,64.118L165.108,63.252L166.843,65.168L168.578,69.144L170.314,68.561L172.049,69.526L173.784,65.675L175.519,66.116L177.254,62.599L178.989,64.38L180.725,64.303L182.46,75.659L184.195,69.056L185.93,67.827L187.665,61.504L189.4,59.139L191.136,62.078L192.871,64.433L194.606,63.775L196.341,67.232L198.076,60.569L199.812,64.015L201.547,66.808L203.282,75.624L205.017,75.141L206.752,70.682L208.488,74.171L210.223,94.539L211.958,96.269L213.693,98.335L215.428,91.993L217.164,93.565L218.899,88.319L220.634,90.77L222.369,90.105L224.104,93.117L225.84,90.826L227.575,90.377L229.31,88.555L231.045,89.382L232.78,88.02L234.515,93.125L236.251,87.398L237.986,91.011L239.721,89.388L241.456,86.687L243.191,88.31L244.927,91.166L246.662,95.629L248.397,95.838L250.132,100.217L251.867,101.739L253.603,118L255.338,111.091L257.073,100.469L258.808,97.819L260.543,90.943L262.278,81.988L264.014,79.077L265.749,81.644L267.484,80.594L269.219,79.37L270.954,77.116L272.69,79.208L274.425,79.362L277.895,78.472L281.366,83.357L283.101,84.485L284.836,86.322L286.571,88.594L290.042,84.277L291.777,82.727L293.512,85.021L295.247,81.346L296.982,81.739L298.718,66.121L300.453,63.019L302.188,62.427L303.923,63.462L305.658,67.758L307.393,64.864L309.129,67.286L310.864,66.2L312.599,67.535L314.334,67.553L316.07,69.909L317.805,71.041L319.54,67.855L321.275,65.829L323.01,74.308L324.745,69.928L326.481,70.292L328.216,69.348L329.951,66.195L331.686,57.459L333.421,50.621L335.156,55.4L336.892,49.61L338.627,54.482L340.362,53.177L342.097,46.902L343.832,31.242L345.568,33.559L347.303,32.703L349.038,30.069L350.773,34.364L352.508,34.24L354.244,35.552L355.979,36.269L357.714,35.653L359.449,32.427L361.184,30.505L362.92,28.892L364.655,25.548L366.39,15.944L368.125,2L369.86,7.802L371.595,12.978L373.331,19.686L375.066,20.749L376.801,22.494L378.536,23.217L380.271,26.337L382.007,48.695L383.742,47.485L385.477,44.793L387.212,40.252L388.947,39.23L390.683,34.971L392.418,52.143L394.153,56.404L395.888,55.773L397.623,55.222L399.359,51.325L401.094,50.944L402.829,52.16L404.564,75.965L406.299,89.628L408.034,70.116L409.77,67.345L411.505,61.239L413.24,66.534L414.975,63.479L416.71,67.738L418.446,64.762L420.181,68.503L421.916,65.607L423.651,73.867L425.386,86.964L427.122,91.092L428.857,89.541L430.592,89.541L432.327,91.883L434.062,92.925L435.798,102.133L437.533,86.281L439.268,79.902L441.003,73.044L442.738,77.882L444.473,70.286L446.209,74.426L447.944,72.535L449.679,69.767L451.414,76.442L453.149,74.158L454.885,78.838L456.62,88.677L458.355,89.557L460.09,80.019L461.826,75.811L463.561,74.536L465.296,78.532L467.031,78.532L468.766,72.657L470.501,78.174L472.237,78.731L473.972,81.27L475.707,83.663L477.442,80.573L479.177,80.606L480.912,83.941L482.648,81.143L484.383,79.727L486.118,79.592L487.853,83.597L489.588,87.739L491.323,86.413L493.059,85.424L494.794,91.529L496.529,103.139L498.264,100.244L500,103.971L500,120L498.264,120L496.529,120L494.794,120L493.059,120L491.323,120L489.588,120L487.853,120L486.118,120L484.383,120L482.648,120L480.912,120L479.177,120L477.442,120L475.707,120L473.972,120L472.237,120L470.501,120L468.766,120L467.031,120L465.296,120L463.561,120L461.826,120L460.09,120L458.355,120L456.62,120L454.885,120L453.149,120L451.414,120L449.679,120L447.944,120L446.209,120L444.473,120L442.738,120L441.003,120L439.268,120L437.533,120L435.798,120L434.062,120L432.327,120L430.592,120L428.857,120L427.122,120L425.386,120L423.651,120L421.916,120L420.181,120L418.446,120L416.71,120L414.975,120L413.24,120L411.505,120L409.77,120L408.034,120L406.299,120L404.564,120L402.829,120L401.094,120L399.359,120L397.623,120L395.888,120L394.153,120L392.418,120L390.683,120L388.947,120L387.212,120L385.477,120L383.742,120L382.007,120L380.271,120L378.536,120L376.801,120L375.066,120L373.331,120L371.595,120L369.86,120L368.125,120L366.39,120L364.655,120L362.92,120L361.184,120L359.449,120L357.714,120L355.979,120L354.244,120L352.508,120L350.773,120L349.038,120L347.303,120L345.568,120L343.832,120L342.097,120L340.362,120L338.627,120L336.892,120L335.156,120L333.421,120L331.686,120L329.951,120L328.216,120L326.481,120L324.745,120L323.01,120L321.275,120L319.54,120L317.805,120L316.07,120L314.334,120L312.599,120L310.864,120L309.129,120L307.393,120L305.658,120L303.923,120L302.188,120L300.453,120L298.718,120L296.982,120L295.247,120L293.512,120L291.777,120L290.042,120L286.571,120L284.836,120L283.101,120L281.366,120L277.895,120L274.425,120L272.69,120L270.954,120L269.219,120L267.484,120L265.749,120L264.014,120L262.278,120L260.543,120L258.808,120L257.073,120L255.338,120L253.603,120L251.867,120L250.132,120L248.397,120L246.662,120L244.927,120L243.191,120L241.456,120L239.721,120L237.986,120L236.251,120L234.515,120L232.78,120L231.045,120L229.31,120L227.575,120L225.84,120L224.104,120L222.369,120L220.634,120L218.899,120L217.164,120L215.428,120L213.693,120L211.958,120L210.223,120L208.488,120L206.752,120L205.017,120L203.282,120L201.547,120L199.812,120L198.076,120L196.341,120L194.606,120L192.871,120L191.136,120L189.4,120L187.665,120L185.93,120L184.195,120L182.46,120L180.725,120L178.989,120L177.254,120L175.519,120L173.784,120L172.049,120L170.314,120L168.578,120L166.843,120L165.108,120L163.373,120L161.637,120L159.902,120L158.167,120L156.432,120L154.697,120L152.962,120L151.226,120L149.491,120L147.756,120L146.021,120L144.285,120L142.55,120L140.815,120L139.08,120L137.345,120L135.61,120L133.874,120L132.139,120L130.404,120L128.669,120L126.934,120L125.198,120L123.463,120L121.728,120L119.993,120L118.258,120L116.522,120L114.787,120L113.052,120L111.317,120L109.582,120L106.111,120L104.376,120L102.641,120L100.906,120L99.171,120L97.436,120L95.7,120L93.965,120L92.23,120L90.495,120L88.759,120L87.024,120L85.289,120L83.554,120L81.819,120L80.083,120L78.348,120L76.613,120L74.878,120L73.143,120L71.408,120L69.672,120L67.937,120L66.202,120L64.467,120L62.732,120L60.996,120L57.526,120L55.791,120L54.056,120L52.321,120L50.585,120L48.85,120L47.115,120L45.38,120L43.644,120L41.909,120L40.174,120L38.439,120L36.704,120L34.969,120L33.233,120L31.498,120L29.763,120L28.028,120L26.293,120L24.558,120L22.822,120L21.087,120L19.352,120L17.617,120L15.881,120L14.146,120L12.411,120L10.676,120L8.941,120L7.206,120L5.47,120L3.735,120L2,120Z"></path>
							</g>
						</svg>

						{/* Mock scrubber line */}
						<div
							className="absolute top-0 bottom-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10"
							style={{ left: hoverX !== null ? `${hoverX}px` : '151px' }}
						>
							<div className={`w-px h-[120px] border-l-2 border-dashed ${isRed ? 'border-red-60' : 'border-green-60'}`}></div>
						</div>

					</div>
				</div>

				{/* X axis times */}
				<div className="flex justify-between text-gray-60 text-xs mt-4 font-medium px-4">
					<span>6:35 PM</span>
					<span>1:15 AM</span>
					<span>7:55 AM</span>
					<span>2:30 PM</span>
				</div>
			</div>
		);
	};

	const MetricRow = ({ title, description, value, change, isPositive, listTitle }) => (
		<div className="border-b border-gray-10 last:border-0 hover:bg-gray-5/30 transition-colors">
			<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
				{/* Left Column (Info) */}
				<div className="col-span-1 md:col-span-3 py-10 pr-8 border-r border-gray-10">
					<h2 className="text-2xl font-bold mb-4">{title}</h2>
					<p className="text-gray-100 text-sm leading-relaxed">{description}</p>
				</div>

				{/* Middle Column (Chart & Controls) */}
				<div className="col-span-1 md:col-span-6 py-10 px-8 border-r border-gray-10 flex flex-col justify-between">
					<div>
						<div className="flex justify-between items-start">
							<div className="flex items-center gap-1 bg-gray-5 rounded-lg p-1">
								{['1H', '1D', '1W', '1M', '1Y', 'ALL'].map((time) => (
									<button
										key={time}
										className={`px-3 py-1 text-xs font-medium rounded-md ${time === '1D' ? 'bg-gray-10 text-gray-100' : 'text-gray-60 hover:text-gray-100'}`}
									>
										{time}
									</button>
								))}
							</div>
						</div>

						<div className="mt-8">
							<h1 className="text-[40px] leading-tight font-medium text-gray-100">
								{value}
							</h1>
							<div className="mt-1">
								<ChangeIndicator value={change} isPositive={isPositive} />
							</div>
						</div>
					</div>

					{/* Render the SVG block here */}
					<ChartSvgBlock isRed={!isPositive} />
				</div>

				{/* Right Column (List) */}
				<div className="col-span-1 md:col-span-3 py-10 pl-4">
					<TopAssetsList title={listTitle} />
				</div>
			</div>
		</div>
	);

	return (
		<div className="min-h-screen flex flex-col bg-white">
			<Header />
			<main className="flex-1 w-full pt-16">
				{/* Header section */}
				<div className="max-w-[1400px] mx-auto px-6 py-8">
					<h1 className="text-display-3 text-gray-100 mb-2">Market statistics</h1>
				</div>

				<div className="w-full border-t border-gray-10">
					{/* Row 1: Market cap */}
					<MetricRow
						title="Market cap"
						description="The total value of all cryptocurrencies combined, giving a snapshot of the entire crypto market's size and health. When the market cap is growing, it usually means more people are investing, and the market is doing well. If it's shrinking, it could mean people are selling off their assets, and the market might be facing a downturn."
						value="GHS 24.06T"
						change={-1.09}
						isPositive={false}
						listTitle="Top Assets"
					/>

					{/* Row 2: Trade volume */}
					<MetricRow
						title="Trade volume"
						description="The total amount of cryptocurrency traded within a specific period, reflecting market activity and liquidity. Monitoring trade volume helps you gauge market strength and liquidity. High volume often supports price trends, suggesting strong market interest, while low volume may signal weaker trends and potential uncertainty."
						value="GHS 1.26T"
						change={4.38}
						isPositive={true}
						listTitle="Most volume"
					/>

					{/* Row 3: BTC dominance */}
					<MetricRow
						title="BTC dominance"
						description="Bitcoin's percentage of the total market cap, indicating its relative strength compared to other cryptocurrencies. Monitoring BTC dominance helps you gauge Bitcoin's market strength. High dominance indicates Bitcoin's strong position relative to altcoins, while low dominance suggests increasing interest in other cryptocurrencies."
						value="60.13%"
						change={-0.12}
						isPositive={false}
						listTitle="Top Assets"
					/>

					{/* Row 4: Buy-sell ratio */}
					<MetricRow
						title="Buy-sell ratio"
						description="A key metric that measures the proportion of buy orders to sell orders in the market. When the buy sell ratio is high, it means more people are buying than selling, which could signal growing interest in acquiring assets. When it's low, it indicates more people are selling than buying, which could signal the opposite."
						value="GHS 0.76"
						change={-2.57}
						isPositive={false}
						listTitle="Top Assets"
					/>
				</div>
			</main>
			<Footer />
		</div>
	);
}
