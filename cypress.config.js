const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://reqres.in",
    projectId: "916brz",
    env: {
      "googleUrl": "https://store.google.com/us",
      "googleUrl2": "https://store.google.com/us"
    }
    },
  })
