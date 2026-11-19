import Link from "next/link";

interface DabelLogoProps {
  className?: string;
  linkTo?: string;
}

export function DabelLogo({ className = "", linkTo = "/" }: DabelLogoProps) {
  const logo = (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Dabel Symbol - Abstract AI workflow icon */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="8" r="3" fill="#8067F4" />
        <circle cx="8" cy="20" r="3" fill="#DFF5EE" />
        <circle cx="24" cy="20" r="3" fill="#FFE8E0" />
        <path d="M16 11 L10 17" stroke="#8067F4" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 11 L22 17" stroke="#8067F4" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 23 L22 23" stroke="#111114" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
      
      {/* Wordmark */}
      <span className="font-bold text-xl tracking-tight text-dabel-black">
        Dabel <span className="font-normal text-dabel-black/60">AI</span>
      </span>
    </div>
  );

  if (linkTo) {
    return (
      <Link href={linkTo} className="hover:opacity-80 transition-opacity">
        {logo}
      </Link>
    );
  }

  return logo;
}