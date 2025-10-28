import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig(
{
    root: "./source/public/",
    publicDir: "../../assets/",
    build: 
    {
        outDir: "../../dist/",
    },

    server: 
    {
        port: 5173,
    },
    
    resolve: 
    {
        alias: 
        {
        "@": resolve(__dirname, "./source/"),
        },
    },

    base: '/',
});