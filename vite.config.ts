import { defineConfig, loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'

import { resolve } from "path";
import vue from '@vitejs/plugin-vue'

// naive ui
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

import { wrapperEnv } from './build/utils';

import pkg from './package.json';

import dayjs from 'dayjs'
import { execSync } from 'child_process';
const { name, author, license, version, repository, description, dependencies, devDependencies } = pkg;
const __APP_INFO__ = {
  lastBuildTime: dayjs().format('YYYY/MM/DD HH:mm:ss'),
  pkg: { name, author, license, version, repository, description, dependencies, devDependencies },
  gitTags: execSync('echo $(git rev-parse --short HEAD)').toString().trim(),
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {

  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const { VITE_PORT } = viteEnv;

  return {
    envPrefix: "vv_",
    plugins: [
      vue(),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ],
    server: {
      port: VITE_PORT,
      host: "0.0.0.0",
      strictPort: true,
    },
    preview: {
      port: VITE_PORT,
      host: "0.0.0.0",
      strictPort: true,
    },
    build: {
      outDir: "dist",
      manifest: true,
      target: 'esnext',
      assetsDir: "static",
      reportCompressedSize: false,
      chunkSizeWarningLimit: 512,
    },
    resolve: {
      alias: {
        "/^": resolve(__dirname, "."),
        "/@": resolve(__dirname, "src"),
        "/#": resolve(__dirname, "types"),
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    css: {
      preprocessorOptions: {
        scss: {}
      }
    }
  }
})
