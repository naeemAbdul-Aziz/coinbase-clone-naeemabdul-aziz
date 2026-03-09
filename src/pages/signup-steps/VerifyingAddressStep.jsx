function VerifyingAddressStep() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center">
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full bg-[#0052FF] flex items-center justify-center mx-auto">
            <svg width="72" height="72" viewBox="0 0 48 48" fill="none">
              <rect x="12" y="8" width="24" height="32" rx="2" fill="white" fillOpacity="0.9" />
              <rect x="16" y="16" width="16" height="2" rx="1" fill="#0052FF" />
              <rect x="16" y="22" width="16" height="2" rx="1" fill="#0052FF" />
              <rect x="16" y="28" width="8" height="2" rx="1" fill="#0052FF" />
              <circle cx="24" cy="36" r="2" fill="#0052FF" />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2 text-center">Verifying your address...</h1>
        <p className="text-[#8A919E] text-center">Address verification is in progress</p>
      </div>
    </div>
  );
}

export default VerifyingAddressStep;
