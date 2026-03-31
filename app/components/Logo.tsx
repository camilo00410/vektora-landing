export function Logo({ height = 40, className = "" }: { height?: number; className?: string }) {
  // Aspect ratio: icon (square) + text side by side
  // Icon takes ~height, text takes ~3x height width
  const iconSize = height;
  const totalWidth = height * 4.5;

  return (
    <svg
      width={totalWidth}
      height={height}
      viewBox="0 0 360 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vektora - AI Agents Studio"
    >
      {/* Arrow/Vector icon */}
      <g transform="translate(0, 0)">
        {/* Main violet triangle */}
        <polygon points="35,5 65,65 5,65" fill="#6C63FF" opacity="0.7" />
        <polygon points="35,5 50,65 35,40" fill="#8B83FF" opacity="0.9" />
        {/* Green upward arrow accent */}
        <line x1="35" y1="2" x2="35" y2="25" stroke="#00D9A6" strokeWidth="3" strokeLinecap="round" />
        <polygon points="29,18 35,6 41,18" fill="#00D9A6" />
        {/* Green accent bar under triangle */}
        <rect x="22" y="68" width="26" height="3" rx="1.5" fill="#00D9A6" />
      </g>

      {/* VEKTORA text */}
      <text
        x="82"
        y="42"
        fill="white"
        fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontSize="30"
        fontWeight="700"
        letterSpacing="6"
      >
        VEKTORA
      </text>

      {/* AI AGENTS STUDIO subtitle */}
      <text
        x="82"
        y="62"
        fill="#00D9A6"
        fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontSize="11"
        fontWeight="500"
        letterSpacing="4"
      >
        AI AGENTS STUDIO
      </text>
    </svg>
  );
}
