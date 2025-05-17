import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// vite 프록시 설정
export default defineConfig({
  plugins: [react()],
});
