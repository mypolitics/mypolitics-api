const rateLimit = require('express-rate-limit');

const { NODE_ENV, DATABASE_URI, PORT } = process.env;

interface Config {
  DATABASE_URI: any
  limiter: any
  options: {
    port: string | undefined
    endpoint: string
    playground: string | false
  }
}

const config: Config = {
  DATABASE_URI,
  limiter: rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  }),
  options: {
    port: PORT,
    endpoint: '/api',
    playground: NODE_ENV === 'development' ? '/playground' : false,
  },
};

export default { ...config };
