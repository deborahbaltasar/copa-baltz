export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string | null;
          display_name: string | null;
          selected_country_code: string | null;
          selected_country_name: string | null;
          selected_country_flag: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id: string;
          email?: string | null;
          display_name?: string | null;
          selected_country_code?: string | null;
          selected_country_name?: string | null;
          selected_country_flag?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          email?: string | null;
          display_name?: string | null;
          selected_country_code?: string | null;
          selected_country_name?: string | null;
          selected_country_flag?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
