import ReactDOM from "react-dom/client";
import App from "@/routes";
import "./styles/index.css";
import { Toaster } from "@/components/ui/toaster";
import { TokenProvider } from "@/utils/context/token";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TokenProvider>
    <App />
    <Toaster />
  </TokenProvider>
);
