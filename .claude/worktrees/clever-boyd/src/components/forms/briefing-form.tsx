"use client";

import { useState, useCallback } from "react";
import {
  User,
  Mail,
  Phone,
  FileText,
  Scale,
  Shield,
  Heart,
  Award,
  Calendar,
  Link as LinkIcon,
  MessageSquare,
  Loader2,
  CheckCircle,
  Copy,
  Download,
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  type BriefingInput,
  type AreaInput,
  defaultBriefingValues,
} from "@/lib/briefing-schema";

interface BriefingFormProps {
  accessToken: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function Section({ title, icon, children, defaultOpen = false }: SectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Card className="border-graphite/10">
      <CardHeader
        className="cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-bronze/10 rounded-lg flex items-center justify-center">
              {icon}
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-graphite-light" />
          ) : (
            <ChevronDown className="w-5 h-5 text-graphite-light" />
          )}
        </div>
      </CardHeader>
      {isOpen && <CardContent className="pt-0">{children}</CardContent>}
    </Card>
  );
}

function FieldLabel({
  label,
  required,
  hint,
}: {
  label: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div className="mb-1.5">
      <label className="block text-sm font-medium text-graphite">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {hint && <p className="text-xs text-graphite-light">{hint}</p>}
    </div>
  );
}

