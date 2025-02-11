import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import AuthLayout from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isVerifying, setIsVerifying] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const token = searchParams.get("token");
        if (!token) throw new Error("No verification token found");

        const { error } = await supabase.auth.verifyOtp({
          token_hash: token,
          type: "email",
        });

        if (error) throw error;

        // Wait a bit before redirecting to ensure the session is updated
        setTimeout(() => {
          navigate("/dashboard", { replace: true });
        }, 2000);
      } catch (error: any) {
        console.error("Error verifying email:", error);
        setError(error.message);
      } finally {
        setIsVerifying(false);
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  return (
    <AuthLayout
      title="Verifying your email"
      description="Please wait while we verify your email address"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        {isVerifying ? (
          <div className="flex items-center space-x-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            <p>Verifying your email...</p>
          </div>
        ) : error ? (
          <div className="text-center space-y-4">
            <p className="text-red-500">{error}</p>
            <Button onClick={() => navigate("/auth/sign-in")} variant="outline">
              Back to Sign In
            </Button>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-green-500">Email verified successfully!</p>
            <p>Redirecting to dashboard...</p>
          </div>
        )}
      </div>
    </AuthLayout>
  );
}
