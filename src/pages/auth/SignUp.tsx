import { Link } from "react-router-dom";
import AuthLayout from "@/components/auth/AuthLayout";
import SignUpForm from "@/components/auth/SignUpForm";
import { usePageTitle } from "@/utils/usePageTitle";

export default function SignUp() {
  usePageTitle("Sign Up");

  return (
    <AuthLayout
      title="Create an account"
      description="Enter your email below to create your account"
      footer={
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/sign-in" className="font-medium hover:underline">
            Sign in
          </Link>
        </div>
      }
    >
      <SignUpForm />
    </AuthLayout>
  );
}
