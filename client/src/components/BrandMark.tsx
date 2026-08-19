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
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[46%_54%_44%_56%] bg-[#efe1ce] ring-1 ring-[#4a2d21]/10",
        className,
      )}
    >
      <img
        src={brandMarkUrl}
        alt="Bonjour Coffee & Bakery amblemi"
        className="h-[72%] w-[72%] object-contain"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </span>
  );
}
