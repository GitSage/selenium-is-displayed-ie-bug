const {Builder, By} = require('selenium-webdriver');

(async () => {
	let locator = By.id('should-not-be-displayed');

	let ieDriver = await new Builder()
		.forBrowser('internet explorer')
		.build();

	await ieDriver.get('http://127.0.0.1:8080/selenium_bug.html');
	await ieDriver.navigate().refresh(); // ie likes to cache the page even between sessions
	let isDisplayedIE = await ieDriver.findElement(locator).isDisplayed();

	console.log(`IE isDisplayed    : ${isDisplayedIE}`);

	let chromeDriver = await new Builder()
		.forBrowser('chrome')
		.build();

	await chromeDriver.get('http://127.0.0.1:8080/selenium_bug.html');
	let isDisplayedChrome = await chromeDriver.findElement(locator).isDisplayed();

	console.log(`Chrome isDisplayed: ${isDisplayedChrome}`);

	await ieDriver.quit();
	await chromeDriver.quit();
})();