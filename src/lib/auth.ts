
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";

// Auth functions for email/password
export const signUp = async (email: string, password: string, firstName: string, lastName: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    });

    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    toast.error(error.message || "Failed to sign up");
    return { data: null, error };
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    toast.error(error.message || "Failed to sign in");
    return { data: null, error };
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (error: any) {
    toast.error(error.message || "Failed to sign out");
    return { error };
  }
};

// Social login providers
export const signInWithGoogle = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/dashboard',
      }
    });
    
    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    toast.error(error.message || "Failed to sign in with Google");
    return { data: null, error };
  }
};

export const signInWithLinkedIn = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'linkedin_oidc',
      options: {
        redirectTo: window.location.origin + '/dashboard',
      }
    });
    
    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    toast.error(error.message || "Failed to sign in with LinkedIn");
    return { data: null, error };
  }
};

// Check current session
export const getCurrentSession = async () => {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    return { session: data.session, error: null };
  } catch (error: any) {
    return { session: null, error };
  }
};
