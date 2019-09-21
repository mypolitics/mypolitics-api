import { Int, Field, ObjectType } from "type-graphql"
import { ObjectIdScalar } from "../scalars/ObjectId"
import { ObjectId } from "mongodb"
import { prop, Typegoose } from "typegoose"
import * as mongoose from "mongoose"

@ObjectType({ description: "Question data" })
export class Question extends Typegoose {
  @Field(type => ObjectIdScalar)
  readonly _id: ObjectId

  @prop()
  @Field(type => Int)
  index: number

  @prop()
  @Field(type => Int)
  totalCount: number

  @prop()
  @Field()
  lang: string

  @prop()
  @Field()
  text: string

  @prop()
  @Field()
  category: string

  @prop()
  @Field(type => [String])
  affirmativeAnswerEffects: string[]

  @prop()
  @Field(type => [String])
  negativeAnswerEffects: string[]
}

export const QuestionModel = new Question().getModelForClass(Question, {
  existingMongoose: mongoose,
  schemaOptions: { collection: "questions" }
})
