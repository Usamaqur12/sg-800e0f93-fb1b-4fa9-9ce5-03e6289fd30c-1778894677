import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <svg
        width="180"
        height="40"
        viewBox="0 0 180 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-opacity hover:opacity-80"
      >
        {/* DABEL in white */}
        <text
          x="0"
          y="28"
          fontFamily="IBM Plex Sans, sans-serif"
          fontSize="20"
          fontWeight="600"
          fill="hsl(40, 56%, 98%)"
          letterSpacing="0.5"
        >
          DABEL
        </text>
        
        {/* Solutions in amber */}
        <text
          x="72"
          y="28"
          fontFamily="IBM Plex Sans, sans-serif"
          fontSize="20"
          fontWeight="600"
          fill="hsl(30, 78%, 48%)"
          letterSpacing="0.5"
        >
          Solutions
        </text>
        
        {/* Accent dot */}
        <circle
          cx="173"
          cy="25"
          r="3"
          fill="hsl(30, 78%, 48%)"
        />
      </svg>
    </Link>
  );
}