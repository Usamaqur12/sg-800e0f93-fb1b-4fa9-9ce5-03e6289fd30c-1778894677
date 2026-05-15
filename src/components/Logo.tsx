import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <svg
        width="140"
        height="40"
        viewBox="0 0 140 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-opacity group-hover:opacity-80"
      >
        {/* dabel */}
        <text
          x="0"
          y="28"
          fontFamily="IBM Plex Sans, sans-serif"
          fontSize="24"
          fontWeight="600"
          fill="hsl(210, 45%, 15%)"
          letterSpacing="-0.5"
        >
          dabel
        </text>
        
        {/* ai with accent color */}
        <text
          x="75"
          y="28"
          fontFamily="IBM Plex Sans, sans-serif"
          fontSize="24"
          fontWeight="600"
          fill="hsl(30, 78%, 48%)"
          letterSpacing="-0.5"
        >
          ai
        </text>
        
        {/* Accent dot */}
        <circle
          cx="105"
          cy="23"
          r="3"
          fill="hsl(30, 78%, 48%)"
        />
      </svg>
    </Link>
  );
}