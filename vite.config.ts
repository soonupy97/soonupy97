import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true, // CSS 소스맵 활성화 (Vite 3+)
  },
  build: {
    sourcemap: true, // 빌드 시 JS 소스맵 생성
  },
  assetsInclude: ['**/*.glb'], // GLB 파일 지원
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});