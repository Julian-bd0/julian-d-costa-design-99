import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/julian-d-costa-design-99/",   // 👈 তোমার repo নাম
  plugins: [react()],
});
