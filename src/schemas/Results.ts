import { Int, Field, ObjectType } from 'type-graphql';
import { ObjectId } from 'mongodb';
import { prop, Typegoose } from '@hasezoey/typegoose';
import * as mongoose from 'mongoose';

import { Axes } from './Axes';
import { ObjectIdScalar } from '../scalars/ObjectId';

@ObjectType({ description: 'Results data' })
export class Results extends Typegoose {
  @Field((type) => ObjectIdScalar)
  readonly _id: ObjectId

  @prop()
  @Field((type) => Int)
  totalCount: number

  @prop()
  @Field((type) => Axes)
  axes: Axes

  @prop()
  @Field()
  additionDate: Date

  @prop()
  @Field((type) => Boolean, { defaultValue: false })
  generated: boolean
}

export const ResultsModel = new Results().getModelForClass(Results, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'results' },
});
