type GridPatternProps = {
  className?: string;
};

export function GridPattern({ className }: GridPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 top-0 left-0 right-0 overflow-hidden ${className ?? ""}`}
    >
      <div
        className="h-full w-full"
        style={{
          maskImage:
            "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent)",
          backgroundImage:
            "linear-gradient(to right, oklch(0.145 0 0 / 5%) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.145 0 0 / 5%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
