// Tasarım yönü: Toprak Editoryali — kompakt, dokunsal ve küçük ölçekte de ayırt edilebilir marka simgesi.
import { cn } from "@/lib/utils";

const brandMarkUrl = "/images/bonjour-logo.png";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
};

export function BrandMark({ className, priority = false }: BrandMarkProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[1.15rem] bg-[#0a0a0a] ring-1 ring-[#4a2d21]/10",
        className,
      )}
    >
      <img
        src={brandMarkUrl}
        alt="Bonjour Café amblemi"
        className="h-full w-full object-cover"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </span>
  );
}
