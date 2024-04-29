import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme: PluginAPI['theme']) => ({
        DEFAULT: {
          css: {
            maxWidth: false,
            h2: {
              background: theme('colors.green.600'),
              padding: theme('spacing.4'),
              color: theme('colors.white'),
            },
            h3: {
              borderLeft: "8px solid theme('colors.green.600')",
              padding: theme('spaciing.8'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
