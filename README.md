# screenshot2slack

[![Tags](https://img.shields.io/github/tag/ryysud/screenshot2slack.svg?style=flat-square)](https://github.com/ryysud/screenshot2slack/tags)
[![Docker Build Status](https://img.shields.io/docker/build/ryysud/screenshot2slack.svg?style=flat-square)](https://hub.docker.com/r/ryysud/screenshot2slack/builds)
[![Docker Pulls](https://img.shields.io/docker/pulls/ryysud/screenshot2slack.svg?style=flat-square)](https://hub.docker.com/r/ryysud/screenshot2slack)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Overview

screenshot2slack is a tool uploading a screenshot to slack with puppeteer on docker.

Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol.<br>
See https://github.com/GoogleChrome/puppeteer .

## Requirements

- Docker
- Slack App (Go to https://my.slack.com/services/new/bot to create.)

## Usage

### Getting started

```bash
$ docker run --rm \
    -e SLACK_BOT_TOKEN=xxx-xxx-xxx \
    -e CHANNEL=your-channel \
    ryysud/screenshot2slack:latest
```

### Specify URL, width and height

```bash
$ docker run --rm \
    -e SLACK_BOT_TOKEN=xxx-xxx-xxx \
    -e CHANNEL=your-channel \
    -e TARGET_URL=https://github.com/ryysud/screenshot2slack \
    -e WIDTH=1920 \
    -e HEIGHT=1080 \
    ryysud/screenshot2slack:latest
```

### Via Basic authentication

```bash
$ docker run --rm \
    -e SLACK_BOT_TOKEN=xxx-xxx-xxx \
    -e CHANNEL=your-channel \
    -e TARGET_URL=https://example.com/path/to/basic-authentication-page \
    -e BASIC_AUTH_USERNAME=username \
    -e BASIC_AUTH_PASSWORD=password \
    ryysud/screenshot2slack:latest
```

## Environment Variables

| Name | Description | Reqired | Default |
| :-: | :-: | :-: | :-: |
| SLACK_BOT_TOKEN | Token string to post to slack. | ◯ | - |
| TARGET_URL | Screen shot target URL. | - | `https://github.com` |
| FILE_NAME | File name to post. | - | `example.png` |
| WIDTH | Width of browser. | - | `1280` |
| HEIGHT | Height of browser. | - | `768` |
| FULL_PAGE | When true, takes a screenshot of the full scrollable page. | - | `false` |
| CHANNEL | Slack channel name to post. | - | `general` |
| BASIC_AUTH_USERNAME | Username to pass basic authentication. | - | `null` |
| BASIC_AUTH_PASSWORD | Password to pass basic authentication. | - | `null` |
| COOKIES | JSON Array string to pass to browser. | - | `null` |

Example of COOKIES

```javascript
[
    {"name": "_session", "value": "xxx", ...},
    {"name": "foo", "value": "bar", ...},
    ...
]
```

See [Puppeteer Docs](https://pptr.dev/#?product=Puppeteer&version=v1.8.0&show=api-pagesetcookiecookies).

## License

- [Apache License 2.0](https://github.com/ryysud/screenshot2slack/blob/master/LICENSE)
