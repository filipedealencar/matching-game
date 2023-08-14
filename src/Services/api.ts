import { createClient } from "@supabase/supabase-js";
import { Columns, DatabaseType } from "./types";

export const supabase = createClient<DatabaseType>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const getScore = async (database: string): Promise<any> => {
  const { data, error } = await supabase
    .from(database)
    .select("*")
    .order("score", { ascending: false });

  return { data, error };
};
export const insertScore = async (
  database: string,
  value: any
): Promise<any> => {
  const { data, error } = await supabase
    .from(database)
    .insert([value])
    .select("*");

  return { data, error };
};

export default supabase;
