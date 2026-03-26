import { createClient } from "@supabase/supabase-js";

/**
 * Cliente Supabase para uso server-side (API Routes, Server Components)
 * Usa SERVICE_ROLE_KEY para bypass de RLS quando necessário
 * 
 * IMPORTANTE: Nunca expor este cliente no client-side!
 */
export function createSupabaseServerClient() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error(
      "Missing Supabase environment variables. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    );
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

/**
 * Tipos para a tabela leads
 */
export interface Lead {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  phone?: string | null;
  subject: string;
  message: string;
  consent: boolean;
  source?: string | null;
  ip_hash?: string | null;
}
