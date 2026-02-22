import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/tailwindcss-ui/", // Adicione esta linha com o nome exato do seu repositório
});
