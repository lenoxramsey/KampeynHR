import { Link } from "react-router-dom";
import AuthLayout from "@/components/auth/AuthLayout";
import SignInForm from "@/components/auth/SignInForm";
import { usePageTitle } from "@/utils/usePageTitle";

export default function SignIn() {
  usePageTitle("Sign In");

  return (
    <AuthLayout
      title="Welcome back"
      description="Enter your email to sign in to your account"
      footer={
        <div className="text-center text-sm">
          <Link
            to="/forgot-password"
            className="text-muted-foreground hover:text-primary"
          >
            Forgot your password?
          </Link>
          <div className="mt-2">
            Don't have an account?{" "}
            <Link to="/sign-up" className="font-medium hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      }
    >
      <SignInForm />
    </AuthLayout>
  );
}
