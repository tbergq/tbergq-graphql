// @flow

import { Schema } from 'mongoose';

import { trainingjournalConnection as mongoose } from '../../common/db/MongoDB';

const DaySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  week: {
    type: Schema.Types.ObjectId,
    ref: 'week',
    required: true,
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: 'exercise',
    },
  ],
});

const DayModel = mongoose.model('day', DaySchema);

export default DayModel;
