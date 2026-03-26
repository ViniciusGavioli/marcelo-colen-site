"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SUBJECTS = [
  "Atendimento criminal",
  "Compliance e prevenção",
  "Direitos humanos e antidiscriminação",
  "Palestras / eventos",
  "Imprensa / entrevistas",
  "Outro",
] as const;

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
  company: string; // honeypot
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  consent?: string;
  general?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  consent: false,
  company: "", // honeypot - deve ficar vazio
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [isPending, startTransition] = useTransition();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Nome deve ter pelo menos 2 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (formData.phone && formData.phone.length > 20) {
      newErrors.phone = "Telefone muito longo";
    }

    if (!formData.subject) {
      newErrors.subject = "Selecione um assunto";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Mensagem deve ter pelo menos 10 caracteres";
    }

    if (!formData.consent) {
      newErrors.consent = "Você deve concordar com a política de privacidade";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Limpar erro do campo ao editar
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");
    setErrors({});

    startTransition(async () => {
      try {
        const response = await fetch("/api/leads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim() || null,
            subject: formData.subject,
            message: formData.message.trim(),
            consent: formData.consent,
            company: formData.company, // honeypot
            source: "website",
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          if (response.status === 429) {
            setErrors({
              general: "Muitas tentativas. Aguarde alguns minutos e tente novamente.",
            });
          } else {
            setErrors({
              general: data.error || "Erro ao enviar mensagem. Tente novamente.",
            });
          }
          setStatus("error");
          return;
        }

        if (data.ok) {
          setStatus("success");
          setFormData(initialFormData);
        } else {
          setErrors({ general: data.error || "Erro ao enviar mensagem." });
          setStatus("error");
        }
      } catch {
        setErrors({ general: "Erro de conexão. Verifique sua internet." });
        setStatus("error");
      }
    });
  };

  const isLoading = status === "loading" || isPending;

  if (status === "success") {
    return (
      <Card className="bg-white border-bronze/20">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-graphite mb-2">
            Mensagem Enviada!
          </h3>
          <p className="text-graphite-light mb-6">
            Recebemos sua mensagem e retornaremos em breve.
            <br />
            Para atendimento imediato, entre em contato via WhatsApp.
          </p>
          <Button
            variant="outline"
            onClick={() => setStatus("idle")}
            className="border-bronze text-bronze hover:bg-bronze/5"
          >
            Enviar outra mensagem
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white border-bronze/20">
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot - invisível para usuários */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Empresa</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Nome */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-graphite mb-1.5"
            >
              Nome completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
              className={`w-full px-4 py-3 rounded-lg border bg-white text-graphite placeholder:text-graphite-light/60 focus:outline-none focus:ring-2 focus:ring-bronze/50 transition-colors ${
                errors.name ? "border-red-400" : "border-graphite/20"
              }`}
              placeholder="Seu nome"
              autoComplete="name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email e Telefone em grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-graphite mb-1.5"
              >
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                className={`w-full px-4 py-3 rounded-lg border bg-white text-graphite placeholder:text-graphite-light/60 focus:outline-none focus:ring-2 focus:ring-bronze/50 transition-colors ${
                  errors.email ? "border-red-400" : "border-graphite/20"
                }`}
                placeholder="seu@email.com"
                autoComplete="email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-graphite mb-1.5"
              >
                Telefone{" "}
                <span className="text-graphite-light/60 font-normal">
                  (opcional)
                </span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isLoading}
                className={`w-full px-4 py-3 rounded-lg border bg-white text-graphite placeholder:text-graphite-light/60 focus:outline-none focus:ring-2 focus:ring-bronze/50 transition-colors ${
                  errors.phone ? "border-red-400" : "border-graphite/20"
                }`}
                placeholder="(00) 00000-0000"
                autoComplete="tel"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Assunto */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-graphite mb-1.5"
            >
              Assunto <span className="text-red-500">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              disabled={isLoading}
              className={`w-full px-4 py-3 rounded-lg border bg-white text-graphite focus:outline-none focus:ring-2 focus:ring-bronze/50 transition-colors ${
                errors.subject ? "border-red-400" : "border-graphite/20"
              } ${!formData.subject ? "text-graphite-light/60" : ""}`}
            >
              <option value="" disabled>
                Selecione o assunto
              </option>
              {SUBJECTS.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            {errors.subject && (
              <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
            )}
          </div>

          {/* Mensagem */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-graphite mb-1.5"
            >
              Mensagem <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={isLoading}
              rows={5}
              className={`w-full px-4 py-3 rounded-lg border bg-white text-graphite placeholder:text-graphite-light/60 focus:outline-none focus:ring-2 focus:ring-bronze/50 transition-colors resize-none ${
                errors.message ? "border-red-400" : "border-graphite/20"
              }`}
              placeholder="Descreva brevemente sua situação ou dúvida..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          {/* Aviso de segurança */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <p className="text-sm text-amber-800">
              <strong>Atenção:</strong> Não envie informações sensíveis ou
              documentos por este formulário. Para assuntos confidenciais,
              utilize o WhatsApp ou agende uma consulta presencial.
            </p>
          </div>

          {/* Consentimento LGPD */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                disabled={isLoading}
                className="mt-1 w-4 h-4 rounded border-graphite/30 text-bronze focus:ring-bronze/50"
              />
              <span className="text-sm text-graphite-light">
                Li e concordo com a{" "}
                <Link
                  href="/privacidade"
                  className="text-bronze hover:text-bronze-dark underline"
                  target="_blank"
                >
                  Política de Privacidade
                </Link>{" "}
                e autorizo o armazenamento dos meus dados para fins de
                atendimento.
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1 text-sm text-red-500">{errors.consent}</p>
            )}
          </div>

          {/* Erro geral */}
          {errors.general && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{errors.general}</p>
            </div>
          )}

          {/* Submit */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-bronze hover:bg-bronze-dark text-white py-6 text-base font-medium"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
