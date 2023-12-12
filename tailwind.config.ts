import type { Config } from "tailwindcss";
import baseConfig from "tailwind-theme/tailwind.config";

export default {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    "./stories/**/*.stories.{js,ts,jsx,tsx,mdx}",
    "./node_modules/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
    },
  },
} satisfies Config;
