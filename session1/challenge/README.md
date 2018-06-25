# React 16 - Session 1

## About

The following project is using socket io and it's getting information about Forecast.
You can create you own account or use the mocked object provided in this example.

[Dark Sky](darksky.net)

## Instructions

Install the `./server` dependencies and the `./start/client` dependencies by doing:


``` sh
yarn install
```

or

```sh
npm install
```


run the server

```sh
node ./server/app.js
```

run the client

```sh
cd client && yarn start
```

### File structure

#### Client
``` sh
├── package.json
├── src
│   ├── index.html
│   ├── js
│   │   ├── app.js
│   │   └── components
│   │       ├── container
│   │       │   ├── App.js
│   │       │   ├── App.styled.js
│   │       │   └── constants.js
│   │       └── presentational
│   │           ├── ModalPortal.js
│   │           ├── ModalPortal.styled.js
│   │           ├── TileErrorBoundary.js
│   │           └── index.js
│   └── reset.css
├── webpack.config.js
└── yarn.lock
```

#### Server

```sh
├── app.js
├── package.json
├── routes
│   └── index.js
└── yarn.lock
```

### Requirements

[ ] A component using fragments
[ ] An component using an error boundary
[ ] A component with Portal

Hint: Search for TODO's on the challenge/client directory


### Happy coding
