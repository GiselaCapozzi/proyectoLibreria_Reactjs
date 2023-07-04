import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(
  ({ command, mode }) => {
    const port = 8080; const env = loadEnv(mode, process.cwd());

    // console.log(comando: ${command} y modo: ${mode}); console.log("Variables de entorno:", env);

    if (command === "development") { console.log("Modo desarrollo"); } else { console.log("Modo produccion"); }

    return { server: { port }, },
      { plugins: [react()] }
  })
