# shopify-embedded-app
Second internship, Shopify App Project with React and Node.js

## Versions

```
node -v10.16.0
npm -v6.14.2
ngrok -v2.3.35
```

## Installation

```
npm install --save react react-dom next
npm install ngrok -g
npm install --save koa @shopify/koa-shopify-auth dotenv koa-session isomorphic-fetch
npm install --save @zeit/next-css @shopify/polaris
npm install --save @shopify/app-bridge-react js-cookie
npm install --save graphql apollo-boost react-apollo
npm install --save @shopify/koa-shopify-graphql-proxy
```

## Running

```
1. To run localhost 
  - npm run dev
2. Set ngrok to use port 3000
  - ngrok http 3000
```

### Notes

- Change ngrok URL in your Shopify App Settings with each ngrok run.
