"use client";

import { useState, useCallback } from "react";

// Hook leve para controlar abertura do QualificationQuiz sem puxar
// o componente (pesado, code-split via next/dynamic) para o bundle inicial.
export function useQuiz() {
    const [isOpen, setIsOpen] = useState(false);
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    return { isOpen, open, close };
}
