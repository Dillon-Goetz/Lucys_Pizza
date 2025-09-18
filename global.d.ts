// a`types/global.d.ts` or `global.d.ts`

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

// This empty export statement is necessary to make the file a module.
export {};