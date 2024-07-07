import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

export const db = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_KEY ?? ""
);
