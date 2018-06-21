# IEDriverServer.exe bug involving isDisplayed()

Calling `isDisplayed()` on a button with a weirdly specific html/css structure results in different behavior between IE and Chrome. I have simplified the html as much as possible. The conditions appear to be:

* A grandparent div hides the button with the styles `height: 0; overflow: hidden;`
* A parent div is `display: flex;`
* The button is `position: relative;`.
* The button contains a span with `style="position: absolute; left: 0; top: 0; bottom: 0; right: 0;"`

Removing any of these elements or styles causes Chrome and IE to have identical behavior. 

### Reproduction 

1. Have `IEDriverServer.exe` and `chromedriver.exe` on your `PATH`. 
1. Clone this repo.
1. `npm install`
1. Serve the HTML file (for example with `http-server` package)
1. Run `node index.js`

What I see: In IE, Selenium reports that the button is displayed. In Chrome, it is not displayed.
What I expect to see: Selenium should report that it is not displayed for both browsers.

Related to this bug: https://github.com/SeleniumHQ/selenium/issues/6058

Tested on Windows 10 with IE11, Chrome.