import {
  Arg,
  Query,
  Resolver,
  Mutation,
  FieldResolver,
  Root,
} from 'type-graphql';
import { ObjectId } from 'mongodb';

import { Results, ResultsModel } from '../schemas/Results';
import ResultsInput from '../inputs/ResultsInput';
import ResultsIdsInput from '../inputs/ResultsIdsInput';

@Resolver(of => Results)
export default class {
  @Query((returns) => [Results], { description: 'All results data' })
  async allResults() {
    return await ResultsModel.find();
  }

  @Query((returns) => Results, {
    nullable: true,
    description: 'Single results data by id',
  })
  async singleResultsById(@Arg('id') id: string) {
    return await ResultsModel.findById(new ObjectId(id));
  }

  @Query((returns) => [Results], {
    nullable: true,
    description: 'Many results data by ids',
  })
  async manyResultsByIds(@Arg('data') data: ResultsIdsInput) {
    const objectIds = data.resultsIds.map((id) => new ObjectId(id));
    return await ResultsModel.find({ _id: { $in: objectIds } });
  }

  @FieldResolver()
  async totalCount(@Root() results: Results) {
    return ResultsModel.find().countDocuments();
  }

  @Mutation((returns) => Results, { description: 'Add new results' })
  async addResults(@Arg('data') resultsData: ResultsInput) {
    const r = new ResultsModel(resultsData);
    return await r.save();
  }
}
