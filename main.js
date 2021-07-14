const fs = require('fs');
const request = require('request');
const puppeteer = require('puppeteer');

// For puppeteer
const TARGET_URL = process.env.TARGET_URL || 'https://github.com';
const FILE_NAME = process.env.FILE_NAME || 'example.png';
const WIDTH = process.env.WIDTH || 1280;
const HEIGHT = process.env.HEIGHT || 768;
const FULL_PAGE = process.env.FULL_PAGE;

// For posting to slack
const API_URL = 'https://slack.com/api/files.upload';
const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
const CHANNEL = process.env.CHANNEL || 'general';

async function loginWithCookie(page, cookiesStr) {
  const cookies = JSON.parse(cookiesStr);
  for (let cookie of cookies) {
    await page.setCookie(cookie);
  }
}

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      `--window-size=${WIDTH},${HEIGHT}`,
    ]
  });

  const page = await browser.newPage();

  // Basic Auth
  const BASIC_AUTH_USERNAME = process.env.BASIC_AUTH_USERNAME;
  const BASIC_AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD;
  if (BASIC_AUTH_USERNAME != null && BASIC_AUTH_PASSWORD != null) {
    await page.authenticate({username: BASIC_AUTH_USERNAME, password: BASIC_AUTH_PASSWORD});
  }
  // Set Cookie
  if (process.env.COOKIES != null) {
    await loginWithCookie(page, process.env.COOKIES);
  }

  await page.goto(TARGET_URL);
  //// disable default viewport
  // see https://github.com/GoogleChrome/puppeteer/issues/1183
  await page._client.send('Emulation.clearDeviceMetricsOverride');

  // Wait delay
  if (process.env.SCREENSHOT_DELAY_SEC != null) {
    await page.waitFor(process.env.SCREENSHOT_DELAY_SEC * 1000);
  }
  await page.screenshot({path: FILE_NAME, fullPage: (FULL_PAGE==='true')});

  await browser.close();

  var data = {
    url: API_URL,
    formData: {
      token: SLACK_BOT_TOKEN,
      filename: FILE_NAME,
      file: fs.createReadStream('./' + FILE_NAME),
      channels: CHANNEL
    }
  };
  request.post(data, function(error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log('Uploading a screenshot to slack is Success :)');
      } else {
          console.log('Uploading a screenshot to slack is Failure :(');
      }
  });

})();
