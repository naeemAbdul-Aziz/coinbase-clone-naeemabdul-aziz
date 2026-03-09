import { useRef } from 'react';

function VerifyAddressStep({ onNext, onFile }) {
  const fileInputRef = useRef(null);
  return (
    <div className="min-h-screen bg-[#0A0B0D] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Verify your address</h1>
        <h2 className="text-lg font-semibold text-white mb-4">Upload a proof of address</h2>
        <p className="text-[#8A919E] mb-8">Regulations require us to collect a document to verify the address you provided. Follow the instructions below:</p>
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 bg-[#23262B] rounded-lg">
              <svg width="24" height="24" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" fill="#5B616E"/><path d="M7 10h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8.5" cy="8.5" r="1.5" fill="#fff"/><rect x="16" y="7" width="4" height="4" rx="1" fill="#fff"/><path d="M18 9.5l1 1 2-2" stroke="#00A87A" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div>
              <div className="font-semibold text-white">Prepare your documents</div>
              <div className="text-[#8A919E] text-sm">Upload a copy of your bank statement, utility bill or credit card statement in your name alone.<br/><a href="#" className="text-[#0052FF] underline">See other valid forms of documents.</a></div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 bg-[#23262B] rounded-lg">
              <svg width="24" height="24" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" fill="#5B616E"/><rect x="7" y="7" width="10" height="2" rx="1" fill="#fff"/><rect x="7" y="11" width="10" height="2" rx="1" fill="#fff"/><polygon points="12,18 10,16 14,16" fill="#0052FF"/></svg>
            </div>
            <div>
              <div className="font-semibold text-white">Upload a document in English</div>
              <div className="text-[#8A919E] text-sm">We can only accept documents that are in English. Documents in other languages will not be accepted.</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-[#16181C] rounded-xl border border-[#23262B] py-10 px-6 mb-8">
          <img src="https://static-assets.coinbase.com/ui-infra/illustration/v1/spotSquare/svg/dark/commerceInvoices-3.svg" alt="Upload" className="w-24 h-24 mb-4" />
          <button
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#00A87A] mb-4"
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            aria-label="Upload document"
          >
            <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#00A87A"/><path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
          <input ref={fileInputRef} type="file" accept="image/png,image/jpeg,application/pdf" className="hidden" onChange={e => { if (e.target.files[0]) onFile(e.target.files[0]); }} />
          <div className="text-white font-medium mb-2">Upload or drag and drop a copy of your chosen document.</div>
          <div className="text-[#8A919E] mb-6">Accepted formats: PNG, JPEG, or PDF.</div>
          <button className="w-48 h-12 rounded-full bg-[#0052FF] hover:bg-[#1a5cff] text-white font-semibold text-lg" onClick={() => fileInputRef.current && fileInputRef.current.click()}>Browse files</button>
        </div>
        <div className="mb-8">
          <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-[#161C2B] text-white font-semibold text-left">
            Other valid forms of documents
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B616E" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
          </button>
        </div>
        <div className="bg-[#00113A] rounded-lg p-4 flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#0052FF"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <div className="text-[#C7D1E0] text-sm">Your document will only be used to verify your address. No other information on the document will be associated with your account.</div>
        </div>
      </div>
    </div>
  );
}

export default VerifyAddressStep;
