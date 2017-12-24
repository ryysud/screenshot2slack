const fs = require('fs');
const request = require('request');
const puppeteer = require('puppeteer');

// For puppeteer
const TARGET_URL = 'https://github.com/GoogleChrome/puppeteer';
const FILE_NAME = 'example.png';

// For posting to slack
const API_URL = 'https://slack.com/api/files.upload';
const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
const CHANNEL = process.env.CHANNEL;

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox'
    ]
  });
  const page = await browser.newPage();
  await page.goto(TARGET_URL);
  await page.screenshot({path: FILE_NAME});

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
          console.log('Success :)');
      } else {
          console.log('Failure :(');
      }
  });

})();
