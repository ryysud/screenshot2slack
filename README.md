# screenshot2slack

Upload a screenshot to slack with puppeteer on docker.

```bash
$ docker build -t screenshot2slack .
$ docker run --rm \
  -e SLACK_BOT_TOKEN=xxx-xxx-xxx \
  -e CHANNEL=your-channel\
  screenshot2slack
```
