import { InputType, Field } from "type-graphql"

import { Results } from "../schemas/Results"
import { Axes } from "../schemas/Axes"

@InputType({ description: "New results data input" })
export default class ResultsInput implements Partial<Results> {
  @Field(type => Axes)
  axes: Axes

  @Field()
  additionDate: Date
}
