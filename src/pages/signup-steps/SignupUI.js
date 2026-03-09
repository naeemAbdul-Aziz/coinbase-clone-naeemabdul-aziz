import React from 'react';

export const Shell = ({ children, maxW = '440px' }) => (
  <div className="min-h-screen bg-[#0A0B0D] flex flex-col">
    <div className="px-6 pt-5">
      <a href="/"><img src="/logo192.png" alt="Logo" height={28} className="brightness-0 invert" /></a>
    </div>
    <div className="flex-1 flex items-center justify-center px-4 py-10">
      <div className="w-full" style={{ maxWidth: maxW }}>{children}</div>
    </div>
  </div>
);

export const BlueBtn = ({ children, onClick, disabled, type = 'button' }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`w-full h-14 rounded-full font-semibold text-[0.9375rem] transition-colors
      ${disabled
        ? 'bg-[#1E2025] text-[#5B616E] cursor-not-allowed'
        : 'bg-[#0052FF] hover:bg-[#1a5cff] active:bg-[#0041cc] text-white cursor-pointer'
      }`}
  >
    {children}
  </button>
);

export const DarkBtn = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="w-full h-14 rounded-full bg-[#2C2F36] hover:bg-[#3A3D44] text-white font-semibold text-[0.9375rem] transition-colors cursor-pointer"
  >
    {children}
  </button>
);

export const DarkInput = ({ label, hint, ...props }) => (
  <div className="mb-4">
    {label && <label className="block text-[0.875rem] font-semibold text-white mb-1.5">{label}</label>}
    <input
      {...props}
      className="w-full h-14 px-4 rounded-xl bg-[#1E2025] border border-[#2C2F36] text-white placeholder:text-[#5B616E] text-[0.9375rem] outline-none focus:border-[#0052FF] transition-colors"
    />
    {hint && <p className="text-[0.8125rem] text-[#5B616E] mt-1.5">{hint}</p>}
  </div>
);

export const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);
