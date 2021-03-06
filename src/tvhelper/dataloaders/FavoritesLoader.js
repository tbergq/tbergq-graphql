// @flow

import Dataloader from 'dataloader';

import { findFavorites } from '../db/models/FavoritesModel';

export type Favorites = {|
  +id: number,
  +userId: number,
  +serieId: number,
|};

const fetchFavorites = async (userIds: $ReadOnlyArray<string>) => {
  const responses = await Promise.all(userIds.map(userId => findFavorites(userId)));
  return responses;
};

const FavoritesLoader = () => new Dataloader<string, Favorites[]>(fetchFavorites);

export default FavoritesLoader;
