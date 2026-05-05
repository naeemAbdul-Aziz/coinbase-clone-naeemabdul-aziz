import { Shell, BlueBtn, DarkBtn } from './SignupUI';

const StepAccountSetup = ({ onNext }) => {
  return (
    <Shell>
      {/* ...existing code for avatar cluster and stepper... */}
      {/* Checkbox and submit button */}
      <label className="flex items-start gap-3 mb-6 cursor-pointer">
        <input type="checkbox" checked={true} readOnly className="mt-1 w-5 h-5 rounded border-[#2C2F36] bg-[#1E2025] accent-[#0052FF] cursor-pointer" />
        <span className="text-[0.8125rem] text-[#8A919E] leading-5">
          I certify that I am 18 years of age or older, I agree to the{' '}
          <a href="#" className="underline text-white hover:text-[#0052FF]">User Agreement</a>.
        </span>
      </label>
      <BlueBtn onClick={onNext}>Submit</BlueBtn>
    </Shell>
  );
};

export default StepAccountSetup;
