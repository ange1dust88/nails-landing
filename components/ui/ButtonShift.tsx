type ButtonShiftProps = {
  children: string;
  href?: string;
  className?: string;
};

export default function ButtonShift({
  children,
  href,
  className = "",
}: ButtonShiftProps) {
  return (
    <a
      href={href}
      className={`group px-4 py-1 bg-[#eedddc] hover:bg-[#e8d1d4] text-[#8c2155] transition-colors duration-400 cursor-pointer
      overflow-hidden rounded-2xl flex items-center justify-center ${className}`}
    >
      <span className="relative h-7 leading-7 w-full">
        <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap transition-transform duration-400 group-hover:-translate-y-full ease-[cubic-bezier(.22,.61,.36,1)]">
          {children}
        </span>

        <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap translate-y-full transition-transform duration-400 group-hover:translate-y-0 ease-[cubic-bezier(.22,.61,.36,1)]">
          {children}
        </span>
      </span>
    </a>
  );
}
