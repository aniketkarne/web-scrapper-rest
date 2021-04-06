# meta-scraper

meta-scraper is a Serverless Application which catch the metadata for given URL

## Installation

Use the package manager [npm] to install meta-scraper.

```bash
npm install
```

## Usage

```nodejs
curl --location --request POST 'https://api-gateway_url.com/dev/metadata' \
--header 'Content-Type: application/json' \
--data-raw '{"url": "https://yahoo.com"}'
