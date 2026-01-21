"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PortraitProps {
  src: string;
  alt?: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

/**
 * Portrait - Componente de imagem editorial com fallback premium
 * 
 * Renderiza uma imagem com Next/Image e, em caso de erro,
 * exibe um fallback elegante com monograma "MC" em estilo editorial.
 * 
 * Paths devem ser lowercase: /images/marcelo/*
 */
export function Portrait({
  src,
  alt = "Marcelo Colen",
  className,
  containerClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 520px",
  fill = true,
  width,
  height,
}: PortraitProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          "relative flex items-center justify-center bg-navy border border-bronze/30",
          containerClassName
        )}
        role="img"
        aria-label={alt}
      >
        <MonogramFallback />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover object-top", className)}
          onError={() => setHasError(true)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width || 520}
          height={height || 650}
          priority={priority}
          sizes={sizes}
          className={cn("object-cover object-top", className)}
          onError={() => setHasError(true)}
        />
      )}
      {/* Editorial overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * Monogram Fallback - Exibido quando a imagem não carrega
 */
function MonogramFallback() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy to-navy-deep">
      {/* Decorative frame */}
      <div className="absolute inset-4 border border-bronze/20 pointer-events-none" />
      
      {/* Monogram */}
      <div className="text-center">
        <span className="font-serif text-6xl md:text-8xl font-medium text-bronze">
          MC
        </span>
        <p className="text-bronze/50 text-xs mt-2 tracking-[0.3em] uppercase">
          Marcelo Colen
        </p>
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-bronze/40" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-bronze/40" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-bronze/40" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-bronze/40" />
    </div>
  );
}

/**
 * PortraitCard - Versão com moldura editorial decorativa
 */
export function PortraitCard({
  src,
  alt = "Marcelo Colen",
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 400px",
}: PortraitProps) {
  return (
    <div className="relative">
      {/* Decorative offset frame */}
      <div className="absolute -top-3 -right-3 w-full h-full border border-bronze/30 pointer-events-none" />
      
      {/* Main portrait */}
      <Portrait
        src={src}
        alt={alt}
        priority={priority}
        sizes={sizes}
        containerClassName={cn(
          "aspect-[4/5] ring-1 ring-white/10 shadow-2xl",
          className
        )}
      />
      
      {/* Bottom accent line */}
      <div className="absolute -bottom-2 left-1/4 right-1/4 h-px bg-bronze/40" />
    </div>
  );
}

export default Portrait;
