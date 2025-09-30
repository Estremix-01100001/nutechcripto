/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Declaraciones de tipos para archivos JSON
declare module "*.json" {
  const value: any;
  export default value;
}

// Declaraciones globales para el proyecto
declare global {
  interface Window {
    filterFAQ: (category: string) => void;
    toggleFAQ: (id: number) => void;
  }
}

export {};