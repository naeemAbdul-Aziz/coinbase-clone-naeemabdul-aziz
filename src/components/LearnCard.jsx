import { ArrowRight } from 'lucide-react';

export default function LearnCard({ label, title, description, image, href }) {
	return (
		<a
			href={href}
			className="group flex flex-col items-start gap-4 rounded-2xl p-4 hover:bg-gray-5 transition-colors border border-transparent hover:border-gray-15 w-full h-full"
		>
			<div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-5 flex-shrink-0">
				<img
					src={image}
					alt={title}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
			</div>
			<div className="flex flex-col flex-1 w-full pt-2">
				<span className="text-xs font-semibold text-gray-60 tracking-wider uppercase mb-2">
					{label}
				</span>
				<h3 className="text-xl font-display font-medium text-black mb-3 group-hover:text-blue-60 transition-colors line-clamp-2">
					{title}
				</h3>
				{description && (
					<p className="text-base text-gray-60 line-clamp-3 mb-4">
						{description}
					</p>
				)}
				<div className="mt-auto flex items-center text-blue-60 font-semibold opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
					<span className="text-sm">Read more</span>
					<ArrowRight size={16} className="ml-1" />
				</div>
			</div>
		</a>
	);
}
