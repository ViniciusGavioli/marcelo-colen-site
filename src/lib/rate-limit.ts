/**
 * Rate Limiter in-memory simples
 * 
 * Para produção em larga escala, considerar Redis ou similar.
 * Este limiter é resetado a cada restart do servidor.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

// Map de IP -> contador
const rateLimitMap = new Map<string, RateLimitEntry>();

// Limpar entradas expiradas periodicamente (a cada 5 minutos)
const CLEANUP_INTERVAL = 5 * 60 * 1000; // 5 minutos

let cleanupTimeout: NodeJS.Timeout | null = null;

function scheduleCleanup() {
  if (cleanupTimeout) return;
  
  cleanupTimeout = setTimeout(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitMap.entries()) {
      if (entry.resetAt < now) {
        rateLimitMap.delete(key);
      }
    }
    cleanupTimeout = null;
    
    // Reagendar se ainda houver entradas
    if (rateLimitMap.size > 0) {
      scheduleCleanup();
    }
  }, CLEANUP_INTERVAL);
}

interface RateLimitConfig {
  /** Número máximo de requisições permitidas */
  maxRequests: number;
  /** Janela de tempo em milissegundos */
  windowMs: number;
}

interface RateLimitResult {
  /** Se a requisição foi permitida */
  allowed: boolean;
  /** Requisições restantes na janela */
  remaining: number;
  /** Timestamp de reset da janela */
  resetAt: number;
}

/**
 * Verifica se um IP está dentro do limite de requisições
 * 
 * @param identifier - Identificador único (geralmente IP hash)
 * @param config - Configuração do rate limit
 * @returns Resultado da verificação
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  // Se não existe entrada ou expirou, criar nova
  if (!entry || entry.resetAt < now) {
    const newEntry: RateLimitEntry = {
      count: 1,
      resetAt: now + config.windowMs,
    };
    rateLimitMap.set(identifier, newEntry);
    scheduleCleanup();
    
    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetAt: newEntry.resetAt,
    };
  }

  // Incrementar contador
  entry.count += 1;

  // Verificar se ultrapassou o limite
  if (entry.count > config.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: entry.resetAt,
    };
  }

  return {
    allowed: true,
    remaining: config.maxRequests - entry.count,
    resetAt: entry.resetAt,
  };
}

/**
 * Gera um hash simples do IP para armazenamento
 * Não armazena o IP diretamente por questões de privacidade
 */
export function hashIP(ip: string): string {
  // Hash simples usando base64
  // Para produção, considerar usar crypto.subtle ou similar
  const encoder = new TextEncoder();
  const data = encoder.encode(ip + "_salt_marcelo_colen_leads");
  
  // Simular hash com base64
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data[i];
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  return Math.abs(hash).toString(36);
}
