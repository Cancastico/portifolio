
import { AuthProvider } from "@/contexts/authContext";
import { useTheme } from "@/contexts/theme";
import { ToastContainer } from "react-toastify";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return <>
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
    />
    <AuthProvider>{children}</AuthProvider>;
  </>
}