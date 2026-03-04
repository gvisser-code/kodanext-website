import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

declare global {
  // eslint-disable-next-line no-var
  var _supabaseClient: SupabaseClient | undefined;
}

export function createClient() {
  if (globalThis._supabaseClient) return globalThis._supabaseClient;
  globalThis._supabaseClient = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  return globalThis._supabaseClient;
}
