function AllSetStep({ onContinue }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="mb-8">
        {/* Provided SVG for checkmark */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="120" height="120" aria-hidden="true">
          <g>
            <circle cx="120" cy="120" r="64" fill="#0052FF" />
            <path d="M99.5 119.5L114.25 134.5L145.25 104.5" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        </svg>
      </div>
      <h2 className="text-2xl font-bold mb-2 text-white text-center">You're all set</h2>
      <p className="text-gray-400 mb-8 text-center">Your ID has been verified, you can continue.</p>
      <button
        className="w-full max-w-xs py-3 rounded-full font-semibold text-lg bg-[#0052FF] hover:bg-[#1a5cff] text-white transition"
        onClick={onContinue}
      >
        Continue
      </button>
    </div>
  );
}

export default AllSetStep;
