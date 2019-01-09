module.exports = wallaby => ({
  files: ['src/**/*.ts', 'test/**/*.ts', '!test/**/*.test.ts', 'dist/**/*'],
  tests: ['test/**/*.test.ts'],
  env: {
    type: 'node',
    runner: 'node'
  },
  testFramework: 'mocha',
  debug: true,
  compilers: {
    '**/*.ts?(x)': wallaby.compilers.typeScript({ module: 'commonjs' })
  },
})
