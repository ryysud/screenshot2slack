# screenshot2slack

Upload a screenshot to slack with puppeteer on docker.

```bash
$ docker build -t screenshot2slack .
$ docker run --rm \
  -e SLACK_BOT_TOKEN=xxx-xxx-xxx \
  -e CHANNEL=your-channel\
  screenshot2slack
```

Environment Variables
======================

* **Required**
    * **SLACK_BOT_TOKEN**: Token string to post to slack. Go to https://my.slack.com/services/new/bot to create.
* **Option**
    * **TARGET_URL**: Screen shot target URL. default: `https://github.com/`.
    * **FILE_NAME**: File name to post. default: `example.png`.
    * **WIDTH**: Width of browser. default: `1280`.
    * **HEIGHT**: Height of browser. default: `768`.
    * **FULL_PAGE**: When true, takes a screenshot of the full scrollable page. default: `false`.
    * **CHANNEL**: Slack channel name to post. default: `general`.
    * **BASIC_AUTH_USERNAME**: Username to pass basic authentication.
    * **BASIC_AUTH_PASSWORD**: Password to pass basic authentication.
    * **COOKIES**: JSON Array string to pass to browser.
        * e.g.
            ```
            [
              {"name": "_session", "value": "xxxx", ...}`,
              {"name": "foo", "value": "bar", ...}`,
              ...
            ]
            ```
        * See [Puppeteer Docs](https://pptr.dev/#?product=Puppeteer&version=v1.8.0&show=api-pagesetcookiecookies).
