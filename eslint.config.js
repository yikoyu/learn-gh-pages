import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'build/**/*.js',
    'node_modules/*',
    'node_modules/*/**',
    '**/node_modules/*',
    'src-capacitor/android/*',
    'src-capacitor/android/*/**',
    'dist_electron',
    '**/dist_electron/**',
    'dist',
    '**/dist/**',
    'lib',
    '**/lib/**',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
  ],
  vue: true,
  formatters: {
    css: true,
    html: true,
    markdown: true,
  },
})
