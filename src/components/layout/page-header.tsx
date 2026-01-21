import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function PageHeader({
  title,
  description,
  className,
  align = "center",
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "py-12 md:py-16 lg:py-20 border-b border-border bg-muted/30",
        align === "center" && "text-center",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
