import {
  Int, Field, ObjectType, InputType,
} from 'type-graphql';

@ObjectType({ description: 'Axes data' })
@InputType('AxesInput')
export class Axes {
  @Field((type) => Int)
  anarchism: number

  @Field((type) => Int)
  anthropocentrism: number

  @Field((type) => Int)
  authoritarianism: number

  @Field((type) => Int)
  capitalism: number

  @Field((type) => Int)
  communism: number

  @Field((type) => Int)
  cosmopolitanism: number

  @Field((type) => Int)
  environmentalism: number

  @Field((type) => Int)
  interventionism: number

  @Field((type) => Int)
  laissezfaire: number

  @Field((type) => Int)
  militarism: number

  @Field((type) => Int)
  nationalism: number

  @Field((type) => Int)
  pacifism: number

  @Field((type) => Int)
  progressivism: number

  @Field((type) => Int)
  traditionalism: number
}
