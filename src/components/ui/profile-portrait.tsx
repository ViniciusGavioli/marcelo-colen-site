"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProfilePortraitProps {
  src?: string;
  alt?: string;
  className?: string;
  fallbackClassName?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
  hero: "w-full h-full min-h-[300px] md:min-h-[400px]",
};

const monogramSizes = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-4xl",
  xl: "text-5xl",
  hero: "text-6xl md:text-8xl",
};

/**
 * ProfilePortrait - Componente de imagem com fallback premium
 * 
 * Tenta renderizar uma imagem, mas em caso de erro ou ausência,
 * exibe um fallback elegante com monograma "MC".
 */
export function ProfilePortrait({
  src,
  alt = "Marcelo Colen",
  className,
  fallbackClassName,
  priority = false,
  size = "lg",
}: ProfilePortraitProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const showFallback = !src || hasError;

  if (showFallback) {
    return (
      <div
        className={cn(
          sizeClasses[size],
          "bg-navy flex items-center justify-center border border-bronze/30",
          fallbackClassName,
          className
        )}
        role="img"
        aria-label={alt}
      >
        {/* Monogram Fallback */}
        <div className="text-center">
          <span
            className={cn(
              "font-serif font-medium text-bronze",
              monogramSizes[size]
            )}
          >
            MC
          </span>
          {size === "hero" && (
            <p className="text-bronze/60 text-sm mt-2 tracking-widest uppercase">
              Marcelo Colen
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        sizeClasses[size],
        "relative overflow-hidden",
        className
      )}
    >
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-navy/50 animate-pulse" />
      )}

      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn(
          "object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        sizes={
          size === "hero"
            ? "(max-width: 768px) 100vw, 50vw"
            : size === "xl"
            ? "192px"
            : size === "lg"
            ? "128px"
            : size === "md"
            ? "96px"
            : "64px"
        }
      />
    </div>
  );
}

/**
 * Monogram - Componente standalone para uso em outros lugares
 */
export function Monogram({
  size = "lg",
  className,
}: {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const sizeMap = {
    sm: "w-12 h-12 text-lg",
    md: "w-16 h-16 text-2xl",
    lg: "w-20 h-20 text-3xl",
    xl: "w-28 h-28 text-4xl",
  };

  return (
    <div
      className={cn(
        "bg-bronze/10 border border-bronze/30 flex items-center justify-center",
        sizeMap[size],
        className
      )}
    >
      <span className="font-serif text-bronze">MC</span>
    </div>
  );
}
