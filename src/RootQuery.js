// @flow

import { GraphQLObjectType } from 'graphql';

import searchTvShow from './tvhelper/queries/SearchTvShow';
import tvShowDetail from './tvhelper/queries/TvShowDetail';
import favorites from './tvhelper/queries/Favorites';
import episode from './tvhelper/queries/Episode';
import programs from './trainingjournal/programs/queries/progams';

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    episode,
    favorites,
    programs,
    searchTvShow,
    tvShowDetail,
  },
});
