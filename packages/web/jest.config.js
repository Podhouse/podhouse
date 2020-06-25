module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$',
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  coveragePathIgnorePatterns: ['/node_modules/', 'jest.config.js'],
  setupFilesAfterEnv: ['./src/tests/setupTests.ts'],
  moduleNameMapper: {
    "src(.*)$": "<rootDir>/src$1"
  }
}