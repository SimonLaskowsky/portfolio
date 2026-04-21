// Engineering-drawing tag pinned to the top-right of a plate. Reads as
// a sheet reference: PLT.03 / BRI
//
// Parent must be position:relative.

type Props = {
  number: string;
  code: string;
  className?: string;
};

export default function PlateTag({ number, code, className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none absolute top-6 right-6 md:top-8 md:right-10 z-30 flex items-center gap-2 font-mono text-[10px] uppercase tracking-brutal ${className}`}
    >
      <div className="h-px w-6 bg-current opacity-30" />
      <span className="opacity-55">PLT.{number}</span>
      <span className="opacity-30">/</span>
      <span>{code}</span>
    </div>
  );
}
