module.exports = {
  root: true,
  extends: [
    'kanziw',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
}
