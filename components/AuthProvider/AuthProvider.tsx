'use client';
interface AuthProvider {
  children: React.ReactNode;
}
export default function AuthProvider({ children }: AuthProvider) {
  return <>{children}</>;
}
