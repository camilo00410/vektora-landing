import Image from "next/image";

export function Logo({ height = 40 }: { height?: number }) {
  // Icon aspect ratio is ~540:662 (0.816:1), so width = height * 0.82
  const iconH = height;
  const iconW = Math.round(height * 0.82);
  const titleSize = Math.round(height * 0.35);
  const subtitleSize = Math.round(height * 0.13);

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, height }}>
      <Image
        src="/logo/vektora-icon-cropped.png"
        alt=""
        width={iconW}
        height={iconH}
        priority
        style={{ width: iconW, height: iconH }}
      />
      <span className="flex flex-col justify-center" style={{ lineHeight: 1.15 }}>
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
