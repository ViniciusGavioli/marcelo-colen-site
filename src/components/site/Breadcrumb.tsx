"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

export function Breadcrumb({ items, goldColor = "#c9a227", grayColor = "rgba(255,255,255,0.45)" }: {
    items: BreadcrumbItem[];
    goldColor?: string;
    grayColor?: string;
}) {
    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-[10px] md:text-xs uppercase tracking-widest">
                <li>
                    <Link
                        href="/"
                        className="transition-colors hover:opacity-80"
                        style={{ color: grayColor }}
                    >
                        Início
                    </Link>
                </li>
                {items.map((item, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                        <ChevronRight className="w-3 h-3" style={{ color: grayColor, opacity: 0.5 }} />
                        {item.href ? (
                            <Link
                                href={item.href}
                                className="transition-colors hover:opacity-80"
                                style={{ color: grayColor }}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span style={{ color: goldColor }} className="font-semibold">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
