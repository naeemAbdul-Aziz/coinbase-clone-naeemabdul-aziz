function AddressFailStep({ onRetry }) {
  return (
    <div className="min-h-screen bg-[#0A0B0D] flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center">
        <img src="https://static-assets.coinbase.com/ui-infra/illustration/v1/spotSquare/svg/dark/verifyInfo-3.svg" alt="Document missing address" className="w-32 h-32 mb-8" />
        <h1 className="text-2xl font-bold text-white mb-2 text-center">Document missing address</h1>
        <p className="text-[#8A919E] text-center mb-6 max-w-md">We are unable to verify your address because your document is missing your address. Try again and make sure you choose a document that contains the following:</p>
        <ul className="text-white text-lg list-disc pl-6 mb-8 text-left">
          <li>Full legal name</li>
          <li>Residential address</li>
          <li>Document Date</li>
        </ul>
        <button className="w-64 h-14 rounded-full bg-[#0052FF] hover:bg-[#1a5cff] text-white font-bold text-lg" onClick={onRetry}>Try Again</button>
      </div>
    </div>
  );
}

export default AddressFailStep;
