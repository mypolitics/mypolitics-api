require("dotenv").config()

import { GraphQLServer } from "graphql-yoga"
import "reflect-metadata"
import { buildSchema } from "type-graphql"
import * as mongoose from "mongoose"
import * as helmet from "helmet"
import config from "./config"
import QuestionResolver from "./resolvers/QuestionResolver"
import ResultsResolver from "./resolvers/ResultsResolver"

// Get Mongoose to use the global promise library
;(<any>mongoose.Promise) = global.Promise

mongoose.connect(config.DATABASE_URI, {
  useNewUrlParser: true
})

mongoose.connection
  .once("open", () => console.log("MongoDB running"))
  .on("error", console.error.bind(console, "MongoDB connection error:"))

async function init() {
  const schema = await buildSchema({
    resolvers: [QuestionResolver, ResultsResolver],
    emitSchemaFile: true
  })

  const server = new GraphQLServer({
    schema
  })

  server.express.use(helmet())
  server.express.enable("trust proxy")
  server.express.use(config.limiter)

  server.start(config.options, ({ port, playground }) =>
    console.log(
      `Server started, listening on port ${port} for incoming requests.
      \nPlayground: http://localhost:${port}${playground}`
    )
  )
}

init()
