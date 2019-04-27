// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';
import {
  connectionDefinitions,
  connectionFromArray,
  connectionArgs,
  type ConnectionArguments,
} from 'graphql-relay';

import DayConnection from './Day';
import type { Day, Week as WeekType } from '../../dataloaders/ProgramLoader';

const Week = new GraphQLObjectType({
  name: 'Week',
  fields: {
    id: GlobalID(({ id }) => id),
    name: {
      type: GraphQLString,
    },

    days: {
      type: DayConnection,
      args: {
        ...connectionArgs,
      },
      resolve: ({ days }: WeekType, args: ConnectionArguments) =>
        connectionFromArray<Day>(days, args),
    },
  },
});

const { connectionType: WeekConnection } = connectionDefinitions({
  nodeType: Week,
});

export default WeekConnection;
