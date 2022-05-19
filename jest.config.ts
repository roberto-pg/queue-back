import { resolve } from 'path'

const root = resolve(__dirname)

export default {
  rootDir: root,
  clearMocks: true,
  coverageProvider: 'v8',
  displayName: 'unit-test',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
  },
}
