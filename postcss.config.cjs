// postcss.config.cjs
const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');

module.exports = {
  plugins: [
    postcssJitProps({
      ...OpenProps,
      custom_selector: ':where(html)',
      layer: 'design-system.tokens',
    }),
  ],
};
