import {
  Arg,
  Query,
  Resolver,
  Mutation,
  FieldResolver,
  Root
} from "type-graphql"
import { Question, QuestionModel } from "../schemas/Question"
import QuestionInput from "../inputs/QuestionInput"

@Resolver(of => Question)
export default class {
  @Query(returns => [Question], { description: "All questions data" })
  async allQuestions() {
    return await QuestionModel.find()
  }

  @Query(returns => [Question], {
    description: "All questions data by specified language"
  })
  async allQuestionsByLanguage(
    @Arg("lang", { defaultValue: "pl-PL" }) lang: string
  ) {
    return await QuestionModel.find({ lang: lang })
  }

  @Query(returns => Question, {
    nullable: true,
    description: "Question data by index number"
  })
  async question(
    @Arg("index") index: number,
    @Arg("lang", { defaultValue: "pl-PL" }) lang: string
  ) {
    return await QuestionModel.findOne({ index: index, lang: lang })
  }

  @FieldResolver()
  async totalCount(@Root() question: Question) {
    return QuestionModel.find().countDocuments()
  }

  @Mutation(returns => Question, { description: "Add new question" })
  async addQuestion(@Arg("data") questionData: QuestionInput) {
    if (process.env.NODE_ENV == "development") {
      const q = new QuestionModel(questionData)
      return await q.save()
    } else {
      return new Error("Question adding is disabled in production")
    }
  }
}
