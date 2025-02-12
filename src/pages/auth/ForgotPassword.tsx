import { Link } from "react-router-dom";
import AuthLayout from "@/components/auth/AuthLayout";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import { usePageTitle } from "@/utils/usePageTitle";

export default function ForgotPassword() {
  usePageTitle("Forgot Password");

  return (
    <AuthLayout
      title="Forgot password?"
      description="Enter your email and we'll send you a reset link"
      footer={
        <div className="text-center text-sm">
          Remember your password?{" "}
          <Link to="/sign-in" className="font-medium hover:underline">
            Sign in
          </Link>
        </div>
      }
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
