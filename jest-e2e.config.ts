import jestConfig from './jest.config'

export default {
  ...jestConfig,
  testEnvironment: './src/infra/prisma/prisma-test-environment.ts',
  testRegex: '.e2e-spec.ts$',
  displayName: 'end2end-test',
}
