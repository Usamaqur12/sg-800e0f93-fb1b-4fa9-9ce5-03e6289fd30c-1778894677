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
        className="transition-opacity hover:opacity-80"
      >
        {/* DABEL in navy */}
        <text
          x="0"
          y="28"
          fontFamily="IBM Plex Sans, sans-serif"
          fontSize="24"
          fontWeight="600"
          fill="hsl(210, 45%, 15%)"
          letterSpacing="0.5"
        >
          DABEL
        </text>
        
        {/* AI in amber */}
        <text
          x="85"
          y="28"
          fontFamily="IBM Plex Sans, sans-serif"
          fontSize="24"
          fontWeight="600"
          fill="hsl(30, 78%, 48%)"
          letterSpacing="0.5"
        >
          AI
        </text>
        
        {/* Accent dot */}
        <circle
          cx="133"
          cy="25"
          r="3"
          fill="hsl(30, 78%, 48%)"
        />
      </svg>
    </Link>
  );
}