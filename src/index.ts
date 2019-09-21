require('dotenv').config();
import { GraphQLServer } from 'graphql-yoga';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import * as helmet from 'helmet';
import * as cors from 'cors';
import config from './config';
import QuestionResolver from './resolvers/QuestionResolver';
import ResultsResolver from './resolvers/ResultsResolver';

import mongoose = require('mongoose')

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

mongoose.connect(config.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once('open', () => console.log('MongoDB running'))
  .on('error', console.error.bind(console, 'MongoDB connection error:'));

async function init() {
  const schema = await buildSchema({
    resolvers: [QuestionResolver, ResultsResolver],
    emitSchemaFile: true,
  });

  const server = new GraphQLServer({
    schema,
  });

  server.express.use(cors());
  server.express.use(helmet());
  server.express.enable('trust proxy');
  server.express.use(config.limiter);

  server.start(config.options, ({ port, playground }) => console.log(
    `Server started, listening on port ${port} for incoming requests.
    ${playground ? `\nPlayground: http://localhost:${port}${playground}` : ``}`,
  ));
}

init();
