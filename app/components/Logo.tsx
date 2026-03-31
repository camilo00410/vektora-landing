import Image from "next/image";

export function Logo({ height = 40, className = "" }: { height?: number; className?: string }) {
  const iconSize = Math.round(height * 0.85);
  const titleSize = Math.round(height * 0.38);
  const subtitleSize = Math.round(height * 0.14);

  return (
    <span className={`inline-flex items-center gap-2 ${className}`} style={{ height }}>
      <Image
        src="/logo/vektora-icon.png"
        alt=""
        width={iconSize}
        height={iconSize}
        priority
        style={{ width: iconSize, height: iconSize }}
      />
      <span className="flex flex-col justify-center" style={{ lineHeight: 1.1 }}>
        <span
          style={{
            fontSize: titleSize,
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "white",
            fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          }}
        >
          VEKTORA
        </span>
        <span
          style={{
            fontSize: subtitleSize,
            fontWeight: 500,
            letterSpacing: "0.2em",
            color: "#00D9A6",
            fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          }}
        >
          AI AGENTS STUDIO
        </span>
      </span>
    </span>
  );
}
