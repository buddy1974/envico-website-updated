export default function AvailabilityBanner() {
  return (
    <div className="bg-envico-green text-white text-sm py-2.5 px-6 flex items-center justify-center gap-4 flex-wrap">
      <span>
        🏠 <strong>Bishops House, Hayes</strong> — 2 beds currently available
      </span>
      <a
        href="#referral"
        className="bg-white text-envico-green font-bold text-xs px-4 py-1.5 rounded-md hover:bg-green-50 transition-colors whitespace-nowrap"
      >
        Enquire Now
      </a>
    </div>
  );
}
