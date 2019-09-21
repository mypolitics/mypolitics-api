import { InputType, Field, Int } from 'type-graphql';
import { Question } from '../schemas/Question';

@InputType({ description: 'New question data input' })
export default class QuestionInput implements Partial<Question> {
  @Field((type) => Int)
  index: number

  @Field()
  lang: string

  @Field()
  text: string

  @Field()
  category: string

  @Field((type) => [String])
  affirmativeAnswerEffects: string[]

  @Field((type) => [String])
  negativeAnswerEffects: string[]
}
