import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const EditIcon = () => (
  <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z" fill="" />
  </svg>
);

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 w-full max-w-xl">{children}</div>
    </div>
  );
};

const inputCls = 'w-full h-11 px-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 text-sm outline-none focus:border-[#0052FF] transition-colors';
const labelCls = 'block text-xs font-semibold text-gray-400 mb-1.5';

const UserMetaCard = ({ user }) => {
  const [open, setOpen] = useState(false);
  const initials = user?.name ? user.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() : 'U';

  return (
    <div className="p-5 border border-gray-800 rounded-2xl lg:p-6">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-col items-center w-full gap-5 xl:flex-row">
          <div className="w-20 h-20 rounded-full bg-[#0052FF] flex items-center justify-center text-white text-2xl font-bold shrink-0 border border-gray-700">
            {initials}
          </div>
          <div>
            <h4 className="mb-1 text-lg font-semibold text-white text-center xl:text-left">{user?.name || '—'}</h4>
            <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
              <p className="text-sm text-gray-400">{user?.accountType || 'Individual'}</p>
              <div className="hidden h-3.5 w-px bg-gray-700 xl:block" />
              <p className="text-sm text-gray-400">{user?.email}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors lg:inline-flex lg:w-auto"
        >
          <EditIcon /> Edit
        </button>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
          <h4 className="mb-1 text-xl font-semibold text-white">Edit Profile</h4>
          <p className="mb-5 text-sm text-gray-400">Update your display name.</p>
          <div className="mb-5">
            <label className={labelCls}>Full Name</label>
            <input className={inputCls} defaultValue={user?.name} />
          </div>
          <div className="flex gap-3 justify-end">
            <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-400 hover:text-white hover:border-gray-500 transition-colors">Cancel</button>
            <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-full bg-[#0052FF] hover:bg-[#1a5cff] text-white text-sm font-semibold transition-colors">Save Changes</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const UserInfoCard = ({ user }) => {
  const [open, setOpen] = useState(false);

  const fields = [
    { label: 'Full Name', value: user?.name },
    { label: 'Email Address', value: user?.email },
    { label: 'Account Type', value: user?.accountType || 'Individual' },
    { label: 'Email Verified', value: user?.isEmailVerified ? 'Yes' : 'No' },
    { label: 'KYC Status', value: user?.kycStatus || 'None' },
  ];

  return (
    <div className="p-5 border border-gray-800 rounded-2xl lg:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-white mb-5">Personal Information</h4>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            {fields.map(({ label, value }) => (
              <div key={label}>
                <p className="mb-1 text-xs text-gray-500">{label}</p>
                <p className="text-sm font-medium text-white">{value || '—'}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors lg:inline-flex lg:w-auto shrink-0"
        >
          <EditIcon /> Edit
        </button>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
          <h4 className="mb-1 text-xl font-semibold text-white">Edit Personal Information</h4>
          <p className="mb-5 text-sm text-gray-400">Update your details to keep your profile up-to-date.</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-5">
            <div>
              <label className={labelCls}>Full Name</label>
              <input className={inputCls} defaultValue={user?.name} />
            </div>
            <div>
              <label className={labelCls}>Email Address</label>
              <input className={inputCls} defaultValue={user?.email} disabled />
            </div>
          </div>
          <div className="flex gap-3 justify-end">
            <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-400 hover:text-white hover:border-gray-500 transition-colors">Cancel</button>
            <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-full bg-[#0052FF] hover:bg-[#1a5cff] text-white text-sm font-semibold transition-colors">Save Changes</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const UserSecurityCard = ({ user }) => (
  <div className="p-5 border border-gray-800 rounded-2xl lg:p-6">
    <h4 className="text-lg font-semibold text-white mb-5">Account & Security</h4>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
        <p className="text-xs text-gray-500 mb-1">Email Verified</p>
        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${user?.isEmailVerified ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
          {user?.isEmailVerified ? 'Verified' : 'Not Verified'}
        </span>
      </div>
      <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
        <p className="text-xs text-gray-500 mb-1">KYC Status</p>
        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
          user?.kycStatus === 'approved' ? 'bg-green-500/10 text-green-400' :
          user?.kycStatus === 'pending'  ? 'bg-yellow-500/10 text-yellow-400' :
          'bg-gray-700 text-gray-400'}`}>
          {user?.kycStatus ? user.kycStatus.charAt(0).toUpperCase() + user.kycStatus.slice(1) : 'None'}
        </span>
      </div>
      <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
        <p className="text-xs text-gray-500 mb-1">Account Type</p>
        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400">
          {user?.accountType || 'Individual'}
        </span>
      </div>
    </div>
  </div>
);

export default function DashboardProfile() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold text-white">Profile</h2>
        <p className="text-sm text-gray-400 mt-0.5">Manage your personal information and account settings.</p>
      </div>
      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5 lg:p-6">
        <h3 className="mb-5 text-base font-semibold text-white lg:mb-6">My Profile</h3>
        <div className="space-y-5">
          <UserMetaCard user={user} />
          <UserInfoCard user={user} />
          <UserSecurityCard user={user} />
        </div>
      </div>
    </div>
  );
}
