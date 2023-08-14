export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

interface Columns {
  created_at: string;
  id: number;
  name: string;
  score: number;
  time: string;
}

export interface DatabaseType {
  public: {
    Tables: {
      "matching-game-db": {
        Row: {
          created_at: string;
          id: number;
          name: string;
          score: number;
          time: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
          score: number;
          time: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
          score?: number;
          time?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
