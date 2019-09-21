![GitHub](https://img.shields.io/github/license/mypolitics/mypolitics-api)
![David](https://img.shields.io/david/mypolitics/mypolitics-api)
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

# mypolitics-api

mypolitics-api is an app made with Node.js, MongoDB and TypeScript, which provides GraphQL API for [myPolitics political test](https://github.com/myPolitics/myPolitics).

![logo](https://user-images.githubusercontent.com/10941338/57182335-2bc91f80-6e9e-11e9-90bb-feaea709c346.png)

## Installation

The first time, get all the dependencies loaded via

```
npm install
```

Then, define custom environment variables by creating `.env` file according to this pattern

```env
# MongoDB database URI
DATABASE_URI=

# Development variables
PORT=8000
NODE_ENV=development
```

Finally, run the server with

```
npm start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
