function PreviewAddressStep({ file, onConfirm, onReupload }) {
  return (
    <div className="min-h-screen bg-[#0A0B0D] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Verify your address</h1>
        <h2 className="text-lg font-semibold text-white mb-4">Is this document easy to read?</h2>
        <p className="text-[#8A919E] mb-6">Make sure that the address listed on your document and the address you entered on Coinbase match exactly.</p>
        <div className="flex flex-col items-center mb-8">
          {file && file.type.startsWith('image') ? (
            <img src={URL.createObjectURL(file)} alt="Uploaded document" className="max-w-full max-h-[400px] rounded-xl border border-[#23262B] mb-6" />
          ) : (
            <div className="w-full h-48 flex items-center justify-center bg-[#16181C] rounded-xl border border-[#23262B] mb-6 text-[#8A919E]">PDF preview not available</div>
          )}
        </div>
        <div className="mb-8">
          <div className="font-bold text-white mb-2">Make sure your document is clear and not cut off.</div>
          <ul className="text-white text-lg list-disc pl-6">
            <li>Your full name</li>
            <li>Your current address</li>
            <li>The date</li>
            <li>The logo of the issuer</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <button className="w-full h-14 rounded-full bg-[#0052FF] hover:bg-[#1a5cff] text-white font-bold text-lg" onClick={onConfirm}>Yes, looks good</button>
          <button className="w-full h-14 rounded-full bg-[#23262B] text-white font-bold text-lg" onClick={onReupload}>Re-upload</button>
        </div>
      </div>
    </div>
  );
}

export default PreviewAddressStep;
