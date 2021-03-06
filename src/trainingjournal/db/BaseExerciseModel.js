// @flow

import { Schema } from 'mongoose';

import { trainingjournalConnection as mongoose } from '../../common/db/MongoDB';
import type { LoggedInUser } from '../../common/services/GraphqlContext';

export type BaseExerciseType = {|
  +id?: string,
  +name: string,
  +videoLink?: string,
  +muscleGroup: string,
  +description?: string,
|};

const BaseExerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  videoLink: {
    type: String,
  },
  muscleGroup: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
});

const BaseExercise = mongoose.model('baseexercise', BaseExerciseSchema);

export const createExercise = (exercise: BaseExerciseType, user: ?LoggedInUser) => {
  if (user?.app === 'trainingjournal') {
    return BaseExercise.create({
      ...exercise,
      user: user?.id,
    });
  }
  return null;
};

export const getBaseExercises = async (user: ?LoggedInUser, skip: number, limit: number) => {
  if (user?.app === 'trainingjournal') {
    const [count, baseExercises] = await Promise.all([
      BaseExercise.where({ user: user?.id }).countDocuments(),
      BaseExercise.where({ user: user?.id })
        .skip(skip)
        .limit(limit)
        .select('-user'),
    ]);

    return {
      baseExercises,
      count,
    };
  }
  return null;
};
