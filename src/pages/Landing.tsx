import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/utils/usePageTitle";

export default function Landing() {
  usePageTitle("Welcome");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to="/" className="flex items-center justify-center">
          <span className="font-bold text-2xl">Kampeyn</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            to="/auth/sign-in"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Sign In
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Streamline Your Political Campaign Management
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Efficiently manage your campaign staff, payroll, and HR
                  operations with our comprehensive platform.
                </p>
              </div>
              <div className="space-x-4">
                <Link to="/auth/sign-up">
                  <Button size="lg">Get Started</Button>
                </Link>
                <Link to="/auth/sign-in">
                  <Button variant="outline" size="lg">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Payroll Management</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Streamline your campaign payroll with automated processing and
                  compliance.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Staff Directory</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Keep track of your entire campaign team in one centralized
                  location.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Tax Compliance</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Stay compliant with automated tax calculations and reporting.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Kampeyn. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link to="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
