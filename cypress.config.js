import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild'

export default defineConfig({
  env: {
    username: 'lourdes100@test.com',
    password: 'Test123!',
  },
  e2e: {
    baseUrl: 'https://www.newspapers.com/',
    specPattern: '**/*.feature',
    chromeWebSecurity: false,
    requestTimeout: 60000,
    async setupNodeEvents(on, config) {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config)

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      )

      // Make sure to return the config object as it might have been modified by the plugin.
      return config
    },
  },
})
