import { InputType, Field } from 'type-graphql';

@InputType({ description: 'Results ids input' })
export default class ResultsIdsInput {
  @Field((type) => [String])
  resultsIds: string[]
}
