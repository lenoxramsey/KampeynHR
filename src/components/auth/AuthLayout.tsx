import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  footer?: React.ReactNode;
}

export default function AuthLayout({
  children,
  title,
  description,
  footer,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left: Auth Form */}
      <div className="flex items-center justify-center p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Link
              to="/"
              className="mx-auto mb-8 flex items-center justify-center space-x-2"
            >
              <span className="font-bold text-2xl">Kampeyn</span>
            </Link>
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          {children}
          {footer}
        </div>
      </div>

      {/* Right: Background Image */}
      <div className="hidden lg:block relative">
        <div className="absolute inset-0 bg-muted" />
        <img
          src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=3456&auto=format&fit=crop"
          alt="Authentication background"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
