const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://rahulshettyacademy.com/seleniumPractise/",
    pageLoadTimeout: 150000,
    video: false
  },
});
