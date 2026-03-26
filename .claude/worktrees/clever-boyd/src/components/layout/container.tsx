import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "small" | "large" | "full";
  as?: "div" | "section" | "article" | "main";
}

const sizeClasses = {
  small: "max-w-4xl",
  default: "max-w-6xl",
  large: "max-w-7xl",
  full: "max-w-full",
};

export function Container({
  children,
  className,
  size = "default",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8 w-full",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
