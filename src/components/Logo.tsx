export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="45" fontFamily="sans-serif" fontSize="40" fontWeight="bold" fill="#E5E0B1">
        ar
      </text>
      {/* Stylized 'o' */}
      <path d="M85 45 a 20 20 0 1 0 40 0" stroke="#E5E0B1" strokeWidth="4" fill="none" />
      <line x1="85" y1="45" x2="125" y2="45" stroke="#E5E0B1" strokeWidth="4" />
      
      <text x="135" y="45" fontFamily="sans-serif" fontSize="40" fontWeight="bold" fill="#E5E0B1">
        ma
      </text>
    </svg>
  );
}
