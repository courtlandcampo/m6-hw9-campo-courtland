# Weather Widget

&nbsp;
## Background

For this assignment you are being tasked with creating a proof of concept (POC) for a weather widget. Your boss has discovered a new weather API and would like you to create an app that uses this new weather API to deomnstrate its capabilities. Your boss is impressed with your previous work, and so she is entrusting you with this new greenfield project.

**Note:** Greenfield development refers to development that has not begun yet, allowing the developer to choose technologies and start developing from the ground up with no pre-existing code.

&nbsp;
## Setup

Please create a git repository titled `m6-hw9-lastname-firstname` and clone the repo to your computer. There is no `unsolved` folder for this project, so you will need to create your own HTML, CSS, and JavaScript files.

This assignment will require you to utilize the Open Weather Api to provide weather information to your app. You will need to obtain an API key from Open Weather. [First create a free account on their website](https://home.openweathermap.org/users/sign_up). Once you've signed up, [navigate to the API key page](https://home.openweathermap.org/api_keys) to create an API key for your app.

&nbsp;
## Instructions

You assignment is to create a single page web app that allows users to search for weather information based on location. Users should be able to enter a US city and view current weather information for that city on the page. The displayed weather information should include:

1. Name of the Searched City with Country Code
1. Description of current weather
1. Icon image for current weather conditions
1. Current Temperature
1. Current "feels like" Temperature

You'll need to use [the current weather endpoint](https://openweathermap.org/current) to obtain current weather data for your app.

The url for current weather looks like this:

`api.openweathermap.org/data/2.5/weather?q=YOURQUERY&units=imperial&appid=YOURAPIKEY`

As far as styling the app, you can refer to the mockups folder for inspiration, however you're free to style the app however you like. Regardless of how you decide to style the app, it should be responsive on mobile devices as well as on larger screens.

&nbsp;
## Deployment

Your code must be deployed to GitHub Pages. To deploy a repository to GitHub pages you must

1. Ensure your repository has an `index.html` file in the root directory.
1. Navigate to the `settings` section of the repository.
1. Click on `pages` in the left navigation menu.
1. Under `source` click the dropdown and select your `master` or `main` branch.
1. Click `save`.

Your site should be deployed to `<your github username>.github.io/<your repository name>` in 5-10 minutes.

&nbsp;
## Submission

Please submit both a link to your repository and a link to the live site. Also please include any comments on stumbling blocks or difficulties encountered while completing the assignment.

&nbsp;
## Resources

This assignment will test your ability to work with Asynchronous code in JavaScript, as well as the JS DOM API.

Asynchronous JS Resources:

- [W3 Schools Callbacks Review](https://www.w3schools.com/js/js_callback.asp)
- [W3 Schools Promises Review](https://www.w3schools.com/js/js_promise.asp)
- [Using Promises (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [The trouble with callbacks (MDN)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#the_trouble_with_callbacks)
- [Using Fetch (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

W3 Schools JavaScript DOM API Review:

[W3 has beginner friendly resources for the JavaScript DOM API](https://www.w3schools.com/js/js_htmldom.asp). Feel free to work down the list on the left if you would like to review the JS DOM API basics.

Other JS DOM API resouces:

- [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
- [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [onclick](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)
- [Event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)