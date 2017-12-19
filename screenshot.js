const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox'
    ]
  });
  const page = await browser.newPage();
  await page.goto('https://github.com/GoogleChrome/puppeteer');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
