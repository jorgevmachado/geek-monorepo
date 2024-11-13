import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  typescript: {
    reactDocgen: false,
    reactDocgenTypescriptOptions: {
      tsconfigPath: '../tsconfig.json'
    }
  },
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
          'style-loader',
          'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: `
              @import "~@geek/tokens/dist/geek/css/_variables.css";
              @import "~@geek/tokens/dist/geek/scss/_variables.scss";
            `,
            implementation: require('sass'),
          }
        }
      ]
    });
    return config;
  },
  docs: {
    autodocs: true
  }
};
export default config;
