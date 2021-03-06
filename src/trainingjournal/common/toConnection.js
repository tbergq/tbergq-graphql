// @flow

import { offsetToCursor } from 'graphql-relay';

type Config = {|
  +offset: number,
  +previous: boolean,
  +next: boolean,
|};
export default function toConnection<T>(items: $ReadOnlyArray<T>, config: Config) {
  const edges = items.map<any>((value, index) => ({
    cursor: offsetToCursor(config.offset + index),
    node: value,
  }));

  const firstEdge = edges[0];
  const lastEdge = edges[edges.length - 1];

  return {
    edges,
    pageInfo: {
      startCursor: firstEdge ? firstEdge.cursor : null,
      endCursor: lastEdge ? lastEdge.cursor : null,
      hasPreviousPage: config.previous,
      hasNextPage: config.next,
    },
  };
}
