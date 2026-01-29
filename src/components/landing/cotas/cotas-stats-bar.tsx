"use client";

import { Scale, MapPin, Award, Users } from "lucide-react";

const STATS = [
  {
    value: "+500",
    label: "Casos Analisados",
    icon: Scale,
  },
  {
    value: "Especialista",
    label: "em Heteroidentificação",
    icon: Award,
  },
  {
    value: "Nacional",
    label: "Atuação em todo Brasil",
    icon: MapPin,
  },
  {
    value: "+5.000",
    label: "Seguidores engajados",
    icon: Users,
  },
];

export function CotasStatsBar() {
  return (
    <section 
      className="relative py-12 lg:py-16"
      style={{ backgroundColor: '#0d0d0d' }}
    >
      {/* Top subtle border */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{ 
          background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.3) 50%, transparent 100%)' 
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Vertical divider (desktop only, not on first) */}
                {index > 0 && (
                  <div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 hidden lg:block"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  />
                )}

                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.3)'
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#D4AF37' }} />
                </div>

                {/* Value */}
                <span 
                  className="text-3xl lg:text-4xl font-serif font-bold mb-1 transition-all duration-300"
                  style={{ 
                    background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </span>

                {/* Label */}
                <span className="text-white/60 text-sm font-medium">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom subtle border */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ 
          background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.2) 50%, transparent 100%)' 
        }}
      />
    </section>
  );
}
