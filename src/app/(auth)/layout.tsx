import { AuthProvider } from "@/contexts/authContext";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}