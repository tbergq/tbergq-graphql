// @flow

import { GraphQLObjectType, GraphQLBoolean, GraphQLID } from 'graphql';

import TvShowNode from './TvShowNode';

export default new GraphQLObjectType({
  name: 'ToggleFavorite',
  fields: {
    success: {
      type: GraphQLBoolean,
    },
    serieId: {
      type: GraphQLID,
    },
    tvShow: {
      type: TvShowNode,
    },
  },
});
