import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "./supabase";
import type { User } from "@supabase/supabase-js";

type AuthContextType = {
  user: User | null;
  profile: any | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard if user is already authenticated and trying to access auth pages
    if (user && location.pathname.startsWith("/auth/")) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, location, navigate]);

  useEffect(() => {
    async function initAuth() {
      try {
        // Check active sessions and sets the user
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
        if (session?.user) {
          await fetchProfile(session.user.id);
          if (!location.pathname.includes("/dashboard")) {
            navigate("/dashboard", { replace: true });
          }
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
      } finally {
        setIsLoading(false);
      }
    }

    initAuth();

    // Listen for changes on auth state
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);

      if (session?.user) {
        await fetchProfile(session.user.id);
        if (
          event === "SIGNED_IN" &&
          !location.pathname.includes("/dashboard")
        ) {
          navigate("/dashboard", { replace: true });
        }
      } else {
        setProfile(null);
        if (event === "SIGNED_OUT") {
          navigate("/", { replace: true });
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, location]);

  async function fetchProfile(userId: string) {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) throw error;
      setProfile(data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  }

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, profile, isLoading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth, AuthContext };