function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
  ...props
}: Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full px-4 py-2.5 rounded-lg border border-graphite/20 bg-white text-graphite placeholder:text-graphite-light/60 focus:outline-none focus:ring-2 focus:ring-bronze/50 transition-colors ${className}`}
      {...props}
    />
  );
}

function Textarea({
  value,
  onChange,
  placeholder,
  rows = 4,
  className = "",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  className?: string;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className={`w-full px-4 py-2.5 rounded-lg border border-graphite/20 bg-white text-graphite placeholder:text-graphite-light/60 focus:outline-none focus:ring-2 focus:ring-bronze/50 transition-colors resize-none ${className}`}
    />
  );
}

function ArrayField({
  items,
  onChange,
  placeholder,
  minItems = 1,
}: {
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
  minItems?: number;
}) {
  const addItem = () => onChange([...items, ""]);
  const removeItem = (index: number) => {
    if (items.length <= minItems) return;
    onChange(items.filter((_, i) => i !== index));
  };
  const updateItem = (index: number, value: string) => {
    const newItems = [...items];
    newItems[index] = value;
    onChange(newItems);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="flex gap-2">
          <Input
            value={item}
            onChange={(v) => updateItem(index, v)}
            placeholder={placeholder}
            className="flex-1"
          />
          {items.length > minItems && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeItem(index)}
              className="text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          )}
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={addItem}
        className="mt-2"
      >
        <Plus className="w-4 h-4 mr-2" />
        Adicionar
      </Button>
    </div>
  );
}

function AreaSection({
  area,
  onChange,
  title,
  icon,
}: {
  area: AreaInput;
  onChange: (area: AreaInput) => void;
  title: string;
  icon: React.ReactNode;
}) {
  const updateArea = (key: keyof AreaInput, value: unknown) => {
    onChange({ ...area, [key]: value });
  };

  return (
    <div className="space-y-6 p-4 bg-off-white rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-bronze/10 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <h4 className="font-semibold text-graphite">{title}</h4>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <FieldLabel label="Título" required />
          <Input
            value={area.title}
            onChange={(v) => updateArea("title", v)}
            placeholder="Direito Criminal"
          />
        </div>
        <div>
          <FieldLabel label="Subtítulo" required />
          <Input
            value={area.subtitle}
            onChange={(v) => updateArea("subtitle", v)}
            placeholder="Defesa técnica e estratégica"
          />
        </div>
      </div>

      <div>
        <FieldLabel
          label="Descrição"
          required
          hint="Texto que aparece na página da área"
        />
        <Textarea
          value={area.description}
          onChange={(v) => updateArea("description", v)}
          placeholder="Descrição completa da área de atuação..."
          rows={3}
        />
      </div>

      <div>
        <FieldLabel
          label="Escopo de Atuação"
          required
          hint="Bullets que aparecem na página (6-10 itens)"
        />
        <ArrayField
          items={area.bullets}
          onChange={(v) => updateArea("bullets", v)}
          placeholder="Ex: Defesa em inquéritos policiais"
          minItems={3}
        />
      </div>

      <div>
        <FieldLabel
          label="Quando Procurar Advogado"
          required
          hint="Situações em que o cliente deve buscar ajuda"
        />
        <ArrayField
          items={area.whenToSeek}
          onChange={(v) => updateArea("whenToSeek", v)}
          placeholder="Ex: Ao receber intimação policial"
          minItems={2}
        />
      </div>

      <div>
        <FieldLabel
          label="FAQ da Área"
          required
          hint="Perguntas e respostas frequentes"
        />
        <div className="space-y-4">
          {area.faq.map((faqItem, index) => (
            <div
              key={index}
              className="p-3 bg-white rounded-lg border border-graphite/10"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-medium text-bronze">
                  FAQ {index + 1}
                </span>
                {area.faq.length > 2 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const newFaq = area.faq.filter((_, i) => i !== index);
                      updateArea("faq", newFaq);
                    }}
                    className="text-red-500 hover:text-red-600 h-6 px-2"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                )}
              </div>
              <Input
                value={faqItem.question}
                onChange={(v) => {
                  const newFaq = [...area.faq];
                  newFaq[index] = { ...newFaq[index], question: v };
                  updateArea("faq", newFaq);
                }}
                placeholder="Pergunta"
                className="mb-2"
              />
              <Textarea
                value={faqItem.answer}
                onChange={(v) => {
                  const newFaq = [...area.faq];
                  newFaq[index] = { ...newFaq[index], answer: v };
                  updateArea("faq", newFaq);
                }}
                placeholder="Resposta"
                rows={2}
              />
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              updateArea("faq", [...area.faq, { question: "", answer: "" }]);
            }}
          >
            <Plus className="w-4 h-4 mr-2" />
            Adicionar FAQ
          </Button>
        </div>
      </div>
    </div>
  );
}

export function BriefingForm({ accessToken }: BriefingFormProps) {
  const [formData, setFormData] = useState<BriefingInput>(
    defaultBriefingValues as BriefingInput
  );
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string>("");
  const [result, setResult] = useState<{
    briefingId: string;
    json: object;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const updateField = useCallback(
    <K extends keyof BriefingInput>(field: K, value: BriefingInput[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/briefing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Briefing-Token": accessToken,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          setError("Muitas tentativas. Aguarde alguns minutos.");
        } else {
          setError(data.error || "Erro ao enviar briefing.");
        }
        setStatus("error");
        return;
      }

      if (data.ok) {
        setResult({ briefingId: data.briefingId, json: data.json });
        setStatus("success");
      } else {
        setError(data.error || "Erro desconhecido.");
        setStatus("error");
      }
    } catch {
      setError("Erro de conexão. Verifique sua internet.");
      setStatus("error");
    }
  };

  const copyToClipboard = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(result.json, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy");
    }
  };

  const downloadJson = () => {
    if (!result) return;
    const blob = new Blob([JSON.stringify(result.json, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `briefing-${result.briefingId}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (status === "success" && result) {
    return (
      <div className="space-y-6">
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-800">
                  Briefing Recebido!
                </h3>
                <p className="text-sm text-green-600">
                  ID: <code className="font-mono">{result.briefingId}</code>
                </p>
              </div>
            </div>
            <p className="text-green-700">
              Seu briefing foi salvo com sucesso. Copie o JSON abaixo para
              atualizar o arquivo <code>constants.ts</code>.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                JSON para constants.ts
              </CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyToClipboard}
                  className={copied ? "text-green-600" : ""}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {copied ? "Copiado!" : "Copiar"}
                </Button>
                <Button variant="outline" size="sm" onClick={downloadJson}>
                  <Download className="w-4 h-4 mr-2" />
                  Baixar .json
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-graphite text-white p-4 rounded-lg overflow-x-auto text-xs max-h-96 overflow-y-auto">
              {JSON.stringify(result.json, null, 2)}
            </pre>
          </CardContent>
        </Card>

        <Button
          variant="outline"
          onClick={() => {
            setStatus("idle");
            setResult(null);
          }}
          className="w-full"
        >
          Preencher novo briefing
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 1. Identificação */}
      <Section
        title="Identificação"
        icon={<User className="w-5 h-5 text-bronze" />}
        defaultOpen={true}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <FieldLabel label="Nome Completo" required />
            <Input
              value={formData.name}
              onChange={(v) => updateField("name", v)}
              placeholder="Marcelo Colen"
            />
          </div>
          <div>
            <FieldLabel label="OAB" hint="Ex: OAB/MG 123.456" />
            <Input
              value={formData.oab || ""}
              onChange={(v) => updateField("oab", v)}
              placeholder="OAB/MG 000.000"
            />
          </div>
          <div>
            <FieldLabel label="Cidade" />
            <Input
              value={formData.city || ""}
              onChange={(v) => updateField("city", v)}
              placeholder="Belo Horizonte"
            />
          </div>
          <div>
            <FieldLabel label="Atendimento" />
            <Input
              value={formData.atendimento || ""}
              onChange={(v) => updateField("atendimento", v)}
              placeholder="Online e presencial"
            />
          </div>
        </div>
      </Section>

      {/* 2. Contatos */}
      <Section
        title="Contatos"
        icon={<Phone className="w-5 h-5 text-bronze" />}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <FieldLabel label="E-mail" required />
            <Input
              type="email"
              value={formData.email}
              onChange={(v) => updateField("email", v)}
              placeholder="contato@exemplo.com"
            />
          </div>
          <div>
            <FieldLabel label="WhatsApp" required hint="Apenas números" />
            <Input
              value={formData.whatsapp}
              onChange={(v) => updateField("whatsapp", v.replace(/\D/g, ""))}
              placeholder="5531999999999"
            />
          </div>
        </div>
      </Section>

      {/* 3. Bio */}
      <Section title="Bio" icon={<FileText className="w-5 h-5 text-bronze" />}>
        <div className="space-y-4">
          <div>
            <FieldLabel
              label="Bio Curta"
              required
              hint="50-300 caracteres. Usada como headline."
            />
            <Textarea
              value={formData.bioShort}
              onChange={(v) => updateField("bioShort", v)}
              placeholder="Advogado criminalista com mais de 15 anos de experiência..."
              rows={2}
            />
            <p className="text-xs text-graphite-light mt-1">
              {formData.bioShort.length}/300 caracteres
            </p>
          </div>
          <div>
            <FieldLabel
              label="Bio Longa"
              required
              hint="100-2000 caracteres. Usada na página Sobre."
            />
            <Textarea
              value={formData.bioLong}
              onChange={(v) => updateField("bioLong", v)}
              placeholder="Biografia completa com formação, experiência, valores..."
              rows={6}
            />
            <p className="text-xs text-graphite-light mt-1">
              {formData.bioLong.length}/2000 caracteres
            </p>
          </div>
        </div>
      </Section>

      {/* 4. Áreas de Atuação */}
      <Section
        title="Áreas de Atuação"
        icon={<Scale className="w-5 h-5 text-bronze" />}
      >
        <div className="space-y-6">
          <AreaSection
            title="Direito Criminal"
            icon={<Scale className="w-4 h-4 text-bronze" />}
            area={formData.areas.criminal}
            onChange={(area) =>
              updateField("areas", { ...formData.areas, criminal: area })
            }
          />
          <AreaSection
            title="Compliance"
            icon={<Shield className="w-4 h-4 text-bronze" />}
            area={formData.areas.compliance}
            onChange={(area) =>
              updateField("areas", { ...formData.areas, compliance: area })
            }
          />
          <AreaSection
            title="Direitos Humanos e Antidiscriminação"
            icon={<Heart className="w-4 h-4 text-bronze" />}
            area={formData.areas.direitosHumanos}
            onChange={(area) =>
              updateField("areas", { ...formData.areas, direitosHumanos: area })
            }
          />
        </div>
      </Section>

      {/* 5. Credenciais */}
      <Section
        title="Credenciais"
        icon={<Award className="w-5 h-5 text-bronze" />}
      >
        <div className="space-y-4">
          {formData.credentials.map((cred, index) => (
            <div
              key={index}
              className="p-4 bg-off-white rounded-lg border border-graphite/10"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-sm font-medium text-bronze">
                  Credencial {index + 1}
                </span>
                {formData.credentials.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      updateField(
                        "credentials",
                        formData.credentials.filter((_, i) => i !== index)
                      );
                    }}
                    className="text-red-500 hover:text-red-600 h-6 px-2"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                )}
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <FieldLabel label="Título" required />
                  <Input
                    value={cred.title}
                    onChange={(v) => {
                      const newCreds = [...formData.credentials];
                      newCreds[index] = { ...newCreds[index], title: v };
                      updateField("credentials", newCreds);
                    }}
                    placeholder="Mestre em Direito Penal"
                  />
                </div>
                <div>
                  <FieldLabel
                    label="Ícone"
                    hint="Award, BookOpen, GraduationCap..."
                  />
                  <Input
                    value={cred.icon}
                    onChange={(v) => {
                      const newCreds = [...formData.credentials];
                      newCreds[index] = { ...newCreds[index], icon: v };
                      updateField("credentials", newCreds);
                    }}
                    placeholder="Award"
                  />
                </div>
              </div>
              <div className="mt-3">
                <FieldLabel label="Descrição" required />
                <Input
                  value={cred.description}
                  onChange={(v) => {
                    const newCreds = [...formData.credentials];
                    newCreds[index] = { ...newCreds[index], description: v };
                    updateField("credentials", newCreds);
                  }}
                  placeholder="Universidade Federal de Minas Gerais (2015)"
                />
              </div>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              updateField("credentials", [
                ...formData.credentials,
                { icon: "Award", title: "", description: "" },
              ]);
            }}
          >
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Credencial
          </Button>
        </div>
      </Section>

      {/* 6. Timeline */}
      <Section
        title="Timeline / Trajetória"
        icon={<Calendar className="w-5 h-5 text-bronze" />}
      >
        <div className="space-y-3">
          {formData.timeline.map((item, index) => (
            <div key={index} className="flex gap-3 items-start">
              <div className="w-24">
                <Input
                  value={item.year || ""}
                  onChange={(v) => {
                    const newTimeline = [...formData.timeline];
                    newTimeline[index] = { ...newTimeline[index], year: v };
                    updateField("timeline", newTimeline);
                  }}
                  placeholder="2015"
                />
              </div>
              <div className="flex-1">
                <Input
                  value={item.label}
                  onChange={(v) => {
                    const newTimeline = [...formData.timeline];
                    newTimeline[index] = { ...newTimeline[index], label: v };
                    updateField("timeline", newTimeline);
                  }}
                  placeholder="Fundação do escritório"
                />
              </div>
              {formData.timeline.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    updateField(
                      "timeline",
                      formData.timeline.filter((_, i) => i !== index)
                    );
                  }}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              updateField("timeline", [
                ...formData.timeline,
                { label: "", year: "" },
              ]);
            }}
          >
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Item
          </Button>
        </div>
      </Section>

      {/* 7. Links */}
      <Section title="Links" icon={<LinkIcon className="w-5 h-5 text-bronze" />}>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <FieldLabel label="Instagram" hint="URL completa" />
            <Input
              value={formData.links.instagram || ""}
              onChange={(v) =>
                updateField("links", { ...formData.links, instagram: v })
              }
              placeholder="https://instagram.com/..."
            />
          </div>
          <div>
            <FieldLabel label="LinkedIn" hint="URL completa" />
            <Input
              value={formData.links.linkedin || ""}
              onChange={(v) =>
                updateField("links", { ...formData.links, linkedin: v })
              }
              placeholder="https://linkedin.com/in/..."
            />
          </div>
          <div>
            <FieldLabel label="YouTube" hint="URL do canal" />
            <Input
              value={formData.links.youtube || ""}
              onChange={(v) =>
                updateField("links", { ...formData.links, youtube: v })
              }
              placeholder="https://youtube.com/@..."
            />
          </div>
          <div>
            <FieldLabel label="Site" hint="URL do site" />
            <Input
              value={formData.links.website || ""}
              onChange={(v) =>
                updateField("links", { ...formData.links, website: v })
              }
              placeholder="https://..."
            />
          </div>
        </div>
      </Section>

      {/* 8. Observações */}
      <Section
        title="Observações"
        icon={<MessageSquare className="w-5 h-5 text-bronze" />}
      >
        <Textarea
          value={formData.notes || ""}
          onChange={(v) => updateField("notes", v)}
          placeholder="Observações adicionais, informações importantes..."
          rows={4}
        />
      </Section>

      {/* Consentimento */}
      <Card className="border-bronze/20 bg-bronze/5">
        <CardContent className="p-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => updateField("consent", e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-graphite/30 text-bronze focus:ring-bronze/50"
            />
            <span className="text-sm text-graphite">
              Confirmo que as informações acima são verdadeiras e autorizo seu
              uso para atualização do site. Entendo que este formulário é
              interno e os dados serão usados exclusivamente para configuração
              do site institucional.
            </span>
          </label>
        </CardContent>
      </Card>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {error}
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        disabled={status === "loading" || !formData.consent}
        className="w-full bg-bronze hover:bg-bronze-dark text-white py-6 text-base font-medium"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Mail className="w-5 h-5 mr-2" />
            Gerar JSON e Enviar
          </>
        )}
      </Button>
    </form>
  );
}
