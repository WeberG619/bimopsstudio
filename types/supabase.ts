// ============================================================
// BIM Ops Studio — Supabase Database Types
// ============================================================

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          company: string | null;
          role: string | null;
          revit_version: string | null;
          is_admin: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          company?: string | null;
          role?: string | null;
          revit_version?: string | null;
          is_admin?: boolean;
        };
        Update: {
          full_name?: string | null;
          company?: string | null;
          role?: string | null;
          revit_version?: string | null;
          is_admin?: boolean;
        };
      };
      leads: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          company: string | null;
          company_size: string | null;
          revit_version: string | null;
          seats: number | null;
          timeline: string | null;
          pain_points: string | null;
          status: string;
          score: number;
          source: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          email: string;
          full_name?: string | null;
          company?: string | null;
          company_size?: string | null;
          revit_version?: string | null;
          seats?: number | null;
          timeline?: string | null;
          pain_points?: string | null;
          status?: string;
          score?: number;
          source?: string | null;
        };
        Update: {
          email?: string;
          full_name?: string | null;
          company?: string | null;
          company_size?: string | null;
          revit_version?: string | null;
          seats?: number | null;
          timeline?: string | null;
          pain_points?: string | null;
          status?: string;
          score?: number;
          source?: string | null;
        };
      };
      deals: {
        Row: {
          id: string;
          lead_id: string | null;
          title: string;
          value: number;
          stage: string;
          product: string;
          plan: string;
          probability: number;
          close_date: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          lead_id?: string | null;
          title: string;
          value: number;
          stage?: string;
          product: string;
          plan: string;
          probability?: number;
          close_date?: string | null;
        };
        Update: {
          lead_id?: string | null;
          title?: string;
          value?: number;
          stage?: string;
          product?: string;
          plan?: string;
          probability?: number;
          close_date?: string | null;
        };
      };
      notes: {
        Row: {
          id: string;
          lead_id: string | null;
          deal_id: string | null;
          user_id: string | null;
          type: string;
          content: string;
          created_at: string;
        };
        Insert: {
          lead_id?: string | null;
          deal_id?: string | null;
          user_id?: string | null;
          type?: string;
          content: string;
        };
        Update: {
          lead_id?: string | null;
          deal_id?: string | null;
          type?: string;
          content?: string;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          stripe_customer_id: string;
          stripe_subscription_id: string;
          product: string;
          plan: string;
          status: string;
          current_period_start: string | null;
          current_period_end: string | null;
          cancel_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          stripe_customer_id: string;
          stripe_subscription_id: string;
          product: string;
          plan: string;
          status?: string;
          current_period_start?: string | null;
          current_period_end?: string | null;
          cancel_at?: string | null;
        };
        Update: {
          status?: string;
          current_period_start?: string | null;
          current_period_end?: string | null;
          cancel_at?: string | null;
        };
      };
      trials: {
        Row: {
          id: string;
          user_id: string;
          product: string;
          plan: string;
          status: string;
          starts_at: string;
          expires_at: string;
          reminder_day10_sent: boolean;
          reminder_day13_sent: boolean;
          created_at: string;
        };
        Insert: {
          user_id: string;
          product: string;
          plan: string;
          status?: string;
          starts_at?: string;
          expires_at?: string;
          reminder_day10_sent?: boolean;
          reminder_day13_sent?: boolean;
        };
        Update: {
          status?: string;
          reminder_day10_sent?: boolean;
          reminder_day13_sent?: boolean;
        };
      };
      license_keys: {
        Row: {
          id: string;
          user_id: string;
          product: string;
          key: string;
          machine_id: string | null;
          status: string;
          activated_at: string | null;
          expires_at: string | null;
          created_at: string;
        };
        Insert: {
          user_id: string;
          product: string;
          key?: string;
          machine_id?: string | null;
          status?: string;
          activated_at?: string | null;
          expires_at?: string | null;
        };
        Update: {
          machine_id?: string | null;
          status?: string;
          activated_at?: string | null;
          expires_at?: string | null;
        };
      };
      email_logs: {
        Row: {
          id: string;
          template: string;
          recipient: string;
          subject: string;
          status: string;
          metadata: Json | null;
          created_at: string;
        };
        Insert: {
          template: string;
          recipient: string;
          subject: string;
          status?: string;
          metadata?: Json | null;
        };
        Update: {
          status?: string;
          metadata?: Json | null;
        };
      };
      newsletter_subscribers: {
        Row: {
          id: string;
          email: string;
          frequency: string;
          status: string;
          created_at: string;
          unsubscribed_at: string | null;
        };
        Insert: {
          email: string;
          frequency?: string;
          status?: string;
        };
        Update: {
          frequency?: string;
          status?: string;
          unsubscribed_at?: string | null;
        };
      };
      downloads: {
        Row: {
          id: string;
          user_id: string | null;
          product: string;
          version: string;
          ip_address: string | null;
          created_at: string;
        };
        Insert: {
          user_id?: string | null;
          product: string;
          version: string;
          ip_address?: string | null;
        };
        Update: {
          user_id?: string | null;
        };
      };
    };
  };
}
