// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'app should work': browser => {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .waitForElementVisible('#app li', 5000)
      .waitForElementVisible('#app li img', 5000)
      .end()
  }
}
